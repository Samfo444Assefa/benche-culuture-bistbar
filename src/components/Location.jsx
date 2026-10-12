// export default function Location() {
//   return <section className="location" id="location">
//     <div className="location-grid"><div className="location-copy reveal">
//       <div className="section-kicker">Location</div><h2 className="section-title">Come where<br /><em>culture lives.</em></h2><p className="lead">Join the celebration in Bench, Ethiopia, and experience the atmosphere, people and traditions behind Bisit Bar.</p>
//       <div className="location-tags"><span className="tag">BENCH</span><span className="tag">ETHIOPIA</span><span className="tag">CULTURAL CELEBRATION</span></div></div><div className="location-map" /></div></section>;
// }


export default function Location() {
  return (
    <section className="location" id="location">
      <div className="location-grid">

        {/* LEFT SIDE - LOCATION INFORMATION */}
        <div className="location-copy reveal">
          <div className="section-kicker">Location</div>

          <h2 className="section-title">
            Come where<br />
            <em>culture lives.</em>
          </h2>

          <p className="lead">
            Join the celebration in Mizan Teferi, Bench Sheko Zone,
            Ethiopia, and experience the atmosphere, people and traditions
            behind Bisit Bar.
          </p>

          <div className="location-tags">
            <span className="tag">MIZAN TEFERI</span>
            <span className="tag">BENCH SHEKO</span>
            <span className="tag">ETHIOPIA</span>
          </div>
        </div>

        {/* RIGHT SIDE - GOOGLE MAP */}
        <div className="location-map reveal">
          <iframe
            src="https://www.google.com/maps?q=Mizan%20Teferi%2C%20Ethiopia&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mizan Teferi Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
}