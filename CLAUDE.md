# Material Design 3 (MD3) Design System for Claude Code

This document defines the Material Design 3 implementation guidelines for all frontend development in Claude Code. Follow these specifications to ensure consistent, accessible, and visually cohesive interfaces.

---

## 1. Core Principles

### 1.1 Design Philosophy
- **Personal**: Adapt to user preferences and contexts
- **Expressive**: Support brand identity through color, typography, and motion
- **Adaptive**: Responsive layouts that work across all devices and screen sizes

### 1.2 Key Concepts
- **Color tokens** over hardcoded values
- **Shape tokens** for consistent corner radii
- **Elevation tokens** for depth hierarchy
- **Motion tokens** for animation consistency
- **Typography scale** for text hierarchy

---

## 2. Color System

### 2.1 Color Palette (Custom Tokens)

Use these CSS custom properties throughout all components:

```css
:root {
  /* ══════════════════════════════════════════════════════════
     BLUE SPECTRUM - Primary actions, links, focus states
     ══════════════════════════════════════════════════════════ */
  --md-blue-50: #DBECF4;
  --md-blue-100: #B6DBF3;
  --md-blue-200: #8DC7DE;
  --md-blue-300: #76AED9;
  --md-blue-400: #4A8EBF;
  --md-blue-500: #34659F;
  
  /* ══════════════════════════════════════════════════════════
     GREEN SPECTRUM - Success, confirmation, positive states
     ══════════════════════════════════════════════════════════ */
  --md-green-50: #DEF5B7;
  --md-green-100: #BCE48E;
  --md-green-200: #9FD775;
  --md-green-300: #80C261;
  --md-green-400: #549F3A;
  --md-green-500: #357D23;
  
  /* ══════════════════════════════════════════════════════════
     ORANGE SPECTRUM - Warnings, attention, caution states
     ══════════════════════════════════════════════════════════ */
  --md-orange-50: #FFE9B7;
  --md-orange-100: #FFCD80;
  --md-orange-200: #FBAC54;
  --md-orange-300: #F48E40;
  --md-orange-400: #E15720;
  --md-orange-500: #9D3A22;
  
  /* ══════════════════════════════════════════════════════════
     PURPLE SPECTRUM - Secondary actions, decorative elements
     ══════════════════════════════════════════════════════════ */
  --md-purple-50: #F3E3FE;
  --md-purple-100: #DCC9EC;
  --md-purple-200: #C3ADDD;
  --md-purple-300: #AF93C6;
  --md-purple-400: #8E6FBF;
  --md-purple-500: #79409E;
  
  /* ══════════════════════════════════════════════════════════
     TEAL SPECTRUM - Tertiary actions, informational elements
     ══════════════════════════════════════════════════════════ */
  --md-teal-50: #DAF3E0;
  --md-teal-100: #ACE4CB;
  --md-teal-200: #85D9BF;
  --md-teal-300: #6DBBAA;
  --md-teal-400: #45998A;
  --md-teal-500: #267675;
  
  /* ══════════════════════════════════════════════════════════
     PINK/MAGENTA SPECTRUM - Accents, highlights
     ══════════════════════════════════════════════════════════ */
  --md-pink-50: #FBD8E7;
  --md-pink-100: #F7B8DE;
  --md-pink-200: #E49CCE;
  --md-pink-300: #EB76C2;
  --md-pink-400: #CF51AC;
  --md-pink-500: #A12B9B;
  
  /* ══════════════════════════════════════════════════════════
     RED SPECTRUM - Errors, destructive actions, alerts
     ══════════════════════════════════════════════════════════ */
  --md-red-50: #FFDDDE;
  --md-red-100: #FFB9BB;
  --md-red-200: #FF9895;
  --md-red-300: #FB807B;
  --md-red-400: #E65655;
  --md-red-500: #CE2B26;
  
  /* ══════════════════════════════════════════════════════════
     NEUTRAL SPECTRUM - Backgrounds, surfaces, text
     ══════════════════════════════════════════════════════════ */
  --md-neutral-50: #E8E8E8;
  --md-neutral-100: #D1D1D1;
  --md-neutral-200: #BABABA;
  --md-neutral-300: #A2A2A2;
  --md-neutral-400: #7E7E7E;
  --md-neutral-500: #5B5B5B;
}
```

### 2.2 Semantic Color Tokens

Map palette colors to semantic meanings:

```css
:root {
  /* ══════════════════════════════════════════════════════════
     LIGHT THEME - Default
     ══════════════════════════════════════════════════════════ */
  
  /* Primary - Main brand color for key actions */
  --md-sys-color-primary: var(--md-blue-400);
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-primary-container: var(--md-blue-50);
  --md-sys-color-on-primary-container: var(--md-blue-500);
  
  /* Secondary - Supporting color for less prominent actions */
  --md-sys-color-secondary: var(--md-purple-400);
  --md-sys-color-on-secondary: #FFFFFF;
  --md-sys-color-secondary-container: var(--md-purple-50);
  --md-sys-color-on-secondary-container: var(--md-purple-500);
  
  /* Tertiary - Accent color for contrast and visual interest */
  --md-sys-color-tertiary: var(--md-teal-400);
  --md-sys-color-on-tertiary: #FFFFFF;
  --md-sys-color-tertiary-container: var(--md-teal-50);
  --md-sys-color-on-tertiary-container: var(--md-teal-500);
  
  /* Error - Destructive actions and error states */
  --md-sys-color-error: var(--md-red-400);
  --md-sys-color-on-error: #FFFFFF;
  --md-sys-color-error-container: var(--md-red-50);
  --md-sys-color-on-error-container: var(--md-red-500);
  
  /* Success - Positive feedback and confirmations */
  --md-sys-color-success: var(--md-green-400);
  --md-sys-color-on-success: #FFFFFF;
  --md-sys-color-success-container: var(--md-green-50);
  --md-sys-color-on-success-container: var(--md-green-500);
  
  /* Warning - Caution and attention states */
  --md-sys-color-warning: var(--md-orange-300);
  --md-sys-color-on-warning: var(--md-orange-500);
  --md-sys-color-warning-container: var(--md-orange-50);
  --md-sys-color-on-warning-container: var(--md-orange-500);
  
  /* Surface - Background colors */
  --md-sys-color-surface: #FFFFFF;
  --md-sys-color-surface-dim: var(--md-neutral-50);
  --md-sys-color-surface-bright: #FFFFFF;
  --md-sys-color-surface-container-lowest: #FFFFFF;
  --md-sys-color-surface-container-low: #F8F8F8;
  --md-sys-color-surface-container: #F3F3F3;
  --md-sys-color-surface-container-high: var(--md-neutral-50);
  --md-sys-color-surface-container-highest: var(--md-neutral-100);
  
  /* On-surface - Text and icons on surfaces */
  --md-sys-color-on-surface: #1C1B1F;
  --md-sys-color-on-surface-variant: var(--md-neutral-400);
  
  /* Outline - Borders and dividers */
  --md-sys-color-outline: var(--md-neutral-200);
  --md-sys-color-outline-variant: var(--md-neutral-100);
  
  /* Background */
  --md-sys-color-background: #FEFEFE;
  --md-sys-color-on-background: #1C1B1F;
  
  /* Inverse - For contrast elements */
  --md-sys-color-inverse-surface: #313033;
  --md-sys-color-inverse-on-surface: #F4EFF4;
  --md-sys-color-inverse-primary: var(--md-blue-100);
  
  /* Scrim - Overlay backgrounds */
  --md-sys-color-scrim: rgba(0, 0, 0, 0.32);
  --md-sys-color-shadow: rgba(0, 0, 0, 0.15);
}

/* ══════════════════════════════════════════════════════════
   DARK THEME
   ══════════════════════════════════════════════════════════ */
[data-theme="dark"],
.dark-theme,
@media (prefers-color-scheme: dark) {
  :root {
    --md-sys-color-primary: var(--md-blue-200);
    --md-sys-color-on-primary: var(--md-blue-500);
    --md-sys-color-primary-container: var(--md-blue-400);
    --md-sys-color-on-primary-container: var(--md-blue-50);
    
    --md-sys-color-secondary: var(--md-purple-200);
    --md-sys-color-on-secondary: var(--md-purple-500);
    --md-sys-color-secondary-container: var(--md-purple-400);
    --md-sys-color-on-secondary-container: var(--md-purple-50);
    
    --md-sys-color-tertiary: var(--md-teal-200);
    --md-sys-color-on-tertiary: var(--md-teal-500);
    --md-sys-color-tertiary-container: var(--md-teal-400);
    --md-sys-color-on-tertiary-container: var(--md-teal-50);
    
    --md-sys-color-error: var(--md-red-200);
    --md-sys-color-on-error: var(--md-red-500);
    --md-sys-color-error-container: var(--md-red-400);
    --md-sys-color-on-error-container: var(--md-red-50);
    
    --md-sys-color-surface: #1C1B1F;
    --md-sys-color-surface-dim: #141316;
    --md-sys-color-surface-bright: #3B383E;
    --md-sys-color-surface-container-lowest: #0F0D13;
    --md-sys-color-surface-container-low: #1D1B20;
    --md-sys-color-surface-container: #211F26;
    --md-sys-color-surface-container-high: #2B2930;
    --md-sys-color-surface-container-highest: #36343B;
    
    --md-sys-color-on-surface: #E6E1E5;
    --md-sys-color-on-surface-variant: #CAC4D0;
    
    --md-sys-color-outline: var(--md-neutral-400);
    --md-sys-color-outline-variant: var(--md-neutral-500);
    
    --md-sys-color-background: #1C1B1F;
    --md-sys-color-on-background: #E6E1E5;
    
    --md-sys-color-inverse-surface: #E6E1E5;
    --md-sys-color-inverse-on-surface: #313033;
    --md-sys-color-inverse-primary: var(--md-blue-400);
  }
}
```

---

## 3. Typography System

### 3.1 Font Family

Use Google's Noto Sans family as the primary typeface:

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Display:wght@400;500;600;700&display=swap');

:root {
  --md-sys-typescale-font-family-brand: 'Noto Sans Display', sans-serif;
  --md-sys-typescale-font-family-plain: 'Noto Sans', sans-serif;
}
```

### 3.2 Type Scale

```css
:root {
  /* ══════════════════════════════════════════════════════════
     DISPLAY - Large, expressive text for hero sections
     ══════════════════════════════════════════════════════════ */
  --md-sys-typescale-display-large-font: var(--md-sys-typescale-font-family-brand);
  --md-sys-typescale-display-large-size: 57px;
  --md-sys-typescale-display-large-line-height: 64px;
  --md-sys-typescale-display-large-weight: 400;
  --md-sys-typescale-display-large-tracking: -0.25px;
  
  --md-sys-typescale-display-medium-font: var(--md-sys-typescale-font-family-brand);
  --md-sys-typescale-display-medium-size: 45px;
  --md-sys-typescale-display-medium-line-height: 52px;
  --md-sys-typescale-display-medium-weight: 400;
  --md-sys-typescale-display-medium-tracking: 0px;
  
  --md-sys-typescale-display-small-font: var(--md-sys-typescale-font-family-brand);
  --md-sys-typescale-display-small-size: 36px;
  --md-sys-typescale-display-small-line-height: 44px;
  --md-sys-typescale-display-small-weight: 400;
  --md-sys-typescale-display-small-tracking: 0px;
  
  /* ══════════════════════════════════════════════════════════
     HEADLINE - Section headers
     ══════════════════════════════════════════════════════════ */
  --md-sys-typescale-headline-large-font: var(--md-sys-typescale-font-family-brand);
  --md-sys-typescale-headline-large-size: 32px;
  --md-sys-typescale-headline-large-line-height: 40px;
  --md-sys-typescale-headline-large-weight: 400;
  --md-sys-typescale-headline-large-tracking: 0px;
  
  --md-sys-typescale-headline-medium-font: var(--md-sys-typescale-font-family-brand);
  --md-sys-typescale-headline-medium-size: 28px;
  --md-sys-typescale-headline-medium-line-height: 36px;
  --md-sys-typescale-headline-medium-weight: 400;
  --md-sys-typescale-headline-medium-tracking: 0px;
  
  --md-sys-typescale-headline-small-font: var(--md-sys-typescale-font-family-brand);
  --md-sys-typescale-headline-small-size: 24px;
  --md-sys-typescale-headline-small-line-height: 32px;
  --md-sys-typescale-headline-small-weight: 400;
  --md-sys-typescale-headline-small-tracking: 0px;
  
  /* ══════════════════════════════════════════════════════════
     TITLE - Card titles, dialog titles
     ══════════════════════════════════════════════════════════ */
  --md-sys-typescale-title-large-font: var(--md-sys-typescale-font-family-brand);
  --md-sys-typescale-title-large-size: 22px;
  --md-sys-typescale-title-large-line-height: 28px;
  --md-sys-typescale-title-large-weight: 500;
  --md-sys-typescale-title-large-tracking: 0px;
  
  --md-sys-typescale-title-medium-font: var(--md-sys-typescale-font-family-plain);
  --md-sys-typescale-title-medium-size: 16px;
  --md-sys-typescale-title-medium-line-height: 24px;
  --md-sys-typescale-title-medium-weight: 500;
  --md-sys-typescale-title-medium-tracking: 0.15px;
  
  --md-sys-typescale-title-small-font: var(--md-sys-typescale-font-family-plain);
  --md-sys-typescale-title-small-size: 14px;
  --md-sys-typescale-title-small-line-height: 20px;
  --md-sys-typescale-title-small-weight: 500;
  --md-sys-typescale-title-small-tracking: 0.1px;
  
  /* ══════════════════════════════════════════════════════════
     BODY - Main content text
     ══════════════════════════════════════════════════════════ */
  --md-sys-typescale-body-large-font: var(--md-sys-typescale-font-family-plain);
  --md-sys-typescale-body-large-size: 16px;
  --md-sys-typescale-body-large-line-height: 24px;
  --md-sys-typescale-body-large-weight: 400;
  --md-sys-typescale-body-large-tracking: 0.5px;
  
  --md-sys-typescale-body-medium-font: var(--md-sys-typescale-font-family-plain);
  --md-sys-typescale-body-medium-size: 14px;
  --md-sys-typescale-body-medium-line-height: 20px;
  --md-sys-typescale-body-medium-weight: 400;
  --md-sys-typescale-body-medium-tracking: 0.25px;
  
  --md-sys-typescale-body-small-font: var(--md-sys-typescale-font-family-plain);
  --md-sys-typescale-body-small-size: 12px;
  --md-sys-typescale-body-small-line-height: 16px;
  --md-sys-typescale-body-small-weight: 400;
  --md-sys-typescale-body-small-tracking: 0.4px;
  
  /* ══════════════════════════════════════════════════════════
     LABEL - Buttons, form labels, captions
     ══════════════════════════════════════════════════════════ */
  --md-sys-typescale-label-large-font: var(--md-sys-typescale-font-family-plain);
  --md-sys-typescale-label-large-size: 14px;
  --md-sys-typescale-label-large-line-height: 20px;
  --md-sys-typescale-label-large-weight: 500;
  --md-sys-typescale-label-large-tracking: 0.1px;
  
  --md-sys-typescale-label-medium-font: var(--md-sys-typescale-font-family-plain);
  --md-sys-typescale-label-medium-size: 12px;
  --md-sys-typescale-label-medium-line-height: 16px;
  --md-sys-typescale-label-medium-weight: 500;
  --md-sys-typescale-label-medium-tracking: 0.5px;
  
  --md-sys-typescale-label-small-font: var(--md-sys-typescale-font-family-plain);
  --md-sys-typescale-label-small-size: 11px;
  --md-sys-typescale-label-small-line-height: 16px;
  --md-sys-typescale-label-small-weight: 500;
  --md-sys-typescale-label-small-tracking: 0.5px;
}
```

### 3.3 Typography Utility Classes

```css
/* Display */
.md-display-large {
  font-family: var(--md-sys-typescale-display-large-font);
  font-size: var(--md-sys-typescale-display-large-size);
  line-height: var(--md-sys-typescale-display-large-line-height);
  font-weight: var(--md-sys-typescale-display-large-weight);
  letter-spacing: var(--md-sys-typescale-display-large-tracking);
}

.md-display-medium {
  font-family: var(--md-sys-typescale-display-medium-font);
  font-size: var(--md-sys-typescale-display-medium-size);
  line-height: var(--md-sys-typescale-display-medium-line-height);
  font-weight: var(--md-sys-typescale-display-medium-weight);
  letter-spacing: var(--md-sys-typescale-display-medium-tracking);
}

.md-display-small {
  font-family: var(--md-sys-typescale-display-small-font);
  font-size: var(--md-sys-typescale-display-small-size);
  line-height: var(--md-sys-typescale-display-small-line-height);
  font-weight: var(--md-sys-typescale-display-small-weight);
  letter-spacing: var(--md-sys-typescale-display-small-tracking);
}

/* Headline */
.md-headline-large {
  font-family: var(--md-sys-typescale-headline-large-font);
  font-size: var(--md-sys-typescale-headline-large-size);
  line-height: var(--md-sys-typescale-headline-large-line-height);
  font-weight: var(--md-sys-typescale-headline-large-weight);
  letter-spacing: var(--md-sys-typescale-headline-large-tracking);
}

.md-headline-medium {
  font-family: var(--md-sys-typescale-headline-medium-font);
  font-size: var(--md-sys-typescale-headline-medium-size);
  line-height: var(--md-sys-typescale-headline-medium-line-height);
  font-weight: var(--md-sys-typescale-headline-medium-weight);
  letter-spacing: var(--md-sys-typescale-headline-medium-tracking);
}

.md-headline-small {
  font-family: var(--md-sys-typescale-headline-small-font);
  font-size: var(--md-sys-typescale-headline-small-size);
  line-height: var(--md-sys-typescale-headline-small-line-height);
  font-weight: var(--md-sys-typescale-headline-small-weight);
  letter-spacing: var(--md-sys-typescale-headline-small-tracking);
}

/* Title */
.md-title-large {
  font-family: var(--md-sys-typescale-title-large-font);
  font-size: var(--md-sys-typescale-title-large-size);
  line-height: var(--md-sys-typescale-title-large-line-height);
  font-weight: var(--md-sys-typescale-title-large-weight);
  letter-spacing: var(--md-sys-typescale-title-large-tracking);
}

.md-title-medium {
  font-family: var(--md-sys-typescale-title-medium-font);
  font-size: var(--md-sys-typescale-title-medium-size);
  line-height: var(--md-sys-typescale-title-medium-line-height);
  font-weight: var(--md-sys-typescale-title-medium-weight);
  letter-spacing: var(--md-sys-typescale-title-medium-tracking);
}

.md-title-small {
  font-family: var(--md-sys-typescale-title-small-font);
  font-size: var(--md-sys-typescale-title-small-size);
  line-height: var(--md-sys-typescale-title-small-line-height);
  font-weight: var(--md-sys-typescale-title-small-weight);
  letter-spacing: var(--md-sys-typescale-title-small-tracking);
}

/* Body */
.md-body-large {
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  line-height: var(--md-sys-typescale-body-large-line-height);
  font-weight: var(--md-sys-typescale-body-large-weight);
  letter-spacing: var(--md-sys-typescale-body-large-tracking);
}

.md-body-medium {
  font-family: var(--md-sys-typescale-body-medium-font);
  font-size: var(--md-sys-typescale-body-medium-size);
  line-height: var(--md-sys-typescale-body-medium-line-height);
  font-weight: var(--md-sys-typescale-body-medium-weight);
  letter-spacing: var(--md-sys-typescale-body-medium-tracking);
}

.md-body-small {
  font-family: var(--md-sys-typescale-body-small-font);
  font-size: var(--md-sys-typescale-body-small-size);
  line-height: var(--md-sys-typescale-body-small-line-height);
  font-weight: var(--md-sys-typescale-body-small-weight);
  letter-spacing: var(--md-sys-typescale-body-small-tracking);
}

/* Label */
.md-label-large {
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  line-height: var(--md-sys-typescale-label-large-line-height);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
}

.md-label-medium {
  font-family: var(--md-sys-typescale-label-medium-font);
  font-size: var(--md-sys-typescale-label-medium-size);
  line-height: var(--md-sys-typescale-label-medium-line-height);
  font-weight: var(--md-sys-typescale-label-medium-weight);
  letter-spacing: var(--md-sys-typescale-label-medium-tracking);
}

.md-label-small {
  font-family: var(--md-sys-typescale-label-small-font);
  font-size: var(--md-sys-typescale-label-small-size);
  line-height: var(--md-sys-typescale-label-small-line-height);
  font-weight: var(--md-sys-typescale-label-small-weight);
  letter-spacing: var(--md-sys-typescale-label-small-tracking);
}
```

---

## 4. Shape System

### 4.1 Corner Radius Tokens

```css
:root {
  /* Shape scale - Use these for consistent corner radii */
  --md-sys-shape-corner-none: 0px;
  --md-sys-shape-corner-extra-small: 4px;
  --md-sys-shape-corner-small: 8px;
  --md-sys-shape-corner-medium: 12px;
  --md-sys-shape-corner-large: 16px;
  --md-sys-shape-corner-extra-large: 28px;
  --md-sys-shape-corner-full: 9999px;
}
```

### 4.2 Shape Application Guidelines

| Component Type | Shape Token |
|----------------|-------------|
| Buttons | `corner-full` (FAB) or `corner-medium` (standard) |
| Cards | `corner-medium` or `corner-large` |
| Chips | `corner-small` |
| Dialogs | `corner-extra-large` |
| Text Fields | `corner-extra-small` (top only for filled) |
| Menus | `corner-extra-small` |
| Navigation Rail | `corner-large` |
| Sheets | `corner-extra-large` (top only) |

---

## 5. Elevation System

### 5.1 Elevation Levels

```css
:root {
  /* Elevation shadows */
  --md-sys-elevation-level0: none;
  
  --md-sys-elevation-level1: 
    0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  
  --md-sys-elevation-level2: 
    0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  
  --md-sys-elevation-level3: 
    0px 1px 3px rgba(0, 0, 0, 0.3),
    0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  
  --md-sys-elevation-level4: 
    0px 2px 3px rgba(0, 0, 0, 0.3),
    0px 6px 10px 4px rgba(0, 0, 0, 0.15);
  
  --md-sys-elevation-level5: 
    0px 4px 4px rgba(0, 0, 0, 0.3),
    0px 8px 12px 6px rgba(0, 0, 0, 0.15);
}
```

### 5.2 Elevation Usage Guidelines

| Level | Usage | Components |
|-------|-------|------------|
| 0 | Flat surfaces | Disabled buttons, backgrounds |
| 1 | Low emphasis | Cards (resting), navigation bar |
| 2 | Medium emphasis | Cards (hover), elevated buttons |
| 3 | High emphasis | FABs (resting), navigation drawer |
| 4 | Higher emphasis | FABs (hover), dialogs |
| 5 | Highest emphasis | Modals, popovers |

---

## 6. Motion System

### 6.1 Duration Tokens

```css
:root {
  /* Duration scale */
  --md-sys-motion-duration-short1: 50ms;
  --md-sys-motion-duration-short2: 100ms;
  --md-sys-motion-duration-short3: 150ms;
  --md-sys-motion-duration-short4: 200ms;
  --md-sys-motion-duration-medium1: 250ms;
  --md-sys-motion-duration-medium2: 300ms;
  --md-sys-motion-duration-medium3: 350ms;
  --md-sys-motion-duration-medium4: 400ms;
  --md-sys-motion-duration-long1: 450ms;
  --md-sys-motion-duration-long2: 500ms;
  --md-sys-motion-duration-long3: 550ms;
  --md-sys-motion-duration-long4: 600ms;
  --md-sys-motion-duration-extra-long1: 700ms;
  --md-sys-motion-duration-extra-long2: 800ms;
  --md-sys-motion-duration-extra-long3: 900ms;
  --md-sys-motion-duration-extra-long4: 1000ms;
}
```

### 6.2 Easing Tokens

```css
:root {
  /* Standard easing - For most transitions */
  --md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);
  --md-sys-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);
  
  /* Emphasized easing - For expressive transitions */
  --md-sys-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --md-sys-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
  
  /* Legacy (for compatibility) */
  --md-sys-motion-easing-legacy: cubic-bezier(0.4, 0, 0.2, 1);
  --md-sys-motion-easing-legacy-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --md-sys-motion-easing-legacy-accelerate: cubic-bezier(0.4, 0, 1, 1);
}
```

### 6.3 Transition Presets

```css
/* Common transition combinations */
.md-transition-quick {
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-transition-standard {
  transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
}

.md-transition-emphasized {
  transition: all var(--md-sys-motion-duration-medium4) var(--md-sys-motion-easing-emphasized);
}

.md-transition-enter {
  transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-emphasized-decelerate);
}

.md-transition-exit {
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-emphasized-accelerate);
}
```

---

## 7. Spacing System

### 7.1 Spacing Scale

```css
:root {
  /* 4px base unit spacing scale */
  --md-sys-spacing-0: 0px;
  --md-sys-spacing-1: 4px;
  --md-sys-spacing-2: 8px;
  --md-sys-spacing-3: 12px;
  --md-sys-spacing-4: 16px;
  --md-sys-spacing-5: 20px;
  --md-sys-spacing-6: 24px;
  --md-sys-spacing-7: 28px;
  --md-sys-spacing-8: 32px;
  --md-sys-spacing-9: 36px;
  --md-sys-spacing-10: 40px;
  --md-sys-spacing-11: 44px;
  --md-sys-spacing-12: 48px;
  --md-sys-spacing-14: 56px;
  --md-sys-spacing-16: 64px;
  --md-sys-spacing-20: 80px;
  --md-sys-spacing-24: 96px;
}
```

---

## 8. Icons

### 8.1 Material Symbols Integration

```html
<!-- Add to <head> -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

```css
/* Icon sizing tokens */
:root {
  --md-sys-icon-size-small: 20px;
  --md-sys-icon-size-medium: 24px;
  --md-sys-icon-size-large: 40px;
  --md-sys-icon-size-extra-large: 48px;
}

/* Icon utility class */
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}

/* Filled variant */
.material-symbols-outlined.filled {
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}
```

### 8.2 Icon Usage

```html
<!-- Outlined (default) -->
<span class="material-symbols-outlined">home</span>

<!-- Filled -->
<span class="material-symbols-outlined filled">favorite</span>
```

---

## 9. Component Specifications

### 9.1 Elevated Card

The most common card pattern. Use for content containers that need visual prominence.

```css
.md-elevated-card {
  background-color: var(--md-sys-color-surface-container-low);
  border-radius: var(--md-sys-shape-corner-medium);
  box-shadow: var(--md-sys-elevation-level1);
  padding: var(--md-sys-spacing-4);
  transition: box-shadow var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-elevated-card:hover {
  box-shadow: var(--md-sys-elevation-level2);
}

/* Card with image */
.md-elevated-card--media {
  padding: 0;
  overflow: hidden;
}

.md-elevated-card--media .md-card-media {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.md-elevated-card--media .md-card-content {
  padding: var(--md-sys-spacing-4);
}
```

### 9.2 Filled Card

Lower emphasis than elevated cards. Use for secondary content.

```css
.md-filled-card {
  background-color: var(--md-sys-color-surface-container-highest);
  border-radius: var(--md-sys-shape-corner-medium);
  padding: var(--md-sys-spacing-4);
}
```

### 9.3 Outlined Card

For content that needs separation without visual weight.

```css
.md-outlined-card {
  background-color: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-outline-variant);
  border-radius: var(--md-sys-shape-corner-medium);
  padding: var(--md-sys-spacing-4);
  transition: border-color var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-outlined-card:hover {
  border-color: var(--md-sys-color-outline);
}
```

### 9.4 Buttons

```css
/* Filled Button - Primary actions */
.md-button-filled {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--md-sys-spacing-2);
  padding: 0 var(--md-sys-spacing-6);
  height: 40px;
  min-width: 64px;
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border: none;
  border-radius: var(--md-sys-shape-corner-full);
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  cursor: pointer;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-button-filled:hover {
  box-shadow: var(--md-sys-elevation-level1);
}

.md-button-filled:active {
  box-shadow: none;
}

.md-button-filled:disabled {
  background-color: color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent);
  color: color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent);
  cursor: not-allowed;
}

/* Outlined Button - Secondary actions */
.md-button-outlined {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--md-sys-spacing-2);
  padding: 0 var(--md-sys-spacing-6);
  height: 40px;
  min-width: 64px;
  background-color: transparent;
  color: var(--md-sys-color-primary);
  border: 1px solid var(--md-sys-color-outline);
  border-radius: var(--md-sys-shape-corner-full);
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  cursor: pointer;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-button-outlined:hover {
  background-color: color-mix(in srgb, var(--md-sys-color-primary) 8%, transparent);
}

/* Text Button - Lowest emphasis */
.md-button-text {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--md-sys-spacing-2);
  padding: 0 var(--md-sys-spacing-3);
  height: 40px;
  background-color: transparent;
  color: var(--md-sys-color-primary);
  border: none;
  border-radius: var(--md-sys-shape-corner-full);
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  cursor: pointer;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-button-text:hover {
  background-color: color-mix(in srgb, var(--md-sys-color-primary) 8%, transparent);
}

/* Tonal Button - Medium emphasis */
.md-button-tonal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--md-sys-spacing-2);
  padding: 0 var(--md-sys-spacing-6);
  height: 40px;
  min-width: 64px;
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  border: none;
  border-radius: var(--md-sys-shape-corner-full);
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  cursor: pointer;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-button-tonal:hover {
  box-shadow: var(--md-sys-elevation-level1);
}

/* Elevated Button */
.md-button-elevated {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--md-sys-spacing-2);
  padding: 0 var(--md-sys-spacing-6);
  height: 40px;
  min-width: 64px;
  background-color: var(--md-sys-color-surface-container-low);
  color: var(--md-sys-color-primary);
  border: none;
  border-radius: var(--md-sys-shape-corner-full);
  box-shadow: var(--md-sys-elevation-level1);
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  cursor: pointer;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-button-elevated:hover {
  box-shadow: var(--md-sys-elevation-level2);
}
```

### 9.5 FAB (Floating Action Button)

```css
/* Standard FAB */
.md-fab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  border: none;
  border-radius: var(--md-sys-shape-corner-large);
  box-shadow: var(--md-sys-elevation-level3);
  cursor: pointer;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-fab:hover {
  box-shadow: var(--md-sys-elevation-level4);
}

.md-fab .material-symbols-outlined {
  font-size: var(--md-sys-icon-size-medium);
}

/* Small FAB */
.md-fab-small {
  width: 40px;
  height: 40px;
  border-radius: var(--md-sys-shape-corner-medium);
}

/* Large FAB */
.md-fab-large {
  width: 96px;
  height: 96px;
  border-radius: var(--md-sys-shape-corner-extra-large);
}

.md-fab-large .material-symbols-outlined {
  font-size: 36px;
}

/* Extended FAB */
.md-fab-extended {
  width: auto;
  padding: 0 var(--md-sys-spacing-4);
  gap: var(--md-sys-spacing-3);
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
}
```

### 9.6 Chips

```css
/* Base chip styles */
.md-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--md-sys-spacing-2);
  height: 32px;
  padding: 0 var(--md-sys-spacing-4);
  border-radius: var(--md-sys-shape-corner-small);
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  cursor: pointer;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

/* Assist chip */
.md-chip-assist {
  background-color: transparent;
  border: 1px solid var(--md-sys-color-outline);
  color: var(--md-sys-color-on-surface);
}

.md-chip-assist:hover {
  background-color: color-mix(in srgb, var(--md-sys-color-on-surface) 8%, transparent);
}

/* Filter chip */
.md-chip-filter {
  background-color: transparent;
  border: 1px solid var(--md-sys-color-outline);
  color: var(--md-sys-color-on-surface);
}

.md-chip-filter[aria-selected="true"],
.md-chip-filter.selected {
  background-color: var(--md-sys-color-secondary-container);
  border-color: transparent;
  color: var(--md-sys-color-on-secondary-container);
}

/* Input chip */
.md-chip-input {
  background-color: transparent;
  border: 1px solid var(--md-sys-color-outline);
  color: var(--md-sys-color-on-surface);
  padding-left: var(--md-sys-spacing-1);
}

/* Suggestion chip */
.md-chip-suggestion {
  background-color: transparent;
  border: 1px solid var(--md-sys-color-outline);
  color: var(--md-sys-color-on-surface);
}

.md-chip-suggestion:hover {
  background-color: color-mix(in srgb, var(--md-sys-color-on-surface) 8%, transparent);
}
```

### 9.7 Text Fields

```css
/* Outlined text field */
.md-text-field-outlined {
  position: relative;
  display: flex;
  flex-direction: column;
}

.md-text-field-outlined input,
.md-text-field-outlined textarea {
  padding: var(--md-sys-spacing-4);
  border: 1px solid var(--md-sys-color-outline);
  border-radius: var(--md-sys-shape-corner-extra-small);
  background-color: transparent;
  color: var(--md-sys-color-on-surface);
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  line-height: var(--md-sys-typescale-body-large-line-height);
  outline: none;
  transition: border-color var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-text-field-outlined input:focus,
.md-text-field-outlined textarea:focus {
  border-color: var(--md-sys-color-primary);
  border-width: 2px;
  padding: calc(var(--md-sys-spacing-4) - 1px);
}

.md-text-field-outlined input:invalid,
.md-text-field-outlined textarea:invalid {
  border-color: var(--md-sys-color-error);
}

.md-text-field-outlined label {
  position: absolute;
  left: var(--md-sys-spacing-4);
  top: var(--md-sys-spacing-4);
  color: var(--md-sys-color-on-surface-variant);
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  pointer-events: none;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
  background-color: var(--md-sys-color-surface);
  padding: 0 var(--md-sys-spacing-1);
}

.md-text-field-outlined input:focus + label,
.md-text-field-outlined input:not(:placeholder-shown) + label,
.md-text-field-outlined textarea:focus + label,
.md-text-field-outlined textarea:not(:placeholder-shown) + label {
  top: -8px;
  font-size: var(--md-sys-typescale-body-small-size);
  color: var(--md-sys-color-primary);
}

/* Filled text field */
.md-text-field-filled {
  position: relative;
  display: flex;
  flex-direction: column;
}

.md-text-field-filled input,
.md-text-field-filled textarea {
  padding: var(--md-sys-spacing-5) var(--md-sys-spacing-4) var(--md-sys-spacing-2);
  border: none;
  border-bottom: 1px solid var(--md-sys-color-on-surface-variant);
  border-radius: var(--md-sys-shape-corner-extra-small) var(--md-sys-shape-corner-extra-small) 0 0;
  background-color: var(--md-sys-color-surface-container-highest);
  color: var(--md-sys-color-on-surface);
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  line-height: var(--md-sys-typescale-body-large-line-height);
  outline: none;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-text-field-filled input:focus,
.md-text-field-filled textarea:focus {
  border-bottom-width: 2px;
  border-bottom-color: var(--md-sys-color-primary);
}
```

### 9.8 Navigation

```css
/* Navigation bar (bottom) */
.md-navigation-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background-color: var(--md-sys-color-surface-container);
  padding: 0 var(--md-sys-spacing-2);
}

.md-navigation-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--md-sys-spacing-1);
  padding: var(--md-sys-spacing-3) var(--md-sys-spacing-4);
  border: none;
  background: none;
  color: var(--md-sys-color-on-surface-variant);
  cursor: pointer;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-navigation-bar-item.active {
  color: var(--md-sys-color-on-surface);
}

.md-navigation-bar-item .icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 32px;
  border-radius: var(--md-sys-shape-corner-full);
  transition: background-color var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-navigation-bar-item.active .icon-container {
  background-color: var(--md-sys-color-secondary-container);
}

.md-navigation-bar-item span:last-child {
  font-family: var(--md-sys-typescale-label-medium-font);
  font-size: var(--md-sys-typescale-label-medium-size);
  font-weight: var(--md-sys-typescale-label-medium-weight);
}

/* Navigation rail (side) */
.md-navigation-rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  padding: var(--md-sys-spacing-3) 0;
  background-color: var(--md-sys-color-surface);
  gap: var(--md-sys-spacing-3);
}

.md-navigation-rail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--md-sys-spacing-1);
  padding: var(--md-sys-spacing-1) 0;
  border: none;
  background: none;
  color: var(--md-sys-color-on-surface-variant);
  cursor: pointer;
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-navigation-rail-item.active {
  color: var(--md-sys-color-on-surface);
}

.md-navigation-rail-item .icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 32px;
  border-radius: var(--md-sys-shape-corner-full);
}

.md-navigation-rail-item.active .icon-container {
  background-color: var(--md-sys-color-secondary-container);
}
```

### 9.9 Dialogs

```css
.md-dialog-scrim {
  position: fixed;
  inset: 0;
  background-color: var(--md-sys-color-scrim);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.md-dialog {
  background-color: var(--md-sys-color-surface-container-high);
  border-radius: var(--md-sys-shape-corner-extra-large);
  padding: var(--md-sys-spacing-6);
  min-width: 280px;
  max-width: 560px;
  box-shadow: var(--md-sys-elevation-level3);
}

.md-dialog-icon {
  display: flex;
  justify-content: center;
  margin-bottom: var(--md-sys-spacing-4);
  color: var(--md-sys-color-secondary);
}

.md-dialog-headline {
  font-family: var(--md-sys-typescale-headline-small-font);
  font-size: var(--md-sys-typescale-headline-small-size);
  line-height: var(--md-sys-typescale-headline-small-line-height);
  color: var(--md-sys-color-on-surface);
  text-align: center;
  margin-bottom: var(--md-sys-spacing-4);
}

.md-dialog-supporting-text {
  font-family: var(--md-sys-typescale-body-medium-font);
  font-size: var(--md-sys-typescale-body-medium-size);
  line-height: var(--md-sys-typescale-body-medium-line-height);
  color: var(--md-sys-color-on-surface-variant);
  margin-bottom: var(--md-sys-spacing-6);
}

.md-dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--md-sys-spacing-2);
}
```

### 9.10 Snackbar

```css
.md-snackbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 344px;
  max-width: 672px;
  padding: var(--md-sys-spacing-3) var(--md-sys-spacing-4);
  background-color: var(--md-sys-color-inverse-surface);
  color: var(--md-sys-color-inverse-on-surface);
  border-radius: var(--md-sys-shape-corner-extra-small);
  box-shadow: var(--md-sys-elevation-level3);
}

.md-snackbar-text {
  font-family: var(--md-sys-typescale-body-medium-font);
  font-size: var(--md-sys-typescale-body-medium-size);
  line-height: var(--md-sys-typescale-body-medium-line-height);
  flex: 1;
}

.md-snackbar-action {
  color: var(--md-sys-color-inverse-primary);
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  background: none;
  border: none;
  cursor: pointer;
  margin-left: var(--md-sys-spacing-2);
}
```

---

## 10. Layout Guidelines

### 10.1 Responsive Breakpoints

```css
:root {
  /* Compact: 0-599dp (phones) */
  --md-breakpoint-compact: 600px;
  
  /* Medium: 600-839dp (foldables, small tablets) */
  --md-breakpoint-medium: 840px;
  
  /* Expanded: 840-1199dp (tablets, small laptops) */
  --md-breakpoint-expanded: 1200px;
  
  /* Large: 1200-1599dp (desktop) */
  --md-breakpoint-large: 1600px;
  
  /* Extra-large: 1600dp+ (large desktop) */
}

/* Usage example */
@media (max-width: 599px) {
  /* Compact styles */
}

@media (min-width: 600px) and (max-width: 839px) {
  /* Medium styles */
}

@media (min-width: 840px) and (max-width: 1199px) {
  /* Expanded styles */
}

@media (min-width: 1200px) {
  /* Large+ styles */
}
```

### 10.2 Grid System

```css
.md-grid {
  display: grid;
  gap: var(--md-sys-spacing-4);
  padding: var(--md-sys-spacing-4);
}

/* Compact: 4 columns */
@media (max-width: 599px) {
  .md-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--md-sys-spacing-2);
    padding: var(--md-sys-spacing-4);
  }
}

/* Medium: 8 columns */
@media (min-width: 600px) and (max-width: 839px) {
  .md-grid {
    grid-template-columns: repeat(8, 1fr);
    gap: var(--md-sys-spacing-6);
    padding: var(--md-sys-spacing-6);
  }
}

/* Expanded+: 12 columns */
@media (min-width: 840px) {
  .md-grid {
    grid-template-columns: repeat(12, 1fr);
    gap: var(--md-sys-spacing-6);
    padding: var(--md-sys-spacing-6);
  }
}
```

---

## 11. Accessibility

### 11.1 Focus States

```css
/* Visible focus indicator */
:focus-visible {
  outline: 2px solid var(--md-sys-color-primary);
  outline-offset: 2px;
}

/* Focus ring for interactive elements */
.md-focus-ring:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--md-sys-color-primary) 38%, transparent);
}
```

### 11.2 Minimum Touch Targets

```css
/* Ensure 48x48dp minimum touch target */
.md-touch-target {
  position: relative;
  min-width: 48px;
  min-height: 48px;
}

.md-touch-target::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 48px;
  min-height: 48px;
}
```

### 11.3 Color Contrast

Always ensure:
- **Normal text**: 4.5:1 contrast ratio minimum
- **Large text** (18px+ or 14px+ bold): 3:1 contrast ratio minimum
- **UI components**: 3:1 contrast ratio minimum

---

## 12. State Layers

State layers provide visual feedback for interactive states:

```css
:root {
  /* State layer opacities */
  --md-sys-state-hover-opacity: 0.08;
  --md-sys-state-focus-opacity: 0.12;
  --md-sys-state-pressed-opacity: 0.12;
  --md-sys-state-dragged-opacity: 0.16;
}

/* Apply state layer to interactive elements */
.md-interactive {
  position: relative;
}

.md-interactive::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: currentColor;
  opacity: 0;
  transition: opacity var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
  pointer-events: none;
  border-radius: inherit;
}

.md-interactive:hover::before {
  opacity: var(--md-sys-state-hover-opacity);
}

.md-interactive:focus-visible::before {
  opacity: var(--md-sys-state-focus-opacity);
}

.md-interactive:active::before {
  opacity: var(--md-sys-state-pressed-opacity);
}
```

---

## 13. Complete CSS Import Template

Use this at the start of any project:

```css
/* ══════════════════════════════════════════════════════════
   MATERIAL DESIGN 3 - COMPLETE DESIGN TOKENS
   ══════════════════════════════════════════════════════════ */

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Display:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

:root {
  /* [Paste all color, typography, shape, elevation, motion, and spacing tokens here] */
}

/* [Paste utility classes] */

/* [Paste component styles as needed] */
```

---

## 14. Quick Reference

### Color Usage
| Use Case | Token |
|----------|-------|
| Primary action | `--md-sys-color-primary` |
| Secondary action | `--md-sys-color-secondary` |
| Backgrounds | `--md-sys-color-surface` |
| Cards | `--md-sys-color-surface-container-*` |
| Text | `--md-sys-color-on-surface` |
| Errors | `--md-sys-color-error` |
| Success | `--md-sys-color-success` |
| Warnings | `--md-sys-color-warning` |

### Typography Usage
| Use Case | Class |
|----------|-------|
| Hero text | `.md-display-large` |
| Page title | `.md-headline-large` |
| Section title | `.md-headline-medium` |
| Card title | `.md-title-large` |
| Body text | `.md-body-large` |
| Captions | `.md-body-small` |
| Buttons | `.md-label-large` |

### Component Priority
| Priority | Use |
|----------|-----|
| Primary | Filled button, FAB |
| Secondary | Tonal button, Outlined button |
| Tertiary | Text button |

---

## 15. Implementation Checklist

When building any MD3 interface, verify:

- [ ] All colors use semantic tokens, not hardcoded values
- [ ] Typography follows the type scale
- [ ] Interactive elements have proper state layers
- [ ] Touch targets are minimum 48x48dp
- [ ] Focus states are clearly visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Shapes use the defined corner radius tokens
- [ ] Elevation is applied consistently
- [ ] Animations use motion tokens
- [ ] Layout follows responsive breakpoints
- [ ] Icons use Material Symbols
- [ ] Dark theme is supported

---

*This design system is based on Material Design 3 specifications from Google, adapted with a custom color palette for consistent branding across all Claude Code frontend projects.*
