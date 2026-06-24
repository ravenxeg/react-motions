"use client";
import { motion } from "motion/react";
import "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/Animate.tsx
function Animate({ children, animation, delay, duration, transition: customTransition, inView = true, once = true, margin = "-50px", ...props }) {
	const mergedTransition = {
		...animation?.transition || {},
		...duration !== void 0 ? { duration } : {},
		...delay !== void 0 ? { delay } : {},
		...customTransition
	};
	const initial = animation?.initial;
	const animateState = animation?.animate;
	const viewport = {
		once,
		margin
	};
	return /* @__PURE__ */ jsx(motion.div, {
		initial,
		whileInView: inView ? animateState : void 0,
		animate: !inView ? animateState : void 0,
		exit: animation?.exit,
		variants: animation?.variants,
		viewport: inView ? viewport : void 0,
		transition: mergedTransition,
		...props,
		children
	});
}
//#endregion
export { Animate };

//# sourceMappingURL=Animate.mjs.map