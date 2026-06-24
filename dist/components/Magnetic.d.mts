import { HTMLMotionProps } from "motion/react";
import React from "react";

//#region src/components/Magnetic.d.ts
interface MagneticProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  range?: number;
  strength?: number;
}
declare function Magnetic({
  children,
  range,
  strength,
  ...props
}: MagneticProps): import("react/jsx-runtime").JSX.Element;
//#endregion
export { Magnetic, MagneticProps };
//# sourceMappingURL=Magnetic.d.mts.map