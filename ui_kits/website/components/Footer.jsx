function Footer() {
  return (
    <footer className="footer">
      <div className="wm">Bergamo</div>
      <div className="row">
        <div className="col">
          <div className="k">Folgt uns</div>
          <a className="v" href="https://www.instagram.com/bergamo_schwanfeld/" target="_blank" rel="noopener noreferrer">
            @bergamo_schwanfeld
          </a>
        </div>
        <div className="col">
          <div className="k">Wo</div>
          <span className="v">Zwischen Schwanfeld &amp; Untereisenheim</span>
          <span className="v" style={{fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em'}}>49.909626, 10.144008</span>
        </div>
        <div className="col">
          <div className="k">Wann</div>
          <span className="v">Fr 31.07.2026 · Sa 01.08.2026</span>
          <span className="v" style={{color: 'var(--steel-2)'}}>ab 21:00 Uhr</span>
        </div>
        <div className="col">
          <div className="k">© 2026</div>
          <span className="v" style={{color: 'var(--steel-2)'}}>Bergamo — Open-Air vom Container</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
