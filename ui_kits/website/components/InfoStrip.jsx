function Marquee() {
  const items = [
    'Open-Air auf der Lichtung',
    'Fr 31.07 Classic Rock · Live',
    'Sa 01.08 Familientag · ab 14:00',
    'Sa 01.08 All Mixed Up · Club DJ',
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
