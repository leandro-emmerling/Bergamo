function TopBar() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="wm" onClick={go('top')}>Bergamo</a>
      <nav>
        <a href="#lineup" onClick={go('lineup')}>Lineup</a>
        <a href="#bons" onClick={go('bons')}>Bons</a>
        <a href="#bars" onClick={go('bars')}>Bars</a>
        <a href="#anfahrt" onClick={go('anfahrt')}>Anfahrt</a>
      </nav>
      <a
        className="ig"
        href="https://www.instagram.com/bergamo_schwanfeld/"
        target="_blank" rel="noopener noreferrer"
        aria-label="Instagram @bergamo_schwanfeld"
      >
        <IconInstagram size={14} stroke={2} />
        @bergamo_schwanfeld
      </a>
    </header>
  );
}

window.TopBar = TopBar;
