function Hero() {
  const mapUrl = 'https://www.google.com/maps/?q=49.909626,10.144008';
  return (
    <section className="hero" id="top">
      <div className="eyebrow">
        <span className="dot"></span>
        Open-Air · Schwanfeld · Bayern · MMXXVI
      </div>

      <div className="hero-lockup">
        <img
          className="hero-berg"
          src="../../assets/bergamo-bildmarke-schwarz.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="wordmark-img"
          src="../../assets/bergamo-wordmark-large.png"
          alt="BERGAMO"
        />
      </div>

      <h2 className="tag">Open-Air<br/>Container e.V.</h2>

      <div className="dateline">
        <span>Fr 31.07.2026</span>
        <span className="sep">·</span>
        <span>Sa 01.08.2026</span>
        <span className="sep">·</span>
        <span>Eintritt 5&nbsp;€</span>
        <span className="sep">·</span>
        <span>Familientag Sa ab 14:00 · frei</span>
        <span className="sep">·</span>
        <span>Veranstaltung ab 21:00</span>
      </div>
      <div className="ctas">
        <a href="#lineup" className="btn primary"
           onClick={(e) => { e.preventDefault(); const el = document.getElementById('lineup'); if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' }); }}>
          Lineup ansehen <span className="arrow"><IconArrowRight size={18} stroke={2.2}/></span>
        </a>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn secondary">
          Anfahrt öffnen <span className="arrow"><IconExternal size={18} stroke={2.2}/></span>
        </a>
      </div>
    </section>
  );
}

window.Hero = Hero;
