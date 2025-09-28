
# Assets Directory

This directory is for storing custom images and assets for the Credwish website.

## Directory Structure

```
public/assets/
├── hero/
│   ├── hero1.jpg          # Hero section image 1
│   ├── hero2.jpg          # Hero section image 2
│   └── ...
├── bank-logos/
│   ├── logo1.png          # Bank logo 1
│   ├── logo2.png          # Bank logo 2
│   └── ...
├── products/
│   ├── personal-loan.jpg  # Product images
│   ├── business-loan.jpg
│   └── ...
└── team/
    ├── team-photo.jpg     # Team and about us images
    └── ...
```

## Usage

To use images in components, reference them with the path starting from `/assets/`:

```jsx
// Example usage in React components
<img src="/assets/hero/hero1.jpg" alt="Hero Image" />
<img src="/assets/bank-logos/logo1.png" alt="Bank Logo" />
```

## Image Requirements

- **Hero Images**: Recommended size 800x600px or higher
- **Bank Logos**: PNG format with transparent background, max height 80px
- **Product Images**: 400x300px or similar aspect ratio
- All images should be optimized for web (compressed but high quality)

## How to Upload

1. Place your images in the appropriate subdirectory
2. Use descriptive filenames (e.g., `sbi-logo.png`, `hero-consultation.jpg`)
3. Update the component imports to reference the new image paths
