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
      {/* Limited Time Discount Banner */}
      <div className="discount-banner">
        <p className="discount-text">
          🎉 <strong>LIMITED TIME OFFER:</strong> Save $15.96 - Now Only $29.99!
        </p>
      </div>

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
                <span className="price-original">$45.95</span>
                <span className="price">$29.99</span>
                <span className="savings">Save $15.96!</span>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img
                src="/Revive Elixir Studio.JPG"
                alt="REVIVE Hydrate & Repair Elixir - Brazilian Hair Treatment"
                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}}
              />
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

      {/* FAQ Section */}
      <section className="faq">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3 className="faq-question">How quickly will I see results?</h3>
            <p className="faq-answer">
              You'll notice a difference after the very first use! Hair will feel
              softer, look shinier, and be more manageable immediately. With
              continued use, you'll see even more dramatic improvements in hair
              strength, reduced frizz, and overall hair health.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Is REVIVE Elixir 100% natural and vegan?</h3>
            <p className="faq-answer">
              Yes! REVIVE is made with 100% natural ingredients including Brazilian
              botanicals like Buriti Oil and Babaçu Extract. It's completely vegan,
              cruelty-free, gluten-free, and Safe Beauty certified. No harsh chemicals,
              parabens, sulfates, or animal-derived ingredients—just pure, plant-based
              hair care.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">How often should I use REVIVE Elixir?</h3>
            <p className="faq-answer">
              Use REVIVE Elixir every time you wash your hair for best results.
              Apply to towel-dried hair after shampooing and conditioning. You can
              also lightly spray on dry hair throughout the day for added shine and
              frizz control—it's gentle enough for daily use.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Is it safe for color-treated or chemically processed hair?</h3>
            <p className="faq-answer">
              Absolutely! REVIVE Elixir is specifically formulated with natural
              ingredients to repair and protect chemically treated hair. The Buriti
              Oil is rich in antioxidants that help preserve color, while plant-based
              keratin strengthens hair weakened by chemical treatments like coloring,
              bleaching, or perms.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Will it make my hair greasy or weigh it down?</h3>
            <p className="faq-answer">
              No! Despite being packed with natural oils and botanicals, REVIVE is a
              lightweight formula designed to hydrate without heaviness. The Babaçu
              Extract provides deep moisture while keeping hair light and bouncy. It's
              perfect for all hair types, including fine and oily hair.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Can I use it with heat styling tools?</h3>
            <p className="faq-answer">
              Yes! REVIVE Elixir provides excellent natural heat protection. Apply it
              to towel-dried hair before blow-drying, flat ironing, or curling. The
              exotic blend of 10 natural oils shields your hair from heat damage while
              adding shine and smoothness.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Is it suitable for all hair types?</h3>
            <p className="faq-answer">
              Yes! REVIVE Elixir's all-natural formula works beautifully on all hair
              types—straight, wavy, curly, or coily. Whether your hair is fine, thick,
              dry, or oily, the natural Brazilian botanicals adapt to give you the
              perfect level of hydration and shine.
            </p>
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
          <button className="add-to-cart-large">Add to Cart - $29.99 (Save $15.96!)</button>
          <p className="guarantee">
            ✓ Limited Time Offer · Free shipping on orders over $50
          </p>
        </div>
      </section>
    </div>
  );
}
