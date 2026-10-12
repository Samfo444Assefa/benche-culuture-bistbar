export default function Culture() {
  const values = [
    ['01','♪','Music','Traditional sounds and performances that carry memory, identity and community.'],
    ['02','✦','Dance','Movement becomes a visual language for celebration, connection and storytelling.'],
    ['03','◇','Attire','Traditional clothing and woven patterns become part of the visual identity of the gathering.'],
    ['04','⌁','Community','Families, elders and young people meet, share stories and celebrate together.'],
  ];
  return <>
    <section className="section values" id="culture"><div className="wrap">
      <div className="values-head reveal"><div><div className="section-kicker">The Experience</div><h2 className="section-title">Four ways to<br /><em>feel the culture.</em></h2></div><p className="lead">From traditional performance to shared food and community, the celebration brings different expressions of heritage together.</p></div>
      <div className="value-grid">{values.map(([num,icon,title,text]) => <article className="value reveal" key={num}><span className="value-num">{num}</span><div className="value-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>
    <section className="section experience"><div className="wrap experience-grid">
      <div className="reveal">
      <div className="section-kicker">Cultural Journey</div>
      <h2 className="section-title">More than an<br /><em>event.</em></h2>
     <p className="lead" style={{marginTop:20}}>Preserving and nurturing culture goes beyond serving as a historical legacy and an expression of identity; it also provides a foundation for study and research.</p>
     <p className="lead" style={{marginTop:20}}>This means that by using past culture as a starting point, its value is highlighted, and identity is passed on to future generations, thereby making them heirs to both material and spiritual wealth.</p>
     {/* <p className="lead" style={{marginTop:25}}>Step through a sequence of experiences created to make visitors feel connected to the people and traditions behind the celebration.</p> */}
    </div>
      <div className="experience-list">{[
        ['01','Welcome & Gathering','Meet the community and enter the celebration.'],['02','Traditional Performance','Music, rhythm and cultural expression.'],['03','Stories & Heritage','Discover the meaning behind traditions.'],['04','Food & Hospitality','Share traditional flavors around one table.']
      ].map(([n,t,p]) => <article className="experience-item reveal" key={n}><span className="number">{n}</span><div><h3>{t}</h3><p>{p}</p></div><b>→</b></article>)}</div>
    </div></section>
  </>;
}
