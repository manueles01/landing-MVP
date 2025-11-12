# Lanfredi Landing MVP - Revive Elixir

A beautiful, Oribe-inspired landing page for the Revive Hydrate & Repair Elixir product, built with Shopify Hydrogen.

## Product Features

**REVIVE Hydrate & Repair Elixir** - $45.95

A lightweight 3-in-1 leave-in treatment that:
- Repairs chemically treated hair
- Delivers extreme shine and luster
- Provides lightweight hydration
- Shields against environmental damage

### Key Ingredients

- **Plant-Based Keratin** - Strengthens and repairs
- **Buriti Oil** - Rich in vitamins A, C, E
- **Babaçu Extract** - Deep moisture without weight
- **Essential Amino Acids** - Boosts elasticity
- **Exotic Oil Blend** - 10 oils + vitamin E
- **Olive Oil** - Antioxidant-rich protection

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

## Design

The landing page is inspired by Oribe's elegant design aesthetic:
- Serif fonts (Playfair Display) for headings
- Clean, spacious layouts
- Sophisticated color palette
- Responsive design for all devices
- Smooth transitions and hover effects

## Customization

To add your own product images:
1. Add images to the `public` folder
2. Update the `image-placeholder` div in `app/routes/_index.tsx`
3. Reference images using `/your-image.jpg` paths

## License

Proprietary - Lanfredi
