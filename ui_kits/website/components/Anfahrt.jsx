function MapIllustration() {
  // Stylised, on-brand map — village below, Lichtung up on the Berg, shuttle dotted line.
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect x="0" y="0" width="400" height="300" fill="#101826" />
      {/* contour rings suggesting elevation */}
      <g fill="none" stroke="#1A2438" strokeWidth="1">
        <ellipse cx="240" cy="120" rx="160" ry="80"/>
        <ellipse cx="240" cy="120" rx="120" ry="60"/>
        <ellipse cx="240" cy="120" rx="80"  ry="40"/>
        <ellipse cx="240" cy="120" rx="44"  ry="22"/>
      </g>
      {/* dashed grid */}
      <g stroke="#1A2438" strokeWidth="0.6">
        {[...Array(10)].map((_, i) => (
          <line key={'v'+i} x1={i*44} y1="0" x2={i*44} y2="300" />
        ))}
      </g>
      {/* dirt road / shuttle path from village (bottom-left) up to the Lichtung */}
      <path d="M 30 260 C 90 230, 130 230, 160 200 S 200 150, 240 120"
            fill="none" stroke="#8B1E2D" strokeWidth="2" strokeDasharray="6 4"/>
      {/* school marker */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2">
        <rect x="22" y="252" width="16" height="14" fill="none" stroke="#A8A294" strokeWidth="1.5"/>
        <text x="44" y="262" fill="#A8A294">SCHULE</text>
        <text x="44" y="274" fill="#6E6A63" fontSize="8">SCHWANFELD</text>
      </g>
      {/* Lichtung pin */}
      <g transform="translate(240 120)">
        <circle r="20" fill="none" stroke="#8B1E2D" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.6"/>
        <circle r="6" fill="#8B1E2D" stroke="#F4ECDD" strokeWidth="2"/>
        <text x="14" y="4" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="#F4ECDD">DIE LICHTUNG</text>
        <text x="14" y="16" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.5" fill="#A8A294">DER BERG</text>
      </g>
      {/* shuttle bus glyph mid-path */}
      <g transform="translate(110 230)" stroke="#8B1E2D" strokeWidth="1.5" fill="#101826">
        <rect x="-9" y="-5" width="18" height="10"/>
        <circle cx="-5" cy="6" r="2" fill="#8B1E2D"/>
        <circle cx="5"  cy="6" r="2" fill="#8B1E2D"/>
      </g>
    </svg>
  );
}

function Anfahrt() {
  const mapUrl = 'https://www.google.com/maps/?q=49.909626,10.144008';
  return (
    <section className="anfahrt" id="anfahrt">
      <div className="wrap">
        <div>
          <h2>Anfahrt.</h2>
          <p>
            Wir feiern auf der <strong>Lichtung am Berg</strong> zwischen
            <strong> Schwanfeld</strong> und <strong>Untereisenheim</strong>,
            Unterfranken. Der Weg hoch ist beschildert ab Ortsausgang Schwanfeld.
          </p>
          <div className="coords">49.909626, 10.144008</div>

          <div className="shuttle">
            <div className="shuttle-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="15" height="10" rx="1"/>
                <path d="M18 9h2l1 3v4h-3"/>
                <circle cx="7" cy="17" r="1.5"/>
                <circle cx="17" cy="17" r="1.5"/>
                <line x1="3" y1="11" x2="18" y2="11"/>
              </svg>
            </div>
            <div>
              <div className="k">Shuttle</div>
              <div className="v">Pendelt zwischen Schule Schwanfeld und Lichtung</div>
              <div className="muted">Letzte Fahrt ca. 02:00 Uhr. Kostenlos.</div>
            </div>
          </div>

          <p className="muted">
            Parken kostenlos auf dem Stoppelfeld neben der Schule.
            Wer den Berg lieber laufen will: 15&nbsp;Minuten gemütlich hoch,
            Beschilderung folgen.
          </p>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn primary">
            In Google&nbsp;Maps öffnen <span className="arrow"><IconExternal size={18} stroke={2.2}/></span>
          </a>
        </div>
        <div className="mapcard" aria-hidden="true">
          <MapIllustration />
          <div className="legend">
            <IconPin size={12} stroke={2}/> 49.909626, 10.144008
          </div>
        </div>
      </div>
    </section>
  );
}

window.Anfahrt = Anfahrt;
