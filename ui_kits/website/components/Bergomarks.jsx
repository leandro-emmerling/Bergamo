function BergoToken({ value }) {
  // Stylised festival token — circular "coin" with value + edge ring text.
  return (
    <svg viewBox="0 0 240 240" className="bergo-token" aria-hidden="true">
      <defs>
        <path id={`tp${value}`} d="M120,120 m-94,0 a94,94 0 1,1 188,0 a94,94 0 1,1 -188,0"/>
      </defs>
      <circle cx="120" cy="120" r="112" fill="currentColor" stroke="var(--ink)" strokeWidth="2"/>
      <circle cx="120" cy="120" r="100" fill="none" stroke="var(--paper)" strokeWidth="1.5" strokeDasharray="2 6"/>
      <text fontFamily="'JetBrains Mono', monospace" fontWeight="700" fontSize="13" letterSpacing="6" fill="var(--paper)">
        <textPath href={`#tp${value}`} startOffset="2%">BERGOMARK · CONTAINER E.V. · BERGOMARK · </textPath>
      </text>
      <text x="120" y="138" textAnchor="middle"
        fontFamily="Steelfish, 'Big Shoulders Display', Impact, sans-serif"
        fontWeight="400" fontSize="120" fill="var(--paper)" letterSpacing="-2">
        {value}
      </text>
      <text x="120" y="170" textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace" fontWeight="700" fontSize="13"
        letterSpacing="4" fill="var(--paper)">EURO</text>
    </svg>
  );
}

function Bergomarks() {
  return (
    <section className="bergomarks" id="bons">
      <div className="wrap">
        <div className="copy">
          <div className="eyebrow"><span className="dot"/>Bonkasse · Bergomarks</div>
          <h2>Bei uns zahlt ihr in <span className="ink-on-orange">Bergomarks</span>.</h2>
          <p>
            An der <strong>Bonkasse</strong> tauscht ihr Bargeld in Bergomarks
            (10&nbsp;€ und 20&nbsp;€ Bons). Damit zahlt ihr an allen Bars und
            am Grill. Keine Kartenzahlung am Stand — die Bonkasse nimmt
            Bargeld und EC.
          </p>
          <ul className="steps">
            <li><span className="n">1</span> Bargeld an der Bonkasse</li>
            <li><span className="n">2</span> Bergomarks bekommen</li>
            <li><span className="n">3</span> An Bar &amp; Grill bezahlen</li>
          </ul>
        </div>
        <div className="tokens">
          <div className="t10"><BergoToken value="10" /></div>
          <div className="t20"><BergoToken value="20" /></div>
        </div>
      </div>
    </section>
  );
}

window.Bergomarks = Bergomarks;
