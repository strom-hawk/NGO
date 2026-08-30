import { ImageCarousel } from "./components/image-carousel";

const images = [
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    alt: "People working together outdoors",
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
    alt: "Hands holding a small plant",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    alt: "Volunteers standing together",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <ImageCarousel images={images} />

      {/* Sponsors Section */}
      <section className="sponsors-section" aria-label="Sponsors">
        <div className="site-container">
          <h2>Sponsors</h2>
          <div className="sponsors-placeholder">
            <p>Sponsor content coming soon...</p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section" aria-label="Events">
        <div className="site-container">
          <h2>Events</h2>
          <div className="events-placeholder">
            <p>Events content coming soon...</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-label="Additional help">
        <div className="site-container">
          <h2>Can't find what you're looking for?</h2>
          <div className="cta-placeholder">
            <p>Additional content coming soon...</p>
          </div>
        </div>
      </section>
    </main>
  );
}
