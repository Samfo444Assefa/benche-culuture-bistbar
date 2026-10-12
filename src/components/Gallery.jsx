export default function Gallery() {
  const images = ['hero-9.jpg','hero-6.jpg','hero-2.jpg','hero-11.jpg','hero-8.jpg','hero-7.jpg','hero-3.jpg','hero-5.jpg','hero-10.jpg','hero-1.jpg'];
  return <section className="section gallery-section" id="gallery"><div className="wrap">
    <div className="center reveal"><div className="section-kicker">Visual BistBar</div>
    <h2 className="section-title">See Our <em>story.</em></h2>
    {/* <p className="lead" style={{margin:'20px auto 0'}}>Replace these images with your own Bisit Bar .</p> */}
    </div><div className="gallery">{images.map((img,i) => <figure className="reveal" key={img}><img src={`/assets/${img}`} alt={`Bench cultural heritage ${i+1}`} /></figure>)}</div></div></section>;
}
