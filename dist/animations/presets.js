Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/animations/presets.ts
function animateInView({ x = 0, y = 20, opacity = 0, duration = .5, delay = .5 } = {}) {
	return {
		initial: {
			opacity,
			x,
			y
		},
		animate: {
			opacity: 1,
			x: 0,
			y: 0
		},
		transition: {
			duration,
			delay
		}
	};
}
function fadeIn({ direction = "up", distance = 20, duration = .5, ease = "easeOut" } = {}) {
	const getDirectionOffsets = () => {
		switch (direction) {
			case "up": return { y: distance };
			case "down": return { y: -distance };
			case "left": return { x: distance };
			case "right": return { x: -distance };
			default: return {};
		}
	};
	return {
		initial: {
			opacity: 0,
			...getDirectionOffsets()
		},
		animate: {
			opacity: 1,
			x: 0,
			y: 0
		},
		transition: {
			duration,
			ease
		}
	};
}
function scaleIn({ initialScale = .95, duration = .4, ease = "easeOut" } = {}) {
	return {
		initial: {
			opacity: 0,
			scale: initialScale
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			duration,
			ease
		}
	};
}
function staggerContainer({ staggerDelay = .1, initialDelay = 0 } = {}) {
	return {
		initial: "hidden",
		animate: "show",
		variants: {
			hidden: {},
			show: { transition: {
				staggerChildren: staggerDelay,
				delayChildren: initialDelay
			} }
		}
	};
}
function staggerItem({ y = 15, duration = .4, ease = "easeOut" } = {}) {
	return { variants: {
		hidden: {
			opacity: 0,
			y
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration,
				ease
			}
		}
	} };
}
function blurIn({ initialBlur = 10, initialScale = .98, duration = .6, ease = "easeOut" } = {}) {
	return {
		initial: {
			opacity: 0,
			scale: initialScale,
			filter: `blur(${initialBlur}px)`
		},
		animate: {
			opacity: 1,
			scale: 1,
			filter: "blur(0px)"
		},
		transition: {
			duration,
			ease
		}
	};
}
function clipReveal({ direction = "up", duration = .6, ease = [
	.16,
	1,
	.3,
	1
] } = {}) {
	const getClipPath = (state) => {
		if (state === "visible") return "inset(0% 0% 0% 0%)";
		switch (direction) {
			case "up": return "inset(100% 0% 0% 0%)";
			case "down": return "inset(0% 0% 100% 0%)";
			case "left": return "inset(0% 0% 0% 100%)";
			case "right": return "inset(0% 100% 0% 0%)";
		}
	};
	return {
		initial: { clipPath: getClipPath("hidden") },
		animate: { clipPath: getClipPath("visible") },
		transition: {
			duration,
			ease
		}
	};
}
function bounceIn({ initialScale = .3, stiffness = 300, damping = 15 } = {}) {
	return {
		initial: {
			opacity: 0,
			scale: initialScale
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			type: "spring",
			stiffness,
			damping
		}
	};
}
function flip({ axis = "y", duration = .6, ease = "easeOut" } = {}) {
	return {
		initial: {
			opacity: 0,
			rotateX: axis === "x" ? -90 : 0,
			rotateY: axis === "y" ? -90 : 0,
			transformPerspective: 1e3
		},
		animate: {
			opacity: 1,
			rotateX: 0,
			rotateY: 0
		},
		transition: {
			duration,
			ease
		}
	};
}
function swingIn({ duration = .8, ease = "easeOut" } = {}) {
	return {
		initial: {
			opacity: 0,
			rotateX: -70,
			transformOrigin: "top",
			transformPerspective: 1e3
		},
		animate: {
			opacity: 1,
			rotateX: 0
		},
		transition: {
			duration,
			ease
		}
	};
}
//#endregion
exports.animateInView = animateInView;
exports.blurIn = blurIn;
exports.bounceIn = bounceIn;
exports.clipReveal = clipReveal;
exports.fadeIn = fadeIn;
exports.flip = flip;
exports.scaleIn = scaleIn;
exports.staggerContainer = staggerContainer;
exports.staggerItem = staggerItem;
exports.swingIn = swingIn;
