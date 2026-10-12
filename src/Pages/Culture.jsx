import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Culture() {
  return (
    <div className="detail-page">
      <Navbar />

      <section className="detail-hero culture-hero">
        <div className="detail-hero-overlay">
          <div className="detail-hero-content">
            <span className="eyebrow">BISIT BAR</span>

            <h1>
              Culture.
              <br />
              Rhythm. Connection.
            </h1>

            <p>
              Experience the sounds, flavors and energy that make
              BISIT BAR unique.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-container">
          <span className="section-label">OUR CULTURE</span>

          <h2>
            Where tradition
            <br />
            meets modern life.
          </h2>

          <div className="culture-content">
            <p>
              BISIT BAR is inspired by the people, music, art and
              culture that surround us.
            </p>

            <p>
              Our space brings together contemporary design and
              authentic cultural influences to create an atmosphere
              that feels familiar yet completely new.
            </p>
          </div>
        </div>
      </section>

      <section className="culture-cards">
        <div className="culture-card">
          <span>01</span>
          <h3>Music</h3>
          <p>
            Sounds that create the atmosphere and keep the night
            alive.
          </p>
        </div>

        <div className="culture-card">
          <span>02</span>
          <h3>Food & Drinks</h3>
          <p>
            Carefully selected flavors designed to complement the
            experience.
          </p>
        </div>

        <div className="culture-card">
          <span>03</span>
          <h3>Community</h3>
          <p>
            A place where friendships, conversations and memories
            begin.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}