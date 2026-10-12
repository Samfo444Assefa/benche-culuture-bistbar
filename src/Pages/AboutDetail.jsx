import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutDetail() {
  return (
    <div className="detail-page">
      <Navbar />

      {/* HERO */}
      <section className="detail-hero about-hero">
        <div className="detail-hero-overlay">
          <div className="detail-hero-content">
            <span className="eyebrow">WELCOME TO BISIT BAR</span>

            <h1>
              More Than a Bar.
              <br />
              A Place to Belong.
            </h1>

            <p>
              Discover the story, atmosphere and vision behind
              BISIT BAR.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="detail-section">
        <div className="detail-container two-column">
          <div>
            <span className="section-label">OUR STORY</span>

            <h2>
              A place created for
              <br />
              connection.
            </h2>
          </div>

          <div className="detail-text">
            <p>
              BISIT BAR was created as a space where people can
              come together, relax, connect and experience something
              memorable.
            </p>

            <p>
              From the atmosphere to the drinks, music, food and
              hospitality, every detail is designed to create an
              experience that feels both modern and authentic.
            </p>

            <p>
              We believe a great bar is not simply about what is
              served. It is about the people, the conversations and
              the memories created around the table.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="dark-detail-section">
        <div className="detail-container">
          <div className="center-content">
            <span className="section-label">OUR VISION</span>

            <h2>
              Bringing people
              <br />
              together.
            </h2>

            <p>
              Our vision is to build a destination where great
              hospitality meets culture, creativity and community.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <span>01</span>
              <h3>Hospitality</h3>
              <p>
                Every guest deserves to feel welcome, comfortable
                and valued.
              </p>
            </div>

            <div className="value-card">
              <span>02</span>
              <h3>Culture</h3>
              <p>
                We celebrate the culture, creativity and stories
                that surround us.
              </p>
            </div>

            <div className="value-card">
              <span>03</span>
              <h3>Experience</h3>
              <p>
                Every visit should create an experience worth
                remembering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta">
        <div>
          <span className="section-label">COME VISIT US</span>

          <h2>
            Your table
            <br />
            is waiting.
          </h2>

          <a href="/location" className="detail-button">
            FIND US
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}