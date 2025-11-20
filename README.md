# Lanfredi Landing MVP - Revive Elixir

A high-converting, Oribe-inspired landing page for the Revive Hydrate & Repair Elixir product, built with Shopify Hydrogen. Optimized for conversions with compelling copy that emphasizes Brazilian heritage and natural ingredients.

## Product Overview

**REVIVE Hydrate & Repair Elixir** - $45.95
*Where Brazilian Beauty Meets Hair Science*

A lightweight 3-in-1 leave-in treatment that:
- ✨ Repairs chemically treated hair with plant-based keratin
- 💧 Delivers extreme shine and lightweight hydration
- 🛡️ Protects from heat, UV rays, and environmental damage
- 🎨 Preserves color-treated hair
- 💫 Works independently or as part of Lanfredi system

### Brazilian Formula Highlights

- **Brazilian Botanicals** - Amazonian Buriti Oil and Babaçu Extract
- **Nature-First** - Vegan, cruelty-free, gluten-free, safe beauty certified
- **Science-Backed** - Plant-based keratin and essential amino acids
- **Results-Driven** - Clinically proven effectiveness

### Key Natural Ingredients

- **Buriti Oil** - Amazonian "tree of life" rich in vitamins A, C, E
- **Babaçu Extract** - Brazilian palm for deep moisture without weight
- **Plant-Based Keratin** - Vegan alternative that strengthens and repairs
- **Exotic Oil Blend** - 10 natural oils + vitamin E for hydration and protection
- **Essential Amino Acids** - Boosts elasticity and keratin production
- **Olive Oil** - Antioxidant-rich UV and pollution protection

## Tech Stack

- **Shopify Hydrogen** - React-based framework for Shopify storefronts
- **Remix** - Full stack web framework
- **TypeScript** - Type-safe development
- **Oxygen** - Shopify's deployment platform

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured to deploy automatically to Shopify Oxygen via GitHub Actions when you push to the repository.

The deployment workflow is located at `.github/workflows/oxygen-deployment-1000061365.yml`

## Landing Page Features

### High-Converting Sections
1. **Hero Section** - Compelling headline with Brazilian heritage badges and "Perfect For" tags
2. **Brazilian Heritage** - Story-driven copy emphasizing natural botanicals and results
3. **Complete Transformation** - 6 key benefits with detailed explanations
4. **Natural Ingredients Spotlight** - Featured ingredients with origins and benefits
5. **How to Use** - 4-step application guide with clear instructions
6. **Product Ecosystem** - Cross-sell section for Lanfredi collection
7. **Certifications & Promises** - Trust-building badges (Vegan, Cruelty-Free, etc.)
8. **Social Proof** - Stats highlighting 3-in-1 formula and natural ingredients
9. **Final CTA** - Strong call-to-action with payment options

### Design Philosophy

Oribe-inspired elegant design optimized for conversions:
- **Typography** - Playfair Display serif for headings, Inter for body text
- **Color Palette** - Sophisticated neutrals (#1a1a1a) with gold accents (#c9a86a)
- **Layout** - Clean, spacious design with strategic whitespace
- **Responsive** - Fully mobile-optimized for all devices
- **Interactions** - Smooth hover effects and transitions
- **Conversion-Focused** - Multiple CTAs, trust signals, and benefit-driven copy

## Customization

To add your own product images:
1. Add images to the `public` folder
2. Update the `image-placeholder` div in `app/routes/_index.tsx`
3. Reference images using `/your-image.jpg` paths

## License

Proprietary - Lanfredi
