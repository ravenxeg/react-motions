"use client";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_chunk = require("../chunk-D6vf50IK.js");
let motion_react = require("motion/react");
let react = require("react");
react = require_chunk.__toESM(react);
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/Magnetic.tsx
function Magnetic({ children, range = 60, strength = .35, ...props }) {
	const ref = (0, react.useRef)(null);
	const [position, setPosition] = (0, react.useState)({
		x: 0,
		y: 0
	});
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const { clientX, clientY } = e;
		const { width, height, left, top } = ref.current.getBoundingClientRect();
		const centerX = left + width / 2;
		const centerY = top + height / 2;
		const distanceX = clientX - centerX;
		const distanceY = clientY - centerY;
		if (Math.sqrt(distanceX * distanceX + distanceY * distanceY) < range) setPosition({
			x: distanceX * strength,
			y: distanceY * strength
		});
		else setPosition({
			x: 0,
			y: 0
		});
	};
	const handleMouseLeave = () => {
		setPosition({
			x: 0,
			y: 0
		});
	};
	const springOptions = {
		damping: 15,
		stiffness: 150,
		mass: .1
	};
	const xSpring = (0, motion_react.useSpring)(0, springOptions);
	const ySpring = (0, motion_react.useSpring)(0, springOptions);
	(0, react.useEffect)(() => {
		xSpring.set(position.x);
		ySpring.set(position.y);
	}, [
		position,
		xSpring,
		ySpring
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(motion_react.motion.div, {
		ref,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		style: {
			x: xSpring,
			y: ySpring
		},
		...props,
		children
	});
}
//#endregion
exports.Magnetic = Magnetic;
