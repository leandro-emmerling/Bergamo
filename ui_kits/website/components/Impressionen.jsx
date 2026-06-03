function Impressionen() {
  return (
    <section className="impressionen" id="impressionen">
      <div className="section-head">
        <h2>So sieht's bei uns aus.</h2>
        <div className="meta">Impressionen · O-Berg</div>
      </div>

      <div className="gallery">
        <figure className="shot shot-crowd">
          <img src="assets/media/crowd.jpg" alt="Volle Lichtung bei Nacht vor der Bühne" loading="lazy" />
          <figcaption>Live auf der Lichtung</figcaption>
        </figure>
        <figure className="shot shot-bar">
          <img src="assets/media/shotbar.jpg" alt="Shotbar zwischen den Zelten" loading="lazy" />
          <figcaption>Unsere Shotbar</figcaption>
        </figure>
        <figure className="shot shot-team">
          <img src="assets/media/team-2025.jpg" alt="Das Team vom Container e.V. 2025" loading="lazy" />
          <figcaption>Bergamo Crew 2025</figcaption>
        </figure>
      </div>

      <div className="ig-hint">
        <p>Das war nur ein Vorgeschmack — <strong>weitere Bilder gibt&rsquo;s auf Instagram.</strong></p>
        <a
          className="btn primary"
          href="https://www.instagram.com/bergamo_schwanfeld/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconInstagram size={20} stroke={2.2} /> @bergamo_schwanfeld
          <span className="arrow"><IconExternal size={18} stroke={2.2} /></span>
        </a>
      </div>
    </section>
  );
}

window.Impressionen = Impressionen;
