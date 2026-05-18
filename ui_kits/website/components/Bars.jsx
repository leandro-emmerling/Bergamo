function Bars() {
  const items = [
    { name: 'Bierbar',     tag: 'BAR' },
    { name: 'Cocktailbar', tag: 'BAR' },
    { name: 'Schnapsbar',  tag: 'BAR' },
    { name: 'Shotbar',     tag: 'BAR' },
    { name: 'Grillstand',  tag: 'GRILL', wide: true },
  ];
  return (
    <section className="bars" id="bars">
      <div className="section-head">
        <h2>Bars &amp; Grill.</h2>
        <div className="meta">Bezahlung in Bergomarks</div>
      </div>
      <div className="bar-grid">
        {items.map((b) => (
          <article key={b.name} className={`bar-item ${b.wide ? 'wide' : ''}`}>
            <div className="bar-tag">{b.tag}</div>
            <h3>{b.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Bars = Bars;
