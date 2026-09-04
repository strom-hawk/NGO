import { contactDetails } from "@/app/lib/contact-data";

const contactCards = [
  {
    type: "phone",
    title: "Phone Number",
    value: contactDetails.phone,
    icon: "☎",
  },
  {
    type: "location",
    title: "Location",
    value: contactDetails.location,
    icon: "◉",
  },
  {
    type: "email",
    title: "Email",
    value: contactDetails.email,
    icon: "✉",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" aria-label="Contact banner">
        <div className="contact-hero-overlay" />
        <div className="site-container contact-hero-inner">
          <h1>CONTACT US</h1>
          <div className="contact-breadcrumb" aria-label="Breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-separator">&nbsp;&gt;&nbsp;</span>
            <span className="breadcrumb-current">Contact Us</span>
          </div>
        </div>
      </section>

      <section className="site-container contact-cards-section" aria-label="Contact details">
        <div className="contact-grid">
          {contactCards.map((card) => (
            <article key={card.type} className="contact-card">
              <div className="contact-icon-wrap">
                <span className="contact-icon" aria-hidden="true">
                  {card.icon}
                </span>
              </div>

              <h2>{card.title}</h2>

              <p className="contact-value">
                {card.value.split("\n").map((line, index) => (
                  <span key={`${card.type}-${index}`}>
                    {line}
                    {index < card.value.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container contact-map-section" aria-labelledby="contact-map-title">
        <div className="contact-map">
          <iframe
            src={contactDetails.map.embedUrl}
            title="Map showing Rajvika Welfare Foundation's location"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
