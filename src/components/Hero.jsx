// export default function Hero() {
//   return <section className="hero" id="home">
//     <div className="hero-poster" />
//     <video className="hero-video" autoPlay muted loop playsInline preload="auto" poster="/assets/hero-1.jpg">
//       <source src="/assets/bisit-bar-hero.mp4" type="video/mp4" />
//     </video>
//     <div className="hero-content reveal">
//       <div className="kicker">Bench Cultural Celebration</div>
//       <h1>Bisit Bar<span>The Spirit of Bench</span></h1>
//       <p className="hero-copy">A living celebration of heritage, community, music, dance, traditional clothing, food and the stories that connect generations.</p>
//       <div className="hero-actions"><a href="#about" className="btn btn-primary">Discover Bisit Bar ↓</a><a href="#program" className="btn btn-outline">View Program</a></div>
//       <div className="hero-facts"><div className="fact"><small>CELEBRATION</small><strong>Bench Cultural Heritage</strong></div><div className="fact-line" /><div className="fact"><small>DATE</small><strong>December 12, 2026</strong></div><div className="fact-line" /><div className="fact"><small>PLACE</small><strong>Bench · Ethiopia</strong></div></div>
//     </div>
//     <div className="scroll">SCROLL TO DISCOVER <i /></div><div className="video-label">● CINEMATIC EXPERIENCE</div>
//   </section>;
// }

import { useEffect, useRef, useState } from "react";



const slides = [
   {
    type: "image",
    src: "assets/hero-6.jpg",

    duration: 5000,

    eyebrow: "HERITAGE • IDENTITY • COMMUNITY",

    title: "Where Culture",

    highlight: "Comes Alive",

    description:
      "Discover the traditions, expressions and memories that make the Bench community unique and unforgettable.",
  },
  {
    type: "image",
    src: "assets/hero-2.jpg",
    duration: 5000,
    eyebrow: "BENCH CULTURAL CELEBRATION",
    title: "The Living Spirit",
    highlight: "of Bench",
    description:
      "A living celebration of heritage, community, music, dance, traditional clothing, food and the stories that connect generations.",
  },

 

  {
    type: "image",
    src: "assets/hero-5.jpg",
    duration: 5000,
    eyebrow: "MUSIC • DANCE • TRADITION",

    title: "Feel the Rhythm",

    highlight: "of Our Heritage",

    description:
      "Experience traditional music, dance and cultural expressions that bring people together across generations.",
  },

  {
    type: "image",
    src: "assets/hero-1.jpg",

    duration: 5000,

    eyebrow: "STORIES ACROSS GENERATIONS",

    title: "Our Culture.",

    highlight: "Our Story.",

    description:
      "Meet the people who carry the knowledge, stories and traditions of Bench from one generation to the next.",
  },
];


/*
|--------------------------------------------------------------------------
| IMAGE TIMER
|--------------------------------------------------------------------------
*/

const DEFAULT_IMAGE_DURATION = 5000;


export default function Hero() {

  const [current, setCurrent] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const [isVideoReady, setIsVideoReady] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Store references to all video elements
  |--------------------------------------------------------------------------
  */

  const videoRefs = useRef([]);


  const slide = slides[current];


  /*
  |--------------------------------------------------------------------------
  | GO TO NEXT SLIDE
  |--------------------------------------------------------------------------
  */

  const nextSlide = () => {

    setCurrent((prev) => {

      return (prev + 1) % slides.length;

    });

  };


  /*
  |--------------------------------------------------------------------------
  | GO TO PREVIOUS SLIDE
  |--------------------------------------------------------------------------
  */

  const prevSlide = () => {

    setCurrent((prev) => {

      return (
        (prev - 1 + slides.length) %
        slides.length
      );

    });

  };


  /*
  |--------------------------------------------------------------------------
  | GO TO SPECIFIC SLIDE
  |--------------------------------------------------------------------------
  */

  const goToSlide = (index) => {

    setCurrent(index);

  };


  useEffect(() => {

    setIsVideoReady(false);


    videoRefs.current.forEach((video, index) => {

      if (!video) return;


      if (index === current && slides[index].type === "video") {

        video.currentTime = 0;

        if (!isPaused) {

          video
            .play()
            .catch(() => {
              /*
               * Browser may block autoplay.
               * The video is muted, so this normally
               * should not happen.
               */
            });

        }

      } else {

        video.pause();

      }

    });

  }, [current]);


  /*
  |--------------------------------------------------------------------------
  | PAUSE / PLAY
  |--------------------------------------------------------------------------
  */

  // useEffect(() => {

  //   const activeVideo =
  //     videoRefs.current[current];


  //   if (!activeVideo) return;


  //   if (slide.type !== "video") return;


  //   if (isPaused) {

  //     activeVideo.pause();

  //   } else {

  //     activeVideo
  //       .play()
  //       .catch(() => {});

  //   }

  // }, [isPaused, current, slide.type]);


  /*
  |--------------------------------------------------------------------------
  | IMAGE TIMER
  |--------------------------------------------------------------------------
  |
  | Videos don't use this timer.
  | Videos advance using onEnded().
  |
  */

  useEffect(() => {

    if (isPaused) return;

    if (slide.type !== "image") return;


    const duration =
      slide.duration ||
      DEFAULT_IMAGE_DURATION;


    const timer = setTimeout(() => {

      nextSlide();

    }, duration);


    return () => {

      clearTimeout(timer);

    };

  }, [current, isPaused, slide]);


  /*
  |--------------------------------------------------------------------------
  | VIDEO ENDED
  |--------------------------------------------------------------------------
  */

  const handleVideoEnded = () => {

    if (!isPaused) {

      nextSlide();

    }

  };


  /*
  |--------------------------------------------------------------------------
  | VIDEO LOADED
  |--------------------------------------------------------------------------
  */

  const handleVideoLoaded = () => {

    setIsVideoReady(true);

  };


  return (

    <section
      className="hero"
      id="home"
    >


      {/* =====================================================
          BACKGROUND MEDIA
      ====================================================== */}

      <div className="hero-media">


        {slides.map((item, index) => (

          <div
            key={item.src}
            className={`hero-media-slide ${
              index === current
                ? "active"
                : ""
            }`}
          >


            {item.type === "video" ? (

              <video
                ref={(element) => {

                  videoRefs.current[index] =
                    element;

                }}

                className="hero-video"
                src={item.src}

                muted
                playsInline

                preload={
                  index === current
                    ? "auto"
                    : "metadata"
                }

                onEnded={
                  index === current
                    ? handleVideoEnded
                    : undefined
                }

                onLoadedData={
                  index === current
                    ? handleVideoLoaded
                    : undefined
                }

                aria-hidden="true"
              />

            ) : (

              <div
                className="hero-image"
                style={{
                  backgroundImage:
                    `url("${item.src}")`,
                }}
              />

            )}

          </div>

        ))}


      </div>


      {/* =====================================================
          CINEMATIC OVERLAY
      ====================================================== */}

      <div className="hero-overlay" />


      {/* =====================================================
          LEFT CONTENT
      ====================================================== */}

      <div className="hero-content">


        {/* EYEBROW */}

        <div
          className="hero-kicker"
          key={`kicker-${current}`}
        >

          <span className="kicker-line" />

          <span>
            {slide.eyebrow}
          </span>

        </div>


        {/* MAIN TITLE */}

        <h1
          className="hero-title"
          key={`title-${current}`}
        >

          <span className="title-main">
            {slide.title}
          </span>

          <span className="title-highlight">
            {slide.highlight}
          </span>

        </h1>


        {/* DECORATION */}

        <div className="title-decoration">

          <span />

          <span />

        </div>


        {/* DESCRIPTION */}

        <p
          className="hero-copy"
          key={`copy-${current}`}
        >

          {slide.description}

        </p>


        {/* =================================================
            ACTION BUTTONS
        ================================================== */}

        <div className="hero-actions">


          <a
            href="#about"
            className="hero-main-btn"
          >

            <span>
              DISCOVER BISIT BAR
            </span>

            <strong>
              ↗
            </strong>

          </a>



        </div>


        {/* =================================================
            EVENT FACTS
        ================================================== */}

        <div className="hero-facts">


          <div className="fact">

            <small>
              CELEBRATION
            </small>

            <strong>
              Bench Cultural Heritage
            </strong>

          </div>


          <div className="fact-line" />


          <div className="fact">

            <small>
              DATE
            </small>

            <strong>
              December, 2026
            </strong>

          </div>


          <div className="fact-line" />


          <div className="fact">

            <small>
              PLACE
            </small>

            <strong>
              Bench · Ethiopia
            </strong>

          </div>


        </div>


      </div>


      {/* =====================================================
          RIGHT SIDE BADGES
      ====================================================== */}

      <div className="hero-badges">


        <div className="hero-badge">

          <span>
            ✦
          </span>

          <div>

            <small>
              EXPERIENCE
            </small>

            <strong>
              Living Heritage
            </strong>

          </div>

        </div>


        <div className="hero-badge">

          <span>
            ♥
          </span>

          <div>

            <small>
              DISCOVER
            </small>

            <strong>
              Authentic Culture
            </strong>

          </div>

        </div>


      </div>


      {/* =====================================================
          LOCATION
      ====================================================== */}

      <div className="hero-location">

        <div className="location-icon">
          ◎
        </div>

        <div>

          <small>
            CELEBRATE WITH US
          </small>

          <strong>
            Bench · Ethiopia
          </strong>

        </div>

      </div>


      {/* =====================================================
          SLIDER NAVIGATION
      ====================================================== */}

      <div className="hero-slider-controls">


        <button
          className="slider-arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ←
        </button>


        <div className="slider-dots">


          {slides.map((item, index) => (

            <button
              key={item.src}

              className={`slider-dot ${
                index === current
                  ? "active"
                  : ""
              }`}

              onClick={() =>
                goToSlide(index)
              }

              aria-label={
                `Go to slide ${index + 1}`
              }
            >

              <span />

            </button>

          ))}


        </div>


        <button
          className="slider-arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>


      </div>


      {/* =====================================================
          SLIDE COUNTER
      ====================================================== */}

      <div className="slide-number">

        <strong>
          {String(current + 1).padStart(2, "0")}
        </strong>

        <i />

        <small>
          {String(slides.length).padStart(2, "0")}
        </small>

      </div>


      {/* =====================================================
          PAUSE / PLAY
      ====================================================== */}

      <button
        className="slider-play"

        onClick={() =>
          setIsPaused((prev) => !prev)
        }

        aria-label={
          isPaused
            ? "Play slider"
            : "Pause slider"
        }
      >

        {isPaused
          ? "▶"
          : "Ⅱ"}

      </button>


      {/* =====================================================
          BOTTOM PROGRESS
      ====================================================== */}

      <div className="hero-timer">

        <div
          key={`${current}-${isPaused}`}
          className={`timer-progress ${
            isPaused
              ? "paused"
              : ""
          } ${
            slide.type === "video"
              ? "video-progress"
              : ""
          }`}
        />

      </div>


      {/* =====================================================
          SCROLL
      ====================================================== */}

      <div className="scroll">

        <span>
          SCROLL TO DISCOVER
        </span>

        <i />

      </div>


      {/* =====================================================
          CULTURAL EXPERIENCE LABEL
      ====================================================== */}

      <div className="video-label">

        <span>
          ●
        </span>

        {slide.type === "video"
          ? "CINEMATIC EXPERIENCE"
          : "CULTURAL EXPERIENCE"}

      </div>


    </section>

  );
}
