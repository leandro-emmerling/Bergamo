function NightCard({ variant = 'paper', eb, num, title, sub, footerL, footerR }) {
  return (
    <article className={`night-card ${variant}`}>
      <div className="eb">{eb}</div>
      <div className="num">{num}</div>
      <h3 className="title">{title}</h3>
      <p className="sub">{sub}</p>
      <div className="footer">
        <span><IconClock size={14} stroke={2}/> &nbsp; {footerL}</span>
        <span>{footerR}</span>
      </div>
    </article>
  );
}

function Lineup() {
  return (
    <section className="lineup" id="lineup">
      <div className="section-head">
        <h2>Zwei Tage.<br/>Drei Programme.</h2>
        <div className="meta">Lineup · 2026</div>
      </div>
      <div className="grid grid-3">
        <NightCard
          variant="paper"
          eb="Freitag · 31.07.2026"
          num="31"
          title={<>Classic Rock<br/>'80er &amp; '90er</>}
          sub="Endlich wieder eine Live-Band auf der Lichtung. Die Klassiker, laut, ungeschnitten — und wir bringen den Berg zum Beben."
          footerL="ab 21:00 Uhr"
          footerR="Einlass 20:30"
        />
        <NightCard
          variant="day"
          eb="Samstag · 01.08.2026 · Nachmittag"
          num="01"
          title={<>Familien&shy;tag</>}
          sub="Feuerwehr, Hüpfburg, Spiele für die Kleinen, Kaffee &amp; Kuchen für die Großen."
          footerL="ab 14:00 Uhr"
          footerR="Eintritt frei"
        />
        <NightCard
          variant="night"
          eb="Samstag · 01.08.2026 · Abend"
          num="01"
          title={<>All Mixed Up</>}
          sub="Club-DJ am Pult: House, Charts, aktuelle Sounds. Auf der Lichtung getanzt, bis die Sonne kommt."
          footerL="ab 21:00 Uhr"
          footerR="Einlass 20:30"
        />
      </div>
    </section>
  );
}

window.Lineup = Lineup;
window.NightCard = NightCard;
