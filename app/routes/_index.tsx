import type {MetaFunction} from '@shopify/remix-oxygen';

export const meta: MetaFunction = () => {
  return [
    {title: 'REVIVE Hydrate & Repair Elixir | Lanfredi'},
    {
      name: 'description',
      content:
        'Lightweight 3-in-1 leave-in treatment that repairs, hydrates, and protects all hair types. Plant-based keratin and exotic oils for extreme shine and frizz-free results.',
    },
  ];
};

export default function Index() {
  return (
    <div className="revive-landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="product-title">
              REVIVE
              <span className="subtitle">Hydrate & Repair Elixir</span>
            </h1>
            <p className="hero-description">
              A lightweight 3-in-1 leave-in treatment that repairs chemically
              treated hair, delivers extreme shine, and shields against
              environmental damage.
            </p>
            <div className="hero-cta">
              <span className="price">$45.95</span>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              {/* Product image will go here */}
              <p>Product Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2 className="section-title">Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">✨</div>
            <h3>Repairs & Revitalizes</h3>
            <p>
              Repairs chemically treated hair by revitalizing weakened strands
              with plant-based keratin
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💧</div>
            <h3>Lightweight Hydration</h3>
            <p>
              Provides deep hydration without heaviness, perfect for all hair
              types
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🌟</div>
            <h3>Extreme Shine</h3>
            <p>
              Delivers exceptional luster and seals hair cuticles for smooth,
              frizz-free results
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🛡️</div>
            <h3>Protection</h3>
            <p>
              Shields against environmental damage and heat with exotic oil
              blend
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="ingredients">
        <h2 className="section-title">Powerful Natural Ingredients</h2>
        <div className="ingredients-list">
          <div className="ingredient">
            <h3>Plant-Based Keratin</h3>
            <p>
              Strengthens and repairs damaged hair, reducing breakage while
              enhancing smoothness and manageability
            </p>
          </div>
          <div className="ingredient">
            <h3>Buriti Oil</h3>
            <p>
              Amazonian palm oil rich in vitamins A, C, and E that hydrates and
              protects color-treated hair
            </p>
          </div>
          <div className="ingredient">
            <h3>Babaçu Extract</h3>
            <p>
              Provides deep moisture without weight, reduces frizz, and
              nourishes the scalp
            </p>
          </div>
          <div className="ingredient">
            <h3>Essential Amino Acids</h3>
            <p>
              Strengthens damaged fibers, boosts elasticity, and supports
              natural keratin production
            </p>
          </div>
          <div className="ingredient">
            <h3>Exotic Oil Blend</h3>
            <p>
              Ten different oils plus vitamin E for superior hydration, frizz
              reduction, and heat protection
            </p>
          </div>
          <div className="ingredient">
            <h3>Olive Oil</h3>
            <p>
              Antioxidant-rich oil that moisturizes and provides UV and
              pollution protection
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="how-to-use">
        <h2 className="section-title">How to Use</h2>
        <div className="usage-instructions">
          <div className="instruction">
            <span className="step-number">1</span>
            <p>
              Apply to towel-dried hair from roots to ends after conditioning
            </p>
          </div>
          <div className="instruction">
            <span className="step-number">2</span>
            <p>Comb through hair evenly to distribute the product</p>
          </div>
          <div className="instruction">
            <span className="step-number">3</span>
            <p>Style as desired - no rinsing needed</p>
          </div>
          <div className="instruction">
            <span className="step-number">4</span>
            <p>For dry hair refresh, lightly spray throughout the day</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <h2 className="section-title">Our Commitment</h2>
        <div className="badges">
          <div className="badge">
            <span>🌱</span>
            <p>Vegan</p>
          </div>
          <div className="badge">
            <span>🐰</span>
            <p>Cruelty-Free</p>
          </div>
          <div className="badge">
            <span>🌾</span>
            <p>Gluten-Free</p>
          </div>
          <div className="badge">
            <span>✓</span>
            <p>Safe Beauty Certified</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <h2>Transform Your Hair Today</h2>
        <p>
          Experience the power of plant-based repair with our 3-in-1 elixir
        </p>
        <button className="add-to-cart-large">Add to Cart - $45.95</button>
      </section>
    </div>
  );
}
