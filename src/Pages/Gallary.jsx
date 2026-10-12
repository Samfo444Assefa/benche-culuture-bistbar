import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export default function GalleryPage() {
  return (
    <div className="detail-page">
      <Navbar />

      <section className="simple-page-hero">
        <div>
          <span className="eyebrow">BISIT BAR</span>

          <h1>
            The Gallery
          </h1>

          <p>
            A glimpse into the atmosphere, people and moments
            of BISIT BAR.
          </p>
        </div>
      </section>

      <section className="gallery-page-section">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={image}>
              <img
                src={image}
                alt={`BISIT BAR ${index + 1}`}
              />

              <div className="gallery-number">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}