# UI Context

## Theme
Premium dark-first, with a light mode that feels equally considered. Precision engineering meets quiet confidence. Do not use generic IT company blue/orange gradients or stock photos.

## Colors

| Role            | CSS Variable         | Dark Mode Hex | Light Mode Hex |
| --------------- | -------------------- | ------------- | -------------- |
| Page background | `--bg-base`          | `#09090B`     | `#FFFFFF`      |
| Surface         | `--bg-surface`       | `#18181B`     | `#F4F4F5`      |
| Border          | `--border-default`   | `#27272A`     | `#E4E4E7`      |
| Primary text    | `--text-primary`     | `#FAFAFA`     | `#09090B`      |
| Muted text      | `--text-muted`       | `#71717A`     | `#71717A`      |
| Accent (Venus)  | `--accent-primary`   | `#D4A853`     | `#B8902A`      |
| Accent Hover    | `--accent-hover`     | `#E8BC6A`     | `#9A7B23`      |
| Highlight (Merc)| `--highlight-teal`   | `#14B8A6`     | `#0D9488`      |
| Danger          | `--state-error`      | `#EF4444`     | `#EF4444`      |
| Success         | `--state-success`    | `#22C55E`     | `#22C55E`      |

## Typography
Use `next/font/google` for optimal performance.
- **Display / Headings:** Bricolage Grotesque
- **Body / UI:** Inter
- **Code:** JetBrains Mono

## Motion (Framer Motion)
Keep it subtle. Perceived load time matters more than flair.
- **Hero:** Staggered word reveal (0.05s delay per word).
- **Scroll Entry:** Fade up (y: 20 → 0, opacity 0 → 1).
- **Card Hover:** Subtle lift (y: -4px) and border brighten.
- **Page Transitions:** Fade (opacity 0 → 1, 0.2s).
- **Prohibited:** Parallax, bouncing, heavy physics.