function MapIllustration() {
  // Stylised, on-brand map illustration — NOT a real map. Just suggestive geography.
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      {/* fields */}
      <rect x="0" y="0" width="400" height="300" fill="#101826" />
      <g stroke="#1A2438" strokeWidth="1">
        {[...Array(15)].map((_, i) => (
          <line key={'h'+i} x1="0" y1={i*22} x2="400" y2={i*22 - 18} />
        ))}
        {[...Array(20)].map((_, i) => (
          <line key={'v'+i} x1={i*22} y1="0" x2={i*22 + 18} y2="300" />
        ))}
      </g>
      {/* river / road */}
      <path d="M -20 220 C 80 180, 160 260, 240 200 S 380 160, 440 200"
            fill="none" stroke="#6E6A63" strokeWidth="1.5" strokeDasharray="4 4"/>
      {/* villages */}
      <g fill="#A8A294" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2">
        <circle cx="80" cy="120" r="3" />
        <text x="88" y="124">SCHWANFELD</text>
        <circle cx="320" cy="180" r="3" />
        <text x="252" y="200">UNTEREISENHEIM</text>
      </g>
      {/* container icon at the spot */}
      <g transform="translate(208 132)" stroke="#E55A18" strokeWidth="2" fill="none">
        <rect x="-14" y="-8" width="28" height="16"/>
        <line x1="-10" y1="-8" x2="-10" y2="8"/>
        <line x1="-6"  y1="-8" x2="-6"  y2="8"/>
        <line x1="-2"  y1="-8" x2="-2"  y2="8"/>
        <line x1="2"   y1="-8" x2="2"   y2="8"/>
        <line x1="6"   y1="-8" x2="6"   y2="8"/>
        <line x1="10"  y1="-8" x2="10"  y2="8"/>
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
            Das Festgelände liegt auf dem Feldweg zwischen <strong>Schwanfeld</strong>
            &nbsp;und <strong>Untereisenheim</strong>, Lower Franconia. Folgt der
            Beschilderung ab dem Ortsausgang Schwanfeld in Richtung Norden.
          </p>
          <div className="coords">49.909626, 10.144008</div>
          <p className="muted">
            Parken kostenlos auf dem Stoppelfeld direkt nebenan.
            Mit dem Rad: B&nbsp;26&nbsp;a-Radweg, Abzweig "Container"
            (steht da seit zwei Jahren).
          </p>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn primary">
            In Google&nbsp;Maps öffnen <span className="arrow"><IconExternal size={18} stroke={2.2}/></span>
          </a>
        </div>
        <div className="mapcard" aria-hidden="true">
          <MapIllustration />
          <div className="pin">
            <span className="lbl">Bergamo · Container</span>
            <span className="dot"/>
          </div>
          <div className="legend">
            <IconPin size={12} stroke={2}/> 49.909626, 10.144008
          </div>
        </div>
      </div>
    </section>
  );
}

window.Anfahrt = Anfahrt;
