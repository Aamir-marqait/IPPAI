# How to Use Custom Fonts

This project includes several custom fonts that can be used throughout the application using Tailwind CSS classes.

## Available Fonts

### Work Sans
```jsx
<h1 className="font-work-sans">Your text here</h1>
```
- **Usage**: `font-work-sans`
- **Type**: Sans-serif
- **Optimized**: Next.js Google Fonts

### Red Hat Display
```jsx
<h1 className="font-red-hat-display">Your text here</h1>
```
- **Usage**: `font-red-hat-display`
- **Type**: Sans-serif
- **Optimized**: Next.js Google Fonts

### Poppins
```jsx
<h1 className="font-poppins">Your text here</h1>
```
- **Usage**: `font-poppins`
- **Type**: Sans-serif
- **Weights**: 300, 400, 500, 600, 700
- **Optimized**: Next.js Google Fonts

### Briem Hand
```jsx
<h1 className="font-briem-hand">Your text here</h1>
```
- **Usage**: `font-briem-hand`
- **Type**: Cursive/Handwriting
- **Weights**: 300-900 (variable)
- **Source**: Google Fonts CSS import

### Plus Jakarta Sans
```jsx
<h1 className="font-plus-jakarta-sans">Your text here</h1>
```
- **Usage**: `font-plus-jakarta-sans`
- **Type**: Sans-serif
- **Optimized**: Next.js Google Fonts

### Georgia
```jsx
<h1 className="font-georgia">Your text here</h1>
```
- **Usage**: `font-georgia`
- **Type**: Serif
- **Weights**: 400, 700 (normal and bold)
- **Source**: Google Fonts CSS import

## Usage Examples

### Basic Text Styling
```jsx
// Headings
<h1 className="font-work-sans text-4xl font-bold">Main Heading</h1>
<h2 className="font-red-hat-display text-3xl font-semibold">Section Heading</h2>

// Body Text
<p className="font-poppins text-lg">Regular paragraph text</p>
<p className="font-georgia text-base">Serif body text for better readability</p>

// Decorative Text
<span className="font-briem-hand text-2xl">Handwritten style text</span>
```

### Combining with Tailwind Utilities
```jsx
// With colors and spacing
<h1 className="font-work-sans text-4xl font-bold text-blue-900 mb-6">
  Welcome to IPPAI
</h1>

// With responsive design
<p className="font-poppins text-sm md:text-lg text-gray-700">
  Responsive text that changes size on different screens
</p>

// With hover effects
<button className="font-plus-jakarta-sans font-medium hover:font-semibold transition-all">
  Interactive Button
</button>
```

### Component Examples

#### Card Component
```jsx
function Card({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="font-red-hat-display text-xl font-bold mb-3 text-gray-900">
        {title}
      </h3>
      <p className="font-poppins text-gray-600">
        {description}
      </p>
    </div>
  )
}
```

#### Hero Section
```jsx
function Hero() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-50rem mx-auto px-6 text-center">
        <h1 className="font-work-sans text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="font-briem-hand text-blue-300">IPPAI</span>
        </h1>
        <p className="font-poppins text-xl md:text-2xl mb-8 text-blue-100">
          International Public Policy and Administration Institute
        </p>
        <p className="font-georgia text-lg mb-12 max-w-3xl mx-auto text-blue-50">
          Advancing public policy through education, research, and professional development.
        </p>
      </div>
    </section>
  )
}
```

## Font Recommendations by Use Case

### Headings & Titles
- **Primary**: `font-work-sans` or `font-red-hat-display`
- **Decorative**: `font-briem-hand` (for special occasions)

### Body Text
- **Modern/Clean**: `font-poppins` or `font-plus-jakarta-sans`
- **Traditional/Readable**: `font-georgia`

### Buttons & UI Elements
- **Recommended**: `font-plus-jakarta-sans` or `font-poppins`

### Quotes or Special Text
- **Recommended**: `font-georgia` or `font-briem-hand`

## Technical Notes

- All fonts except `font-briem-hand` and `font-georgia` are optimized through Next.js font loading
- Fonts are preloaded automatically for better performance
- All font classes work with standard Tailwind CSS font utilities (`font-bold`, `font-medium`, etc.)
- Fonts are responsive and work across all device sizes

## Need More Fonts?

To add more fonts:
1. Add the font import in `app/layout.tsx`
2. Add the font variable to the body className
3. Add the CSS variable in `app/globals.css`
4. Add the font family to `tailwind.config.ts`

Example for adding a new font:
```typescript
// In layout.tsx
import { New_Font } from "next/font/google";

const newFont = New_Font({
  variable: "--font-new-font",
  subsets: ["latin"],
});

// In globals.css
--font-new-font: var(--font-new-font);

// In tailwind.config.ts
'new-font': ['var(--font-new-font)', 'fallback-font'],
```