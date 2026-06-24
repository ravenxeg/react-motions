import { t as AnimationDefinition } from "../types-D2YkctIa.js";

//#region src/animations/presets.d.ts
interface AnimateInViewOptions {
  x?: number;
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
}
declare function animateInView({
  x,
  y,
  opacity,
  duration,
  delay
}?: AnimateInViewOptions): AnimationDefinition;
interface FadeInOptions {
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  ease?: string | number[];
}
declare function fadeIn({
  direction,
  distance,
  duration,
  ease
}?: FadeInOptions): AnimationDefinition;
interface ScaleInOptions {
  initialScale?: number;
  duration?: number;
  ease?: string | number[];
}
declare function scaleIn({
  initialScale,
  duration,
  ease
}?: ScaleInOptions): AnimationDefinition;
interface StaggerContainerOptions {
  staggerDelay?: number;
  initialDelay?: number;
}
declare function staggerContainer({
  staggerDelay,
  initialDelay
}?: StaggerContainerOptions): AnimationDefinition;
interface StaggerItemOptions {
  y?: number;
  duration?: number;
  ease?: string | number[];
}
declare function staggerItem({
  y,
  duration,
  ease
}?: StaggerItemOptions): AnimationDefinition;
interface BlurInOptions {
  initialBlur?: number;
  initialScale?: number;
  duration?: number;
  ease?: string | number[];
}
declare function blurIn({
  initialBlur,
  initialScale,
  duration,
  ease
}?: BlurInOptions): AnimationDefinition;
interface ClipRevealOptions {
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  ease?: string | number[];
}
declare function clipReveal({
  direction,
  duration,
  ease
}?: ClipRevealOptions): AnimationDefinition;
interface BounceInOptions {
  initialScale?: number;
  stiffness?: number;
  damping?: number;
}
declare function bounceIn({
  initialScale,
  stiffness,
  damping
}?: BounceInOptions): AnimationDefinition;
interface FlipOptions {
  axis?: "x" | "y";
  duration?: number;
  ease?: string | number[];
}
declare function flip({
  axis,
  duration,
  ease
}?: FlipOptions): AnimationDefinition;
interface SwingInOptions {
  duration?: number;
  ease?: string | number[];
}
declare function swingIn({
  duration,
  ease
}?: SwingInOptions): AnimationDefinition;
//#endregion
export { AnimateInViewOptions, BlurInOptions, BounceInOptions, ClipRevealOptions, FadeInOptions, FlipOptions, ScaleInOptions, StaggerContainerOptions, StaggerItemOptions, SwingInOptions, animateInView, blurIn, bounceIn, clipReveal, fadeIn, flip, scaleIn, staggerContainer, staggerItem, swingIn };
//# sourceMappingURL=presets.d.ts.map