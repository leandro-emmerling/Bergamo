function NightCard({ dark, eb, num, title, sub, footerL, footerR }) {
  return (
    <article className={`night-card ${dark ? 'dark' : ''}`}>
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
        <h2>Zwei Nächte.<br/>Eine Bühne.</h2>
        <div className="meta">Lineup · 2026</div>
      </div>
      <div className="grid">
        <NightCard
          eb="Freitag · 31.07.2026"
          num="31"
          title={<>Classic Rock<br/>'80er &amp; '90er</>}
          sub="Die Klassiker, laut und in Originalbesetzung. Gitarren raus, Feuerzeug an."
          footerL="ab 21:00 Uhr"
          footerR="Einlass 20:30"
        />
        <NightCard
          dark
          eb="Samstag · 01.08.2026"
          num="01"
          title={<>All Mixed Up</>}
          sub="Querbeet durch fünf Jahrzehnte: Rock, Pop, Schlager, Indie — kein Genre sicher."
          footerL="ab 21:00 Uhr"
          footerR="Einlass 20:30"
        />
      </div>
    </section>
  );
}

window.Lineup = Lineup;
window.NightCard = NightCard;
