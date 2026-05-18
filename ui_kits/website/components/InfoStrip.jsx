function Marquee() {
  const items = ['Open-Air vom Container', '31.07 — 01.08 · 2026', 'Schwanfeld · Bayern', 'Eintritt frei · Spende für die Band'];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {repeated.map((t, i) => (
          <span key={i}>★ {t}</span>
        ))}
      </div>
    </div>
  );
}

function InfoStrip() {
  return (
    <section className="infostrip" id="info">
      <div className="top" />
      <div className="row">
        <div className="cell">
          <div className="k">Eintritt</div>
          <div className="v">Frei</div>
          <div className="sub">Spende für die Band willkommen.</div>
        </div>
        <div className="cell">
          <div className="k">Bezahlung</div>
          <div className="v">Bar &amp; EC</div>
          <div className="sub">Keine Kreditkarte am Stand.</div>
        </div>
        <div className="cell">
          <div className="k">Verpflegung</div>
          <div className="v">Gegrilltes</div>
          <div className="sub">Bratwurst, Pommes, Bier, Limo.</div>
        </div>
        <div className="cell">
          <div className="k">Bei Regen</div>
          <div className="v">Findet statt</div>
          <div className="sub">Wir spielen unterm Container.</div>
        </div>
      </div>
    </section>
  );
}

window.Marquee = Marquee;
window.InfoStrip = InfoStrip;
