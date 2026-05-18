function Bars() {
  const bars = [
    { name: 'Bierbar',     desc: 'Vom Fass · regional',         tag: 'BAR' },
    { name: 'Cocktailbar', desc: 'Klassiker &amp; Sommer-Specials', tag: 'BAR' },
    { name: 'Schnapsbar',  desc: 'Obstler, Kräuter, Bayrisch',  tag: 'BAR' },
    { name: 'Shotbar',     desc: 'Schnell. Stark. Klein.',      tag: 'BAR' },
  ];
  const grill = [
    { name: 'Bratwurst',          tag: 'GRILL' },
    { name: 'Steak',              tag: 'GRILL' },
    { name: 'Currywurst',         tag: 'GRILL' },
    { name: 'Pommes',             tag: 'GRILL' },
    { name: 'Belegte Laugenstangen', tag: 'GRILL' },
    { name: 'Vegane Stangen',     tag: 'VEGAN', accent: true },
    { name: 'Vegane Pommes',      tag: 'VEGAN', accent: true },
  ];
  return (
    <section className="bars" id="bars">
      <div className="section-head">
        <h2>Bars &amp; Grill.</h2>
        <div className="meta">5 Stände · Bezahlung in Bergomarks</div>
      </div>

      <div className="lane">
        <div className="lane-label">Bars</div>
        <div className="lane-grid">
          {bars.map((b) => (
            <article key={b.name} className="item">
              <div className="tag">{b.tag}</div>
              <h3>{b.name}</h3>
              <p dangerouslySetInnerHTML={{__html: b.desc}} />
            </article>
          ))}
        </div>
      </div>

      <div className="lane">
        <div className="lane-label">Grill</div>
        <div className="lane-grid">
          {grill.map((g) => (
            <article key={g.name} className={`item ${g.accent ? 'accent' : ''}`}>
              <div className="tag">{g.tag}</div>
              <h3>{g.name}</h3>
            </article>
          ))}
        </div>
      </div>

      <p className="footnote">
        Vegane Alternativen zu Pommes, Wurst und Stangen sind ausgeschildert.
        Falls ihr eine Allergie oder Unverträglichkeit habt — fragt am Stand,
        wir helfen weiter.
      </p>
    </section>
  );
}

window.Bars = Bars;
