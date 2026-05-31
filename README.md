# react-motions ⚡️

A boilerplate wrapper for `motion/react` (the new, standalone package for Framer Motion) featuring a **unified animation API**. Tailored for full Next.js compatibility and optimized for fast production builds.

Instead of maintaining a separate component for every movement, `react-motions` provides a single base `<Animate>` component. You simply import lightweight animation functions, customize them on the fly, and pass them directly as props.

---

## Features

- **Next.js Ready**: Automatically preserves `"use client"` directives for seamless App Router integration.
- **Modern Bundling**: Generates super lightweight ESM, CommonJS, and TypeScript typings using `tsup`.
- **Unified API**: A single `<Animate>` component maps customizable motion definitions (fade, scale, stagger, scroll triggers) to motion targets.
- **Awesome Presets**: Includes high-end, premium layout transitions (blur transitions, 3D flips, mask reveals, and springy bounces).
- **Micro-interactions**: Standardized premium spring elements (e.g. `Magnetic` cursor pulls).

---

## Installation (Private Repository)

Since `react-motions` is hosted as a private repository, you can install it directly into your main Next.js project using `pnpm` in one of the following ways:

### Method 1: Using HTTPS and a Personal Access Token (PAT)
If you are deploying on Vercel, Netlify, or in CI/CD pipelines, configure your dependencies to pull via HTTPS using a GitHub token:
```bash
pnpm add git+https://<TOKEN>@github.com/<USERNAME>/react-motions.git
```

### Method 2: Using SSH (Recommended for Local Dev)
Ensure your SSH key is added to your GitHub account, then run:
```bash
pnpm add git+ssh://git@github.com:<USERNAME>/react-motions.git
```

---

## Pre-requisites

Make sure your target Next.js app has the core libraries installed:
```bash
pnpm add motion react react-dom
```

---

## The Unified API: `<Animate>`

The base `<Animate>` component acts as a bridge between React properties and `motion/react` dynamics. It accepts an `animation` property (an `AnimationDefinition` object returned by calling our helper presets) and allows easy developer overrides directly on the component.

### Component Props

All standard HTML `div` properties (such as `className`, `id`, `style`) alongside animation overrides:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `animation` | `AnimationDefinition` | `undefined` | The preconfigured motion layout (e.g. `fadeIn()`) |
| `delay` | `number` | `undefined` | Override animation transition delay (in seconds) |
| `duration` | `number` | `undefined` | Override animation transition duration (in seconds) |
| `transition` | `Transition` | `undefined` | Full custom Framer Motion transition overrides |
| `inView` | `boolean` | `true` | When `true`, animates when scrolled into view. When `false`, animates instantly on mount. |
| `once` | `boolean` | `true` | Whether the viewport trigger runs only once |
| `margin` | `string` | `"-50px"` | Viewport intersection margin offset |

---

## Animation Presets

### 1. `animateInView`
Recreates your original scroll-triggered default entrance. It fades and slides up elements when they enter the viewport.

**Preset Parameters:**
- `y?: number` (default `20`) - Starting y displacement.
- `x?: number` (default `0`) - Starting x displacement.
- `opacity?: number` (default `0`) - Starting opacity.
- `duration?: number` (default `0.5`) - Custom duration.
- `delay?: number` (default `0.5`) - Custom delay.

**Example:**
```tsx
import { Animate, animateInView } from "react-motions";

export default function MyComponent() {
  return (
    <Animate animation={animateInView()}>
      <div className="card">
        <h3>Scroll to Reveal Me!</h3>
        <p>I will fade and slide up gracefully.</p>
      </div>
    </Animate>
  );
}
```

### 2. `fadeIn`
A highly configurable slide-and-fade animation.

**Preset Parameters:**
- `direction?: "up" | "down" | "left" | "right" | "none"` (default `"up"`) - Entrance direction.
- `distance?: number` (default `20`) - Offset displacement in pixels.
- `duration?: number` (default `0.5`) - Default animation length.
- `ease?: string | number[]` (default `"easeOut"`) - Easing equation.

**Example:**
```tsx
import { Animate, fadeIn } from "react-motions";

export default function HeroSection() {
  return (
    <div className="hero">
      {/* Animates down instantly on mount */}
      <Animate animation={fadeIn({ direction: "down" })} inView={false} duration={0.8}>
        <h1>Premium Web Design</h1>
      </Animate>
      
      {/* Animates up on scroll with custom delay override */}
      <Animate animation={fadeIn({ direction: "up", distance: 35 })} delay={0.25}>
        <p>Elevate your Next.js application with ready-to-use animations.</p>
      </Animate>
    </div>
  );
}
```

### 3. `scaleIn`
A smooth zoom entrance animation. Excellent for cards, grid features, buttons, or modal popups.

**Preset Parameters:**
- `initialScale?: number` (default `0.95`) - Starting scale ratio.
- `duration?: number` (default `0.4`) - Default animation length.
- `ease?: string | number[]` (default `"easeOut"`) - Easing equation.

**Example:**
```tsx
import { Animate, scaleIn } from "react-motions";

export default function Grid() {
  return (
    <Animate animation={scaleIn({ initialScale: 0.8 })} delay={0.1}>
      <img src="/thumbnail.jpg" alt="Zoom In Effect" />
    </Animate>
  );
}
```

### 4. `blurIn` *(Premium)*
An Apple-style landing page transition that starts blurred and slightly scaled down, smoothly fading and focusing into place.

**Preset Parameters:**
- `initialBlur?: number` (default `10`) - Starting blur size in pixels.
- `initialScale?: number` (default `0.98`) - Starting scale ratio.
- `duration?: number` (default `0.6`) - Default animation length.
- `ease?: string | number[]` (default `"easeOut"`) - Easing equation.

**Example:**
```tsx
import { Animate, blurIn } from "react-motions";

export default function HeroText() {
  return (
    <Animate animation={blurIn({ initialBlur: 15 })} delay={0.2}>
      <h1 className="hero-title">Beautiful Cinematic Visuals</h1>
    </Animate>
  );
}
```

### 5. `clipReveal` *(Premium)*
A mask reveal effect utilizing the CSS `clipPath` property. Content slides out smoothly from behind an invisible rectangular boundary (mask).

**Preset Parameters:**
- `direction?: "up" | "down" | "left" | "right"` (default `"up"`) - The direction from which the content reveals.
- `duration?: number` (default `0.6`) - Length of the reveal.
- `ease?: string | number[]` (default `[0.16, 1, 0.3, 1]`) - Default high-end exponential easing.

**Example:**
```tsx
import { Animate, clipReveal } from "react-motions";

export default function MaskedTitle() {
  return (
    <div className="overflow-hidden">
      <Animate animation={clipReveal({ direction: "up" })} duration={0.8}>
        <h2>Revealed From Bottom</h2>
      </Animate>
    </div>
  );
}
```

### 6. `bounceIn` *(Premium)*
An elastic bounce entrance using Framer Motion spring physics. Ideal for interactive buttons, badge alerts, or CTA modules.

**Preset Parameters:**
- `initialScale?: number` (default `0.3`) - Starting scale ratio.
- `stiffness?: number` (default `300`) - Spring stiffness constraint.
- `damping?: number` (default `15`) - Spring damping constraint.

**Example:**
```tsx
import { Animate, bounceIn } from "react-motions";

export default function Badge() {
  return (
    <Animate animation={bounceIn({ stiffness: 200 })}>
      <span className="badge">New Alert!</span>
    </Animate>
  );
}
```

### 7. `flip` *(Premium)*
A stunning 3D perspective flip card entrance rotating on the X or Y axis as it fades in.

**Preset Parameters:**
- `axis?: "x" | "y"` (default `"y"`) - The axis to flip along.
- `duration?: number` (default `0.6`) - Transition duration.
- `ease?: string | number[]` (default `"easeOut"`) - Easing equation.

**Example:**
```tsx
import { Animate, flip } from "react-motions";

export default function FlipCard() {
  return (
    <Animate animation={flip({ axis: "y" })} delay={0.1}>
      <div className="3d-card">
        <h3>Feature Details</h3>
        <p>Interactive 3D flipped entry.</p>
      </div>
    </Animate>
  );
}
```

### 8. `swingIn` *(Premium)*
A swinging entrance suspended from a top hinge using 3D perspective tilts. Perfect for menu items or cards.

**Preset Parameters:**
- `duration?: number` (default `0.8`) - Transition duration.
- `ease?: string | number[]` (default `"easeOut"`) - Easing equation.

**Example:**
```tsx
import { Animate, swingIn } from "react-motions";

export default function hangingSign() {
  return (
    <Animate animation={swingIn()} duration={1.0}>
      <div className="sign-board">Open Today</div>
    </Animate>
  );
}
```

### 9. Staggered Entries (`staggerContainer` & `staggerItem`)
Coordinates list items sequentially. The parent wrapper controls stagger math, while child entries declare how they slide.

**Example:**
```tsx
import { Animate, staggerContainer, staggerItem } from "react-motions";

export default function FeatureList() {
  const items = ["Fast", "Flexible", "Beautiful", "Typed"];

  return (
    <Animate animation={staggerContainer({ staggerDelay: 0.15 })}>
      {items.map((item, index) => (
        <Animate key={index} animation={staggerItem({ y: 20 })}>
          <div className="feature-card">{item}</div>
        </Animate>
      ))}
    </Animate>
  );
}
```

---

## Special Components

### `Magnetic`
A premium hover micro-interaction utilizing high-fidelity spring physics. Wraps interactive elements (like custom buttons, icons, or social avatars) and gently pulls them toward the cursor on hover.

```tsx
import { Magnetic } from "react-motions";

export default function ActionButtons() {
  return (
    <Magnetic range={60} strength={0.4}>
      <button className="cta-btn">Hover Near Me</button>
    </Magnetic>
  );
}
```

---

## Local Development Instructions

If you wish to make changes to the wrapper library:

1. **Install dependencies**:
   ```bash
   pnpm install
   ```
2. **Run in development mode (watch)**:
   ```bash
   pnpm dev
   ```
3. **Build library for production**:
   ```bash
   pnpm build
   ```
4. **Run type-checking**:
   ```bash
   pnpm typecheck
   ```
