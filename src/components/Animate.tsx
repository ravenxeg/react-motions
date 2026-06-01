"use client";

import type { Transition } from "motion/react";
import { HTMLMotionProps, motion } from "motion/react";
import React from "react";
import { AnimationDefinition } from "../types";

export interface AnimateProps extends Omit<
	HTMLMotionProps<"div">,
	"transition"
> {
	children: React.ReactNode;
	animation?: AnimationDefinition;
	delay?: number;
	duration?: number;
	transition?: Transition;
	inView?: boolean;
	once?: boolean;
	margin?: string;
}

export function Animate({
	children,
	animation,
	delay,
	duration,
	transition: customTransition,
	inView = true,
	once = true,
	margin = "-50px",
	...props
}: AnimateProps) {
	const baseTransition = animation?.transition || {};
	const mergedTransition: Transition = {
		...baseTransition,
		...(duration !== undefined ? { duration } : {}),
		...(delay !== undefined ? { delay } : {}),
		...customTransition,
	};

	const initial = animation?.initial;
	const animateState = animation?.animate;
	const viewport = { once, margin };

	return (
		<motion.div
			initial={initial}
			whileInView={inView ? animateState : undefined}
			animate={!inView ? animateState : undefined}
			exit={animation?.exit}
			variants={animation?.variants}
			viewport={inView ? viewport : undefined}
			transition={mergedTransition}
			{...props}
		>
			{children}
		</motion.div>
	);
}
