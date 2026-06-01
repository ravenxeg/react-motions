import { AnimationDefinition } from "../types";

export interface AnimateInViewOptions {
	x?: number;
	y?: number;
	opacity?: number;
	duration?: number;
	delay?: number;
}

export function animateInView({
	x = 0,
	y = 20,
	opacity = 0,
	duration = 0.5,
	delay = 0.5,
}: AnimateInViewOptions = {}): AnimationDefinition {
	return {
		initial: { opacity, x, y },
		animate: { opacity: 1, x: 0, y: 0 },
		transition: { duration, delay },
	};
}

export interface FadeInOptions {
	direction?: "up" | "down" | "left" | "right" | "none";
	distance?: number;
	duration?: number;
	ease?: string | number[];
}

export function fadeIn({
	direction = "up",
	distance = 20,
	duration = 0.5,
	ease = "easeOut",
}: FadeInOptions = {}): AnimationDefinition {
	const getDirectionOffsets = () => {
		switch (direction) {
			case "up":
				return { y: distance };
			case "down":
				return { y: -distance };
			case "left":
				return { x: distance };
			case "right":
				return { x: -distance };
			default:
				return {};
		}
	};

	return {
		initial: {
			opacity: 0,
			...getDirectionOffsets(),
		},
		animate: {
			opacity: 1,
			x: 0,
			y: 0,
		},
		transition: {
			duration,
			ease,
		},
	};
}

export interface ScaleInOptions {
	initialScale?: number;
	duration?: number;
	ease?: string | number[];
}

export function scaleIn({
	initialScale = 0.95,
	duration = 0.4,
	ease = "easeOut",
}: ScaleInOptions = {}): AnimationDefinition {
	return {
		initial: {
			opacity: 0,
			scale: initialScale,
		},
		animate: {
			opacity: 1,
			scale: 1,
		},
		transition: {
			duration,
			ease,
		},
	};
}

export interface StaggerContainerOptions {
	staggerDelay?: number;
	initialDelay?: number;
}

export function staggerContainer({
	staggerDelay = 0.1,
	initialDelay = 0,
}: StaggerContainerOptions = {}): AnimationDefinition {
	return {
		initial: "hidden",
		animate: "show",
		variants: {
			hidden: {},
			show: {
				transition: {
					staggerChildren: staggerDelay,
					delayChildren: initialDelay,
				},
			},
		},
	};
}

export interface StaggerItemOptions {
	y?: number;
	duration?: number;
	ease?: string | number[];
}

export function staggerItem({
	y = 15,
	duration = 0.4,
	ease = "easeOut",
}: StaggerItemOptions = {}): AnimationDefinition {
	return {
		variants: {
			hidden: { opacity: 0, y },
			show: {
				opacity: 1,
				y: 0,
				transition: {
					duration,
					ease,
				},
			},
		},
	};
}

export interface BlurInOptions {
	initialBlur?: number;
	initialScale?: number;
	duration?: number;
	ease?: string | number[];
}

export function blurIn({
	initialBlur = 10,
	initialScale = 0.98,
	duration = 0.6,
	ease = "easeOut",
}: BlurInOptions = {}): AnimationDefinition {
	return {
		initial: {
			opacity: 0,
			scale: initialScale,
			filter: `blur(${initialBlur}px)`,
		},
		animate: {
			opacity: 1,
			scale: 1,
			filter: "blur(0px)",
		},
		transition: {
			duration,
			ease,
		},
	};
}

export interface ClipRevealOptions {
	direction?: "up" | "down" | "left" | "right";
	duration?: number;
	ease?: string | number[];
}

export function clipReveal({
	direction = "up",
	duration = 0.6,
	ease = [0.16, 1, 0.3, 1], // easeOutExpo cubic bezier
}: ClipRevealOptions = {}): AnimationDefinition {
	const getClipPath = (state: "hidden" | "visible") => {
		if (state === "visible") return "inset(0% 0% 0% 0%)";
		switch (direction) {
			case "up":
				return "inset(100% 0% 0% 0%)";
			case "down":
				return "inset(0% 0% 100% 0%)";
			case "left":
				return "inset(0% 0% 0% 100%)";
			case "right":
				return "inset(0% 100% 0% 0%)";
		}
	};

	return {
		initial: {
			clipPath: getClipPath("hidden"),
		},
		animate: {
			clipPath: getClipPath("visible"),
		},
		transition: {
			duration,
			ease,
		},
	};
}

export interface BounceInOptions {
	initialScale?: number;
	stiffness?: number;
	damping?: number;
}

export function bounceIn({
	initialScale = 0.3,
	stiffness = 300,
	damping = 15,
}: BounceInOptions = {}): AnimationDefinition {
	return {
		initial: { opacity: 0, scale: initialScale },
		animate: { opacity: 1, scale: 1 },
		transition: {
			type: "spring",
			stiffness,
			damping,
		},
	};
}

export interface FlipOptions {
	axis?: "x" | "y";
	duration?: number;
	ease?: string | number[];
}

export function flip({
	axis = "y",
	duration = 0.6,
	ease = "easeOut",
}: FlipOptions = {}): AnimationDefinition {
	return {
		initial: {
			opacity: 0,
			rotateX: axis === "x" ? -90 : 0,
			rotateY: axis === "y" ? -90 : 0,
			transformPerspective: 1000,
		},
		animate: {
			opacity: 1,
			rotateX: 0,
			rotateY: 0,
		},
		transition: {
			duration,
			ease,
		},
	};
}

export interface SwingInOptions {
	duration?: number;
	ease?: string | number[];
}

export function swingIn({
	duration = 0.8,
	ease = "easeOut",
}: SwingInOptions = {}): AnimationDefinition {
	return {
		initial: {
			opacity: 0,
			rotateX: -70,
			transformOrigin: "top",
			transformPerspective: 1000,
		},
		animate: {
			opacity: 1,
			rotateX: 0,
		},
		transition: {
			duration,
			ease,
		},
	};
}
