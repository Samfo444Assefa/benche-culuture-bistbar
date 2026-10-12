import { useState } from 'react';

export default function RSVP() {
  const [submitted,setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); e.currentTarget.reset(); };
  return <section className="section rsvp" id="rsvp"><div className="wrap rsvp-box"><div className="reveal"><div className="section-kicker">Be Part of It</div><h2 className="section-title">Tell Us what you feel about<br />attending<em> this Fastival</em></h2>
  {/* <p className="lead" style={{marginTop:25}}>Register your interest and become part of the Bisit Bar cultural celebration.</p> */}
  </div><form className="reveal" onSubmit={handleSubmit}><div><label>Full Name</label><input name="name" required placeholder="Your full name" /></div><div><label>Phone / Email</label><input name="contact" required placeholder="Phone number or email" /></div>
  {/* <div><label>Number of Guests</label><select name="guests"><option>1 Guest</option><option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5+ Guests</option></select></div> */}
  <div><label>Message</label><textarea name="message" placeholder="Tell us anything you would like us to know..." /></div><button className="btn btn-primary submit" type="submit">Send Registration →</button>{submitted && <p style={{color:'var(--ice)',fontSize:11}}>Thank you. Your registration has been received.</p>}</form></div></section>;
}
