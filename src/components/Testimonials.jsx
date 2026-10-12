export default function Testimonials() {
  const testimonials = [
    ['hero-12.jpg','Culture Bearer','','Our traditions connect the generations. When young people learn the songs, clothing, stories and dances, the culture continues.'],
    ['hero-13.jpg','Culture Beare','','A celebration gives our community a place to come together, remember where we came from and share that heritage with the next generation.'],
    ['hero-1.jpg','Culture Beare','','Culture is something we live. It is in our music, our movement, our clothing, our hospitality and the way we gather as a community.'],
  ];
  return <section className="section voices" id="voices"><div className="wrap">
    <div className="voices-heading reveal"><div><div className="section-kicker">Voices of Heritage</div><h2 className="section-title">The people who<br /><em>carry the story.</em></h2></div><p className="lead">Bisit Bar is not only a celebration to watch. It is a culture carried by people who remember, practice and teach the traditions of the Bench community.</p></div>
    <div className="voices-feature reveal"><div className="voice-video"><video controls poster="/assets/hero-2.jpg"><source src="/assets/testimony-1.mp4" type="video/mp4" /></video><div className="voice-video-placeholder"><span className="voice-play">▶</span><small>WATCH TESTIMONY</small></div></div><div className="voice-feature-copy"><h3>“Our culture is our identity.”</h3><p>Hear directly from a culture bearer about the traditions, memories and values that make the Bench community unique.</p>
    {/* <div className="voice-person"><div className="voice-avatar">01</div><div><strong>Culture Bearer</strong><span>Bench Community</span></div></div> */}
    </div></div>
    <div className="testimonial-grid">{testimonials.map(([img,name,role,quote]) => <article className="testimonial reveal" key={name}><div className="quote-mark">“</div><p>{quote}</p><div className="testimonial-person"><div className="person-photo"><img src={`/assets/${img}`} alt={name} /></div><div><strong>{name}</strong><span>{role}</span></div></div></article>)}</div>
    <div className="voices-note reveal"><span /><p><strong>Have a story to share?</strong> Your voice can become part of the living archive of Bisit Bar.</p><a href="#rsvp">Share Your Story →</a></div>
  </div></section>;
}
