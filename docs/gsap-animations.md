# GSAP Animations

This project uses GreenSock Animation Platform (`gsap`) for high-performance interactive animations.

## Custom Hook: `useGsapAnimations`

To respect accessibility preferences (`prefers-reduced-motion`) and to keep code DRY, all GSAP logic should be wrapped inside the custom `useGsapAnimations` hook.

### Usage Example

```tsx
import { useRef } from 'react';
import { useGsapAnimations } from '../hooks/useGsapAnimations';

export function MyComponent() {
  const container = useRef<HTMLDivElement>(null);

  useGsapAnimations(({ gsap, ScrollTrigger }, isReducedMotion) => {
    if (!container.current) return;

    if (isReducedMotion) {
      // Minimal or no animations
      gsap.to('.item', { opacity: 1, duration: 0.5 });
    } else {
      // Full fidelity animations
      gsap.from('.item', { 
        y: 100, 
        opacity: 0, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top center',
        }
      });
    }
  });

  return (
    <div ref={container}>
      <div className="item opacity-0">...</div>
    </div>
  );
}
```

## Best Practices

1. **Avoid `useEffect` for GSAP**: Always use `useGsapAnimations` which leverages `@gsap/react`'s `useGSAP` internally. It handles cleanup perfectly to prevent memory leaks in React Strict Mode.
2. **Reduced Motion**: Always provide an alternative fade or simpler animation via the `isReducedMotion` boolean.
3. **ScrollTrigger**: Import it from the hook context instead of globally configuring it. 
