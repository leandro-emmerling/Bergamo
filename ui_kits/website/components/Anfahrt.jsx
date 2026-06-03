function Anfahrt() {
  const dest = '49.909626,10.144008';
  // Real Google Maps embed centred on the Lichtung
  const embedUrl = `https://maps.google.com/maps?q=${dest}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  // Directions link: start = Schule Schwanfeld, end = Lichtung coordinates
  const dirsUrl = `https://www.google.com/maps/dir/?api=1&origin=Grundschule+Schwanfeld&destination=${dest}&travelmode=driving`;

  return (
    <section className="anfahrt" id="anfahrt">
      <div className="wrap">
        <div>
          <h2>Anfahrt.</h2>
          <p>
            Wir feiern auf der <strong>Lichtung am Berg</strong> zwischen
            <strong> Schwanfeld</strong> und <strong>Obereisenheim</strong>,
            Unterfranken. Beschilderung folgen ab Ortsausgang Schwanfeld.
          </p>
          <div className="coords">49.909626, 10.144008</div>
          <p className="muted">
            Parken kostenlos am Parkplatz an der Schule in Schwanfeld.
          </p>
          <p className="muted">
            <strong>Shuttle</strong>: pendelt am Samstag während des
            Familientags zwischen Schule Schwanfeld und Lichtung.
          </p>
          <a href={dirsUrl} target="_blank" rel="noopener noreferrer" className="btn primary">
            Route in Google&nbsp;Maps <span className="arrow"><IconExternal size={18} stroke={2.2}/></span>
          </a>
        </div>
        <div className="mapcard">
          <iframe
            title="Lage der Lichtung in Google Maps"
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="legend">
            <IconPin size={12} stroke={2}/> 49.909626, 10.144008
          </div>
        </div>
      </div>
    </section>
  );
}

window.Anfahrt = Anfahrt;
