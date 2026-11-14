import { ReactLenis } from "lenis/react";

export default function SmoothScroll() {
  return <ReactLenis root options={{ lerp: 0.08 }} />;
}
