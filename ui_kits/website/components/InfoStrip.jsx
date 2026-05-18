function Marquee() {
  const items = [
    'Open-Air auf der Lichtung',
    'Fr 31.07 Classic Rock',
    'Sa 01.08 All Mixed Up · Club DJ',
    'Familientag Sa ab 14:00 · frei',
    'Bezahlt in Bergomarks',
    'Shuttle ab Schule Schwanfeld',
  ];
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

window.Marquee = Marquee;
