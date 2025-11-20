import type {MetaFunction} from '@shopify/remix-oxygen';

export const meta: MetaFunction = () => {
  return [
    {title: 'REVIVE Hydrate & Repair Elixir | Brazilian Hair Care | Lanfredi'},
    {
      name: 'description',
      content:
        'Brazilian formula combining nature and science. 3-in-1 leave-in treatment with plant-based ingredients for shine, heat protection, and frizz-free results. Works independently or with Lanfredi collection.',
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
            <div className="badge-group">
              <span className="badge-pill">Brazilian Formula</span>
              <span className="badge-pill">Natural Ingredients</span>
            </div>
            <h1 className="product-title">
              REVIVE
              <span className="subtitle">Hydrate & Repair Elixir</span>
            </h1>
            <p className="tagline">
              Where Brazilian Beauty Meets Hair Science
            </p>
            <p className="hero-description">
              A lightweight 3-in-1 leave-in treatment that restores damaged hair
              while providing lasting protection and hydration for silky, smooth
              results. Powered by nature, proven by results.
            </p>
            <div className="perfect-for">
              <span className="label">Perfect For:</span>
              <div className="tags">
                <span>✨ Shine</span>
                <span>🔥 Heat Protection</span>
                <span>🎨 Color Protection</span>
                <span>💫 Silkiness</span>
              </div>
            </div>
            <div className="hero-cta">
              <div className="price-block">
                <span className="price">$45.95</span>
                <span className="payment-note">
                  Pay over time with orders over $35
                </span>
              </div>
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

      {/* Brazilian Heritage Section */}
      <section className="heritage">
        <div className="heritage-content">
          <div className="heritage-text">
            <h2 className="section-title">The Brazilian Difference</h2>
            <p className="lead">
              Born from Brazil's rich botanical heritage, REVIVE Elixir combines
              centuries-old natural wisdom with modern hair science.
            </p>
            <p>
              Our formula harnesses the power of Amazonian botanicals—Buriti Oil
              and Babaçu Extract—treasured for generations by Brazilian women for
              their transformative hair benefits. Every ingredient is carefully
              selected to deliver real, visible results while respecting your
              hair's natural balance.
            </p>
            <div className="heritage-features">
              <div className="feature">
                <span className="icon">🇧🇷</span>
                <strong>Brazilian Botanicals</strong>
                <p>Amazonian ingredients proven through generations</p>
              </div>
              <div className="feature">
                <span className="icon">🌿</span>
                <strong>Nature-First Formula</strong>
                <p>Plant-based keratin and natural oils</p>
              </div>
              <div className="feature">
                <span className="icon">🔬</span>
                <strong>Science-Backed Results</strong>
                <p>Clinically proven effectiveness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="transformation">
        <h2 className="section-title">Complete Hair Transformation</h2>
        <p className="section-subtitle">
          One product. Multiple solutions. Works independently for instant results.
        </p>
        <div className="transformation-grid">
          <div className="transform-card">
            <div className="number">01</div>
            <h3>Repairs Chemically Treated Hair</h3>
            <p>
              Revitalizes and strengthens hair weakened by color, bleach, or
              chemical treatments with plant-based keratin and essential amino acids
            </p>
          </div>
          <div className="transform-card">
            <div className="number">02</div>
            <h3>Extreme Shine & Silkiness</h3>
            <p>
              Delivers exceptional luster and smooth texture through our exotic
              blend of ten natural oils plus vitamin E
            </p>
          </div>
          <div className="transform-card">
            <div className="number">03</div>
            <h3>Lightweight Deep Hydration</h3>
            <p>
              Moisturizes deeply without weighing hair down—Babaçu Extract ensures
              nourishment without heaviness
            </p>
          </div>
          <div className="transform-card">
            <div className="number">04</div>
            <h3>Cuticle Sealing Technology</h3>
            <p>
              Smooths and seals the cuticle for sleek, frizz-free strands that stay
              manageable all day
            </p>
          </div>
          <div className="transform-card">
            <div className="number">05</div>
            <h3>Heat & Environmental Protection</h3>
            <p>
              Shields hair from damage caused by heat styling, UV rays, pollution,
              and environmental stressors
            </p>
          </div>
          <div className="transform-card">
            <div className="number">06</div>
            <h3>Color Protection</h3>
            <p>
              Preserves and protects color-treated hair with antioxidant-rich
              ingredients that prevent fading
            </p>
          </div>
        </div>
      </section>

      {/* Natural Ingredients Section */}
      <section className="ingredients-spotlight">
        <h2 className="section-title">
          Powered by Brazilian Nature, Proven by Science
        </h2>
        <p className="section-subtitle">
          Every ingredient is carefully sourced and selected for maximum efficacy
        </p>
        <div className="ingredients-showcase">
          <div className="ingredient-featured">
            <div className="ingredient-icon">🌴</div>
            <h3>Buriti Oil</h3>
            <span className="origin">Amazon Rainforest</span>
            <p>
              Known as "tree of life" in the Amazon, this precious oil is rich in
              vitamins A, C, and E. It deeply hydrates and protects color-treated
              hair while providing natural UV protection.
            </p>
          </div>
          <div className="ingredient-featured">
            <div className="ingredient-icon">🥥</div>
            <h3>Babaçu Extract</h3>
            <span className="origin">Brazilian Palm</span>
            <p>
              Treasured by Brazilian women for centuries, Babaçu provides deep
              moisture without weight, reduces frizz dramatically, and nourishes
              the scalp for healthier hair growth.
            </p>
          </div>
          <div className="ingredient-featured">
            <div className="ingredient-icon">🌱</div>
            <h3>Plant-Based Keratin</h3>
            <span className="origin">Vegan Alternative</span>
            <p>
              Nature's answer to hair repair. Strengthens damaged fibers, reduces
              breakage, and enhances smoothness without any animal-derived
              ingredients.
            </p>
          </div>
          <div className="ingredient-featured">
            <div className="ingredient-icon">🫒</div>
            <h3>Exotic Oil Blend</h3>
            <span className="origin">10 Natural Oils + Vitamin E</span>
            <p>
              A carefully curated blend including olive oil for antioxidant
              protection, plus nine additional oils for superior hydration, frizz
              reduction, and heat protection.
            </p>
          </div>
          <div className="ingredient-featured">
            <div className="ingredient-icon">💧</div>
            <h3>Essential Amino Acids</h3>
            <span className="origin">Building Blocks of Hair</span>
            <p>
              Strengthens damaged fibers from within, boosts elasticity, and
              supports natural keratin production for long-term hair health.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="how-to-use">
        <h2 className="section-title">How to Use Your Elixir</h2>
        <p className="section-subtitle">
          Simple application. Professional results.
        </p>
        <div className="usage-instructions">
          <div className="instruction">
            <span className="step-number">1</span>
            <div className="instruction-content">
              <h4>Apply to Towel-Dried Hair</h4>
              <p>
                After shampooing and conditioning, apply evenly from roots to ends
                on towel-dried hair
              </p>
            </div>
          </div>
          <div className="instruction">
            <span className="step-number">2</span>
            <div className="instruction-content">
              <h4>Comb Through</h4>
              <p>
                Use a wide-tooth comb to distribute the product evenly throughout
                your hair
              </p>
            </div>
          </div>
          <div className="instruction">
            <span className="step-number">3</span>
            <div className="instruction-content">
              <h4>Style as Desired</h4>
              <p>
                No rinsing needed—proceed with your favorite styling routine. Heat
                protection is built in!
              </p>
            </div>
          </div>
          <div className="instruction">
            <span className="step-number">4</span>
            <div className="instruction-content">
              <h4>Refresh Anytime</h4>
              <p>
                For a midday refresh on dry hair, lightly spray throughout for
                instant shine and smoothness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Ecosystem Section */}
      <section className="ecosystem">
        <div className="ecosystem-content">
          <h2 className="section-title">Complete Your Hair Care Ritual</h2>
          <p className="lead">
            REVIVE Elixir works beautifully on its own, but for truly transformative
            results, combine it with the full Lanfredi collection.
          </p>
          <div className="ecosystem-grid">
            <div className="ecosystem-card">
              <h3>🧴 Shampoo & Conditioner</h3>
              <p>
                Cleanse and prepare hair for maximum absorption of REVIVE Elixir's
                powerful ingredients
              </p>
            </div>
            <div className="ecosystem-card highlight">
              <h3>✨ REVIVE Elixir</h3>
              <p>
                The hero treatment—repairs, protects, and transforms with every
                application
              </p>
              <span className="current-product">You're here</span>
            </div>
            <div className="ecosystem-card">
              <h3>🎭 Treatment Masks</h3>
              <p>
                Weekly intensive treatments that work synergistically with REVIVE
                for deeper repair
              </p>
            </div>
            <div className="ecosystem-card">
              <h3>💎 Oils & Boosters</h3>
              <p>
                Targeted solutions to customize your routine and amplify specific
                benefits
              </p>
            </div>
          </div>
          <div className="ecosystem-cta">
            <p className="ecosystem-note">
              <strong>Pro Tip:</strong> Start with REVIVE Elixir today and add other
              products as you discover what your hair loves most.
            </p>
            <a
              href="https://www.lanfredi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="explore-link"
            >
              Explore Full Lanfredi Collection →
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <h2 className="section-title">Our Promise to You</h2>
        <p className="section-subtitle">
          Clean beauty. Real results. No compromises.
        </p>
        <div className="badges">
          <div className="badge">
            <span className="badge-icon">🌱</span>
            <h4>100% Vegan</h4>
            <p>No animal-derived ingredients</p>
          </div>
          <div className="badge">
            <span className="badge-icon">🐰</span>
            <h4>Cruelty-Free</h4>
            <p>Never tested on animals</p>
          </div>
          <div className="badge">
            <span className="badge-icon">🌾</span>
            <h4>Gluten-Free</h4>
            <p>Safe for sensitive scalps</p>
          </div>
          <div className="badge">
            <span className="badge-icon">✓</span>
            <h4>Safe Beauty</h4>
            <p>Certified clean formula</p>
          </div>
          <div className="badge">
            <span className="badge-icon">🇧🇷</span>
            <h4>Brazilian Made</h4>
            <p>Authentic botanicals</p>
          </div>
          <div className="badge">
            <span className="badge-icon">♻️</span>
            <h4>Sustainable</h4>
            <p>Responsibly sourced</p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof">
        <h2 className="section-title">Loved by Hair Professionals</h2>
        <div className="stats">
          <div className="stat">
            <span className="stat-number">3-in-1</span>
            <span className="stat-label">Treatment, Protection & Styling</span>
          </div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Natural Oils & Botanicals</span>
          </div>
          <div className="stat">
            <span className="stat-number">All Types</span>
            <span className="stat-label">Works on Every Hair Type</span>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <h2>Transform Your Hair with Brazilian Botanicals</h2>
        <p>
          Join thousands who've discovered the power of nature-backed,
          results-driven hair care
        </p>
        <div className="final-cta-buttons">
          <button className="add-to-cart-large">Add to Cart - $45.95</button>
          <p className="guarantee">
            ✓ Pay over time for orders over $35 · Free shipping on orders over $50
          </p>
        </div>
      </section>
    </div>
  );
}
