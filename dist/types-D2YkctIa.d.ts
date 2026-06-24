import { Target, Transition, Variant } from "motion/react";

//#region src/types.d.ts
interface AnimationDefinition {
  initial?: Target | string;
  animate?: Target | string;
  exit?: Target | string;
  variants?: Record<string, Variant>;
  transition?: Transition;
}
//#endregion
export { AnimationDefinition as t };
//# sourceMappingURL=types-D2YkctIa.d.ts.map