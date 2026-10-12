// export default function Program() {
//   const items = [['----','Opening Ceremony','Welcome, cultural introduction and opening remarks.'],['----','Traditional Music','Live cultural music and community performance.'],['----','Cultural Dance','A celebration of movement, rhythm and tradition.'],['----','Coffee Ceremony','A moment of hospitality, conversation and connection.'],['04:00 PM','Cultural Feast','Traditional food shared with families and guests.'],['06:00 PM','Closing Celebration','Music, community gathering and closing moments.']];
//   return <section className="section program" id="program"><div className="wrap"><div className="center reveal"><div className="section-kicker">05 — Program</div><h2 className="section-title">A day of <em>culture.</em></h2></div><div className="program-grid">{items.map(([time,title,text]) => <article className="program-item reveal" key={time}><div className="program-time">{time}</div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>;
// }


export default function Program() {
  const items = [
    [
      '🎉',
      'Opening Ceremony',
      'Welcome, cultural introduction and opening remarks.'
    ],
    [
      '🎵',
      'Traditional Music',
      'Live cultural music and community performance.'
    ],
    [
      '💃',
      'Cultural Dance',
      'A celebration of movement, rhythm and tradition.'
    ],
    [
      '☕',
      'Coffee Ceremony',
      'A moment of hospitality, conversation and connection.'
    ],
    [
      '🍽️',
      'Cultural Feast',
      'Traditional food shared with families and guests.'
    ],
    [
      '✨',
      'Closing Celebration',
      'Music, community gathering and closing moments.'
    ]
  ];

  return (
    <section className="section program" id="program">
      <div className="wrap">

        <div className="center reveal">
          <div className="section-kicker">Program</div>

          <h2 className="section-title">
            A day of <em>culture.</em>
          </h2>
        </div>

        <div className="program-grid">
          {items.map(([icon, title, text], index) => (
            <article
              className="program-item reveal"
              key={title}
            >

              <div className="program-icon">
                {icon}
              </div>

              <div className="program-content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}