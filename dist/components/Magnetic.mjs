"use client";
import { motion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/Magnetic.tsx
function Magnetic({ children, range = 60, strength = .35, ...props }) {
	const ref = useRef(null);
	const [position, setPosition] = useState({
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
	const xSpring = useSpring(0, springOptions);
	const ySpring = useSpring(0, springOptions);
	useEffect(() => {
		xSpring.set(position.x);
		ySpring.set(position.y);
	}, [
		position,
		xSpring,
		ySpring
	]);
	return /* @__PURE__ */ jsx(motion.div, {
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
export { Magnetic };

//# sourceMappingURL=Magnetic.mjs.map