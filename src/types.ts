import type { Target, Transition, Variant } from "motion/react";

export interface AnimationDefinition {
	initial?: Target | string;
	animate?: Target | string;
	exit?: Target | string;
	variants?: Record<string, Variant>;
	transition?: Transition;
}
