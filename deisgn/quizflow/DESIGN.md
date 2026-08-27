---
name: QuizFlow
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
This design system centers on a **SaaS Premium** aesthetic, tailored for professional coaching institutes. The brand personality is efficient, authoritative, and focused, aiming to reduce cognitive load for both administrators and students. 

The visual style follows **Refined Minimalism**, utilizing generous white space to create a sense of calm and clarity. It avoids unnecessary decoration, relying instead on high-quality typography and a disciplined color palette to guide the user's eye. The interface feels "airy" yet structured, signaling a high-end, reliable tool for educational excellence.

## Colors
The palette is dominated by neutral whites and light grays to keep the environment clean. 

- **Primary (#4F46E5):** Used for main actions, active navigation states, and brand-critical elements. It provides a professional, "Indigo" anchor for the system.
- **Secondary (#10B981):** A "Success Teal" reserved for positive feedback, progress completion, and subtle accents that indicate growth or correctness.
- **Background (#F9FAFB):** A cool, nearly-white gray that provides enough contrast for white surface cards to pop.
- **Surface (#FFFFFF):** Used for all content containers, modals, and input areas to ensure maximum legibility.

## Typography
The system uses **Inter** exclusively to maintain a systematic, utilitarian, and modern feel. 

- **Headlines:** Use tighter letter spacing and semi-bold/bold weights to create a strong visual hierarchy against body text.
- **Body:** Standardized at 16px for optimal readability. Use `body-sm` (14px) for secondary metadata and supplemental info.
- **Labels:** Always use medium or semi-bold weights to ensure functional elements (buttons, tags, form labels) are immediately distinguishable from prose.

## Layout & Spacing
The layout follows a **Fluid Grid** model with fixed constraints for readability.

- **Desktop:** 12-column grid with 24px gutters. Max-width content containers should cap at 1280px to prevent excessive line lengths.
- **Sidebar:** A fixed-width sidebar (280px) is recommended for administration views, using `sm` (16px) internal padding.
- **Rhythm:** Use an 8px spacing scale. Vertical spacing between sections should default to `lg` (40px) to maintain the "SaaS Premium" airy feel.
- **Mobile:** Transition to a 4-column grid with 16px margins.

## Elevation & Depth
Depth is communicated through **Ambient Shadows** and **Tonal Layers**. 

1.  **Level 0 (Background):** #F9FAFB. All base-level layouts reside here.
2.  **Level 1 (Cards/Surfaces):** White background with a very soft, diffused shadow: `0px 4px 12px rgba(0, 0, 0, 0.03)`.
3.  **Level 2 (Active/Hover States):** Deepened shadow: `0px 8px 24px rgba(0, 0, 0, 0.06)`.
4.  **Level 3 (Modals/Popovers):** Highest elevation with a distinct shadow: `0px 12px 32px rgba(0, 0, 0, 0.1)`.

Avoid heavy borders; use light gray strokes (`#E2E8F0`) only when elements need to be separated on a white background.

## Shapes
The design system uses **Rounded** corners to evoke a friendly yet professional atmosphere.

- **Buttons & Inputs:** Use `rounded` (0.5rem / 8px) for a balanced look.
- **Cards & Modals:** Use `rounded-lg` (1rem / 16px) to create a distinct, modern container feel.
- **Chips & Tags:** Use `rounded-xl` or fully pill-shaped (2rem) to differentiate them from actionable buttons.

## Components
- **Buttons:** Primary buttons use a solid Indigo background with white text. Secondary buttons use a white background with an Indigo stroke and text. 
- **Input Fields:** Use 12px (0.75rem) internal padding. Borders should be `#D1D5DB`, turning Primary Indigo on focus with a 2px outer glow.
- **Cards:** White background, 16px border radius, and Level 1 shadow. Cards should have a 24px internal padding (spacing.md).
- **Sidebars:** Use a transparent background for inactive items and a light Indigo tint (`rgba(79, 70, 229, 0.08)`) with a Primary Indigo left-border for the active state.
- **Chips:** Small, pill-shaped indicators. For "Success" status, use a light Teal background (`#D1FAE5`) with dark Teal text (`#065F46`).
- **Progress Bars:** Thin 8px bars. The track is light gray, and the fill is Secondary Teal to represent quiz completion.