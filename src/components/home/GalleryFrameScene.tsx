"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface GalleryFrameSceneProps {
    sectionRef: RefObject<HTMLElement | null>;
    ctaHoveredRef?: RefObject<boolean>;
    onLoaded?: () => void;
}

const FRAME_LANDSCAPE_W = 6.2;
const FRAME_LANDSCAPE_H = 4.35;

function clamp01(v: number): number {
    return Math.max(0, Math.min(1, v));
}

function smoothstep(edge0: number, edge1: number, x: number): number {
    const t = clamp01((x - edge0) / (edge1 - edge0));
    return t * t * (3 - 2 * t);
}

function easeOutQuart(t: number): number {
    const u = 1 - clamp01(t);
    return 1 - u * u * u * u;
}

/**
 * Generates a silky diagonal specular light-glint texture for the Museum Glass pane.
 * Invisible at scroll=0; glides gently across the pane as the glass separates from the frame.
 */
function createGlassSheenTexture(): THREE.CanvasTexture {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    if (ctx) {
        ctx.clearRect(0, 0, size, size);
        // Subtle base crystalline tint
        ctx.fillStyle = "rgba(245, 250, 255, 0.14)";
        ctx.fillRect(0, 0, size, size);

        // Soft primary diagonal gallery window reflection band
        const grad = ctx.createLinearGradient(0, 0, size, size);
        grad.addColorStop(0.0, "rgba(255, 252, 244, 0.0)");
        grad.addColorStop(0.32, "rgba(255, 252, 244, 0.0)");
        grad.addColorStop(0.45, "rgba(255, 250, 238, 0.42)");
        grad.addColorStop(0.50, "rgba(255, 255, 255, 0.72)");
        grad.addColorStop(0.56, "rgba(255, 250, 238, 0.34)");
        grad.addColorStop(0.68, "rgba(255, 252, 244, 0.0)");
        // Fine secondary hairline reflection
        grad.addColorStop(0.76, "rgba(255, 255, 255, 0.24)");
        grad.addColorStop(0.82, "rgba(255, 252, 244, 0.0)");
        grad.addColorStop(1.0, "rgba(255, 252, 244, 0.0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

/**
 * High-contrast luxury studio environment cubemap via PMREMGenerator.
 * Deep warm bronze ambient paired with crisp luminous softboxes & dark negative-fill flags
 * for authentic, dimensional 23.75k Blattgold reflections.
 */
function createAtelierEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();

    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x524231);

    const domeGeo = new THREE.SphereGeometry(26, 32, 16);
    const domeMat = new THREE.MeshBasicMaterial({
        color: 0x4a3b2b,
        side: THREE.BackSide,
    });
    envScene.add(new THREE.Mesh(domeGeo, domeMat));

    const addPanel = (
        w: number,
        h: number,
        pos: [number, number, number],
        lookAt: [number, number, number],
        color: number,
        intensity: number
    ) => {
        const geo = new THREE.PlaneGeometry(w, h);
        const col = new THREE.Color(color).multiplyScalar(intensity);
        const mat = new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(pos[0], pos[1], pos[2]);
        mesh.lookAt(lookAt[0], lookAt[1], lookAt[2]);
        envScene.add(mesh);
    };

    // Focused high-intensity warm gallery softboxes
    addPanel(11, 8, [9, 10, 10], [0, 0, 0], 0xfff3d4, 5.2);
    addPanel(16, 3.2, [0, 14, 4], [0, 0, 0], 0xfff8e8, 4.2);
    // Crisp cool-ivory daylight window on the left
    addPanel(9, 11, [-12, 5, 9], [0, 0, 0], 0xf3f6fc, 3.0);
    // Warm golden floor bounce
    addPanel(18, 12, [0, -12, 5], [0, 0, 0], 0xd9b882, 1.35);
    // Warm gilded rim light strip behind-right
    addPanel(10, 10, [11, 3, -10], [0, 0, 0], 0xffd78c, 3.6);
    // Secondary diagonal specular accent bar
    addPanel(3.5, 16, [-6, 8, 13], [0, 0, 0], 0xffefc9, 2.8);

    // Rich dark negative-fill studio flags (carves gold leaf relief!)
    addPanel(8, 16, [13, -2, 3], [0, 0, 0], 0x16100a, 0.2);
    addPanel(7, 14, [-13, -3, 3], [0, 0, 0], 0x1b140d, 0.25);
    addPanel(16, 6, [0, -7, 13], [0, 0, 0], 0x241b12, 0.3);
    addPanel(14, 8, [0, 4, -14], [0, 0, 0], 0x1e160e, 0.3);

    const envRT = pmrem.fromScene(envScene, 0.03);
    pmrem.dispose();

    envScene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
            obj.geometry.dispose();
            if (Array.isArray(obj.material)) {
                obj.material.forEach((m) => m.dispose());
            } else {
                obj.material.dispose();
            }
        }
    });

    return envRT.texture;
}

export function GalleryFrameScene({
    sectionRef,
    ctaHoveredRef,
    onLoaded,
}: GalleryFrameSceneProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.05;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // Scene & Camera
        const scene = new THREE.Scene();
        const envMap = createAtelierEnvironment(renderer);
        scene.environment = envMap;

        const camera = new THREE.PerspectiveCamera(
            34,
            Math.max(1, container.clientWidth) / Math.max(1, container.clientHeight),
            0.1,
            80
        );

        let isPortrait = false;
        let baseCameraZ = 8.2;

        const updateLayoutForSize = (w: number, h: number) => {
            const aspect = Math.max(0.35, w / Math.max(1, h));
            isPortrait = aspect < 0.85;
            camera.aspect = aspect;

            const fovRad = THREE.MathUtils.degToRad(camera.fov);
            const activeW = isPortrait ? FRAME_LANDSCAPE_H : FRAME_LANDSCAPE_W;
            const activeH = isPortrait ? FRAME_LANDSCAPE_W : FRAME_LANDSCAPE_H;

            const wPad = isPortrait ? 1.08 : 1.12;
            const hPad = isPortrait ? 1.32 : 1.16;

            const distForH = (activeH * hPad) / (2 * Math.tan(fovRad / 2));
            const distForW = (activeW * wPad) / (2 * Math.tan(fovRad / 2) * aspect);
            baseCameraZ = Math.max(distForH, distForW, isPortrait ? 12.2 : 7.8);
            camera.position.set(0, 0, baseCameraZ);
            camera.updateProjectionMatrix();
        };
        updateLayoutForSize(container.clientWidth, container.clientHeight);

        // Studio Lighting Rig
        const hemiLight = new THREE.HemisphereLight(0xfff7e6, 0x7c6548, 0.48);
        scene.add(hemiLight);

        const keyLight = new THREE.DirectionalLight(0xfff0d4, 2.75);
        keyLight.position.set(4.8, 4.6, 7.2);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.set(2048, 2048);
        keyLight.shadow.camera.near = 1;
        keyLight.shadow.camera.far = 26;
        keyLight.shadow.camera.left = -5.5;
        keyLight.shadow.camera.right = 5.5;
        keyLight.shadow.camera.top = 5.5;
        keyLight.shadow.camera.bottom = -5.5;
        keyLight.shadow.bias = -0.0004;
        keyLight.shadow.normalBias = 0.025;
        keyLight.shadow.radius = 4.0;
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0xeef3ff, 0.72);
        fillLight.position.set(-5.5, -1.8, 4.8);
        scene.add(fillLight);

        const rimLight = new THREE.DirectionalLight(0xffd891, 1.55);
        rimLight.position.set(-2.8, 4.2, -4.5);
        scene.add(rimLight);

        // Pillar 5: Dedicated interactive warm atelier glint light that softly tracks desktop cursor
        // and warms subtly when hovering Hero CTA buttons
        const cursorGlintLight = new THREE.PointLight(0xffe6b3, 0.0, 16, 1.6);
        cursorGlintLight.position.set(0, 1.2, 4.2);
        scene.add(cursorGlintLight);

        // Assembly groups
        const pivotGroup = new THREE.Group();
        const orientationGroup = new THREE.Group();
        pivotGroup.add(orientationGroup);
        scene.add(pivotGroup);

        let layer1Gold: THREE.Object3D | null = null;
        let layer2Glass: THREE.Object3D | null = null;
        let layer3Passepartout: THREE.Object3D | null = null;
        let layer4Subframe: THREE.Object3D | null = null;
        let glassMaterial: THREE.MeshPhysicalMaterial | null = null;
        const glassSheenTex = createGlassSheenTexture();

        let disposed = false;
        let modelLoadedAt = -1;

        // Load high-definition Blender GLB v3 model
        const loader = new GLTFLoader();
        const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());

        loader.load(
            "/models/gallery-frame.glb?v=3",
            (gltf) => {
                if (disposed) return;

                const model = gltf.scene;
                orientationGroup.add(model);

                model.traverse((child) => {
                    if (child.name === "Layer_01_GoldFrame") layer1Gold = child;
                    if (child.name === "Layer_02_MuseumGlass") layer2Glass = child;
                    if (child.name === "Layer_03_Passepartout") layer3Passepartout = child;
                    if (child.name === "Layer_04_Subframe") layer4Subframe = child;

                    if (child instanceof THREE.Mesh) {
                        const isGlass =
                            child.name.includes("MuseumGlass") ||
                            (child.material &&
                                !Array.isArray(child.material) &&
                                child.material.name.includes("MuseumGlass"));

                        if (isGlass) {
                            glassMaterial = new THREE.MeshPhysicalMaterial({
                                color: new THREE.Color(0xf8fbff),
                                map: glassSheenTex,
                                transparent: true,
                                opacity: 0.0,
                                roughness: 0.03,
                                metalness: 0.08,
                                reflectivity: 0.96,
                                clearcoat: 1.0,
                                clearcoatRoughness: 0.03,
                                envMapIntensity: 2.0,
                                depthWrite: false,
                            });
                            child.material = glassMaterial;
                            child.castShadow = false;
                            child.receiveShadow = false;
                        } else {
                            child.castShadow = true;
                            child.receiveShadow = true;

                            const mats = Array.isArray(child.material)
                                ? child.material
                                : [child.material];

                            mats.forEach((mat) => {
                                if (mat instanceof THREE.MeshStandardMaterial) {
                                    if (mat.map) mat.map.anisotropy = maxAniso;
                                    if (mat.roughnessMap) mat.roughnessMap.anisotropy = maxAniso;
                                    if (mat.normalMap) mat.normalMap.anisotropy = maxAniso;

                                    if (mat.name.includes("Blattgold_Burnished")) {
                                        mat.envMapIntensity = 1.48;
                                    } else if (mat.name.includes("Blattgold")) {
                                        mat.envMapIntensity = 1.4;
                                    } else if (mat.name.includes("Passepartout")) {
                                        mat.envMapIntensity = 0.45;
                                    } else if (mat.name.includes("Walnut")) {
                                        mat.envMapIntensity = 0.78;
                                    } else if (mat.name.includes("Brass")) {
                                        mat.envMapIntensity = 1.38;
                                    }
                                    mat.needsUpdate = true;
                                }
                            });
                        }
                    }
                });

                modelLoadedAt = performance.now();
                setIsReady(true);
                onLoaded?.();
            },
            undefined,
            (err) => {
                console.error("Failed to load gallery-frame.glb:", err);
            }
        );

        // Pointer tracking (desktop atelier light + micro-parallax)
        const pointerTarget = { x: 0, y: 0, active: 0 };
        const pointerCurrent = { x: 0, y: 0, active: 0 };

        const handlePointerMove = (e: PointerEvent) => {
            if (prefersReducedMotion || e.pointerType === "touch") return;
            pointerTarget.x = (e.clientX / window.innerWidth) * 2 - 1;
            pointerTarget.y = (e.clientY / window.innerHeight) * 2 - 1;
            pointerTarget.active = 1;
        };
        const handlePointerLeave = () => {
            pointerTarget.active = 0;
        };
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        document.addEventListener("mouseleave", handlePointerLeave, { passive: true });

        // Resize observer
        const resizeObserver = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (!entry) return;
            const { width, height } = entry.contentRect;
            if (width <= 0 || height <= 0) return;
            renderer.setSize(width, height);
            updateLayoutForSize(width, height);
        });
        resizeObserver.observe(container);

        // Direct DOM scroll progress (0 re-renders)
        const getScrollProgress = () => {
            const el = sectionRef.current;
            if (!el) return 0;
            const rect = el.getBoundingClientRect();
            const scrollable = Math.max(1, rect.height - window.innerHeight);
            return clamp01(-rect.top / scrollable);
        };

        // Critically-damped spring state for buttery Swiss-watch scroll momentum
        let scrollPos = getScrollProgress();
        let scrollVel = 0;

        // Independent weighted Z states per craft layer (Pillar 1: Overlapping Action)
        let zGold = 0;
        let zGlass = 0;
        let zPassepartout = 0;
        let zSubframe = 0;

        // Damped UI hover resonance state (Pillar 5)
        let hoverEnergy = 0;

        // Smooth camera tracking state (Pillar 2: Cinematic Camera Arc)
        const camPos = new THREE.Vector3(0, 0, baseCameraZ);
        const lookAtTarget = new THREE.Vector3(0, 0, 0);

        let currentPortraitZ = isPortrait ? Math.PI / 2 : 0;
        let rafId = 0;
        let lastFrameTime = performance.now();
        const clock = new THREE.Clock();

        const animate = () => {
            if (disposed) return;
            rafId = requestAnimationFrame(animate);

            const now = performance.now();
            const dt = Math.min((now - lastFrameTime) / 1000, 0.05);
            lastFrameTime = now;
            const elapsed = clock.getElapsedTime();

            // ------------------------------------------------------------------
            // Pillar 1: Critically-damped spring scroll physics (no overshoot)
            // ------------------------------------------------------------------
            const rawScroll = getScrollProgress();
            const stiffness = prefersReducedMotion ? 160 : 72;
            const damping = prefersReducedMotion ? 26 : 17.5;
            const accel = (rawScroll - scrollPos) * stiffness - scrollVel * damping;
            scrollVel += accel * dt;
            scrollPos = clamp01(scrollPos + scrollVel * dt);

            // Smooth pointer & CTA hover state
            const ptrAlpha = 1 - Math.exp(-5.5 * dt);
            pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * ptrAlpha;
            pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * ptrAlpha;
            pointerCurrent.active += (pointerTarget.active - pointerCurrent.active) * ptrAlpha;

            const isCtaHovered = Boolean(ctaHoveredRef?.current);
            hoverEnergy += ((isCtaHovered ? 1 : 0) - hoverEnergy) * (1 - Math.exp(-6.5 * dt));

            // Portrait <-> Landscape alignment
            const targetPortraitZ = isPortrait ? Math.PI / 2 : 0;
            currentPortraitZ += (targetPortraitZ - currentPortraitZ) * (1 - Math.exp(-10 * dt));
            orientationGroup.rotation.z = currentPortraitZ;

            // ------------------------------------------------------------------
            // Pillar 4: Refined 1.35s Arrival Choreography on First Load
            // ------------------------------------------------------------------
            let arrivalProgress = 1;
            let arrivalGlint = 0;
            if (modelLoadedAt > 0 && !prefersReducedMotion) {
                const age = (now - modelLoadedAt) / 1000;
                arrivalProgress = easeOutQuart(age / 1.35);
                // Single diagonal golden atelier light sweep across 0.15s -> 1.45s
                arrivalGlint = clamp01((age - 0.15) / 1.3);
            }
            const arrivalInv = 1 - arrivalProgress;

            // ------------------------------------------------------------------
            // Scroll Phase Curves
            // ------------------------------------------------------------------
            const mainArc = smoothstep(0.01, 0.54, scrollPos);
            const fadeDepth = smoothstep(0.54, 0.86, scrollPos);

            // Staggered craft layer targets (Overlapping Action with individual physical weight)
            const explodeScale = isPortrait ? 0.84 : 1.0;
            const tGold = smoothstep(0.02, 0.42, scrollPos) * 0.84 * explodeScale;
            const tGlass = smoothstep(0.08, 0.48, scrollPos) * 0.27 * explodeScale;
            const tPassepartout = -smoothstep(0.14, 0.54, scrollPos) * 0.30 * explodeScale;
            const tSubframe = -smoothstep(0.19, 0.60, scrollPos) * 0.86 * explodeScale;

            // Each material has its own subtle damping inertia (glass quickest, solid walnut heaviest)
            zGold += (tGold - zGold) * (1 - Math.exp(-9.5 * dt));
            zGlass += (tGlass - zGlass) * (1 - Math.exp(-11.5 * dt));
            zPassepartout += (tPassepartout - zPassepartout) * (1 - Math.exp(-8.5 * dt));
            zSubframe += (tSubframe - zSubframe) * (1 - Math.exp(-7.2 * dt));

            if (layer1Gold) layer1Gold.position.z = zGold;
            if (layer2Glass) layer2Glass.position.z = zGlass;
            if (layer3Passepartout) layer3Passepartout.position.z = zPassepartout;
            if (layer4Subframe) layer4Subframe.position.z = zSubframe;

            // Museum Glass diagonal crystalline glint sweep as it detaches from the frame
            if (glassMaterial) {
                const glassSeparate = smoothstep(0.08, 0.48, scrollPos);
                const glassGlintPeak = Math.sin(glassSeparate * Math.PI); // peaks cleanly mid-separation
                glassMaterial.opacity = glassSeparate * 0.18 + glassGlintPeak * 0.12;
                glassSheenTex.offset.set(-0.35 + scrollPos * 1.15, 0.2 - scrollPos * 0.65);
            }

            // ------------------------------------------------------------------
            // Subtle Breathing, Pointer Parallax & CTA Hover Micro-Resonance
            // ------------------------------------------------------------------
            const restFactor = prefersReducedMotion ? 0 : (1 - mainArc * 0.7) * arrivalProgress;
            // Keep portrait mobile vertically steady so the top gold bar never drifts toward the header logo
            const breatheY = isPortrait ? 0 : Math.sin(elapsed * 0.85) * 0.028 * restFactor;
            const breatheRotY = Math.sin(elapsed * 0.55) * (isPortrait ? 0.01 : 0.015) * restFactor;

            const parallaxFactor = prefersReducedMotion ? 0 : 1 - mainArc * 0.45;
            const parallaxY = pointerCurrent.x * 0.055 * parallaxFactor;
            const parallaxX = pointerCurrent.y * 0.036 * parallaxFactor;

            // Quiet hover breath: frame leans an almost-imperceptible 1.4 deg toward viewer on CTA hover
            const hoverTiltX = -hoverEnergy * 0.022 * restFactor;
            const hoverScale = 1 + hoverEnergy * 0.012 * restFactor;

            // Combine Arrival poise + Calm Counter-Rotation (paired with Cinematic Camera Arc)
            const frameRotY =
                mainArc * (isPortrait ? 0.32 : 0.36) +
                fadeDepth * 0.08 +
                breatheRotY +
                parallaxY -
                arrivalInv * 0.16;
            const frameRotX =
                mainArc * (isPortrait ? -0.10 : -0.13) +
                parallaxX +
                hoverTiltX +
                arrivalInv * 0.07;
            const frameRotZ = mainArc * 0.026;

            pivotGroup.rotation.set(frameRotX, frameRotY, frameRotZ);

            // Frame stays serenely anchored in place while dissolving (no upward scroll drift).
            // Subtle -0.05 offset on portrait mobile balances breathing room between Header and scroll cue.
            const arrivalScale = 1 - arrivalInv * 0.045;
            const totalScale = arrivalScale * hoverScale;
            const portraitBaseY = isPortrait ? -0.05 * (1 - mainArc * 0.6) : 0;
            pivotGroup.scale.setScalar(totalScale);
            pivotGroup.position.set(
                -mainArc * (isPortrait ? 0.04 : 0.08),
                portraitBaseY + breatheY,
                -arrivalInv * 0.55 - fadeDepth * 0.28
            );

            // ------------------------------------------------------------------
            // Pillar 2: Cinematic Camera Arc (orbits smoothly around gilded corner)
            // ------------------------------------------------------------------
            const arcBell = Math.sin(mainArc * Math.PI * 0.85);
            const targetCamX =
                mainArc * (isPortrait ? 0.82 : 1.38) +
                pointerCurrent.x * (isPortrait ? 0.0 : 0.16) * parallaxFactor;
            const targetCamY =
                arcBell * (isPortrait ? 0.26 : 0.44) -
                pointerCurrent.y * (isPortrait ? 0.0 : 0.10) * parallaxFactor;

            // Slight dramatic zoom-in toward the craftsmanship on desktop, safe breathing room on mobile,
            // then gentle soft forward glide as the frame dissolves
            const zoomFactor = isPortrait
                ? 1 + mainArc * 0.12 - fadeDepth * 0.05
                : 1 - arcBell * 0.055 - fadeDepth * 0.07;
            const targetCamZ = baseCameraZ * zoomFactor;

            const camAlpha = 1 - Math.exp(-7.5 * dt);
            camPos.x += (targetCamX - camPos.x) * camAlpha;
            camPos.y += (targetCamY - camPos.y) * camAlpha;
            camPos.z += (targetCamZ - camPos.z) * camAlpha;
            camera.position.copy(camPos);

            // Gently bias camera lookAt toward the sculpted corner relief during 3/4 peak
            const targetLookX = mainArc * (isPortrait ? 0.08 : 0.22);
            const targetLookY = arcBell * 0.06;
            lookAtTarget.x += (targetLookX - lookAtTarget.x) * camAlpha;
            lookAtTarget.y += (targetLookY - lookAtTarget.y) * camAlpha;
            camera.lookAt(lookAtTarget);

            // ------------------------------------------------------------------
            // Pillars 4 & 5: Arrival Golden Glint + Interactive Atelier Lighting
            // ------------------------------------------------------------------
            // Arrival sweep travels smoothly across the gold leaf right on initial load
            const arrivalLightSweep =
                arrivalGlint < 1 && !prefersReducedMotion
                    ? Math.sin(arrivalGlint * Math.PI) * -4.2 + (arrivalGlint - 0.5) * 3.8
                    : 0;

            const lightSweepAngle = -0.45 + scrollPos * 1.75 + pointerCurrent.x * 0.28;
            keyLight.position.set(
                Math.sin(lightSweepAngle) * 7.6 + arrivalLightSweep,
                4.2 + Math.cos(scrollPos * Math.PI) * 1.3 - pointerCurrent.y * 0.9,
                6.8
            );
            // Warm up key & rim light delicately on CTA hover
            keyLight.intensity = 2.75 + hoverEnergy * 0.48;
            rimLight.intensity = 1.55 + hoverEnergy * 0.35 + mainArc * 0.25;

            // Cursor-tracking warm atelier glint point light (Desktop Quiet Luxury shimmer)
            cursorGlintLight.position.set(
                pointerCurrent.x * 3.4,
                -pointerCurrent.y * 2.2 + 0.6,
                3.6
            );
            const glintStrength =
                (pointerCurrent.active * 1.6 + hoverEnergy * 2.2) * (1 - fadeDepth * 0.85);
            cursorGlintLight.intensity = prefersReducedMotion ? 0 : glintStrength;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            disposed = true;
            cancelAnimationFrame(rafId);
            window.removeEventListener("pointermove", handlePointerMove);
            document.removeEventListener("mouseleave", handlePointerLeave);
            resizeObserver.disconnect();

            pivotGroup.traverse((obj) => {
                if (obj instanceof THREE.Mesh) {
                    obj.geometry.dispose();
                    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
                    mats.forEach((m) => {
                        if (m instanceof THREE.MeshStandardMaterial) {
                            m.map?.dispose();
                            m.roughnessMap?.dispose();
                            m.normalMap?.dispose();
                        }
                        m.dispose();
                    });
                }
            });

            glassSheenTex.dispose();
            envMap.dispose();
            renderer.dispose();
            if (renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [sectionRef, ctaHoveredRef, onLoaded]);

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out pointer-events-none ${
                isReady ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
        />
    );
}
