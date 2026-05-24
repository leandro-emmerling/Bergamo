function Footer() {
  return (
    <footer className="footer">
      <img className="footer-mark" src="../../assets/bergamo-bildmarke-weiss.png" alt="BERGAMO" />
      <div className="row">
        <div className="col">
          <div className="k">Kontakt</div>
          <a className="v" href="https://www.instagram.com/bergamo_schwanfeld/" target="_blank" rel="noopener noreferrer">
            @bergamo_schwanfeld
          </a>
          <a className="v" href="mailto:bergamo-schwanfeld@web.de">
            bergamo-schwanfeld@web.de
          </a>
        </div>
        <div className="col">
          <div className="k">Wo</div>
          <span className="v">Lichtung am O-Berg<br/>zw. Schwanfeld &amp; Obereisenheim</span>
          <span className="v" style={{fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--steel-2)'}}>49.909626, 10.144008</span>
        </div>
        <div className="col">
          <div className="k">Wann</div>
          <span className="v">Fr 31.07.2026 · Sa 01.08.2026</span>
          <span className="v" style={{color: 'var(--steel-2)'}}>Familientag Sa 14:00 (frei)</span>
          <span className="v" style={{color: 'var(--steel-2)'}}>Veranstaltung ab 21:00 Uhr · Eintritt 5&nbsp;€</span>
        </div>
        <div className="col">
          <div className="k">Veranstalter</div>
          <span className="v">Container e.V.</span>
          <span className="v" style={{color: 'var(--steel-2)', fontSize: 12}}>© 2026 · Bergamo Open-Air</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
