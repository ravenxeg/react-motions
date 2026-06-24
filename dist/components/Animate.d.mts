import { t as AnimationDefinition } from "../types-D2YkctIa.mjs";
import { HTMLMotionProps, Transition } from "motion/react";
import React from "react";

//#region src/components/Animate.d.ts
interface AnimateProps extends Omit<HTMLMotionProps<"div">, "transition"> {
  children: React.ReactNode;
  animation?: AnimationDefinition;
  delay?: number;
  duration?: number;
  transition?: Transition;
  inView?: boolean;
  once?: boolean;
  margin?: string;
}
declare function Animate({
  children,
  animation,
  delay,
  duration,
  transition: customTransition,
  inView,
  once,
  margin,
  ...props
}: AnimateProps): import("react/jsx-runtime").JSX.Element;
//#endregion
export { Animate, AnimateProps };
//# sourceMappingURL=Animate.d.mts.map