"use client";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_chunk = require("../chunk-D6vf50IK.js");
let motion_react = require("motion/react");
let react = require("react");
react = require_chunk.__toESM(react);
let react_jsx_runtime = require("react/jsx-runtime");
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
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(motion_react.motion.div, {
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
exports.Animate = Animate;
