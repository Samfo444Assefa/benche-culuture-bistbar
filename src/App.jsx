import { useEffect, useRef, useState } from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Culture from './components/Culture';
import Testimonials from './components/Testimonials';
import Program from './components/Program';
import Gallery from './components/Gallery';
import Location from './components/Location';
import RSVP from './components/RSVP';
import Footer from './components/Footer';


export default function App() {

  // ==========================================
  // AUDIO
  // ==========================================

  const audioRef = useRef(null);

  const [musicPlaying, setMusicPlaying] = useState(false);


  // ==========================================
  // PAGE EFFECTS
  // ==========================================

  useEffect(() => {

    // ========================================
    // NAVBAR SCROLL
    // ========================================

    const nav = document.getElementById('nav');

    const onScroll = () => {

      nav?.classList.toggle(
        'scrolled',
        window.scrollY > 40
      );

    };

    onScroll();

    window.addEventListener(
      'scroll',
      onScroll
    );


    // ========================================
    // REVEAL ANIMATION
    // ========================================

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              'visible'
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


    document
      .querySelectorAll('.reveal')
      .forEach((element) => {

        observer.observe(element);

      });


    // ========================================
    // BACKGROUND MUSIC
    // ========================================

    const audio = audioRef.current;

    if (audio) {

      // Background volume
      audio.volume = 0.35;


      // ======================================
      // TRY AUTOPLAY
      // ======================================

      audio
        .play()
        .then(() => {

          setMusicPlaying(true);

        })
        .catch(() => {

          // Browser blocked autoplay
          setMusicPlaying(false);

        });


      // ======================================
      // START MUSIC AFTER USER INTERACTION
      // ======================================

      const startMusic = () => {

        audio
          .play()
          .then(() => {

            setMusicPlaying(true);

          })
          .catch(() => {});


        // Remove listeners after first interaction
        document.removeEventListener(
          'click',
          startMusic
        );

        document.removeEventListener(
          'touchstart',
          startMusic
        );

        document.removeEventListener(
          'keydown',
          startMusic
        );

      };


      document.addEventListener(
        'click',
        startMusic
      );

      document.addEventListener(
        'touchstart',
        startMusic
      );

      document.addEventListener(
        'keydown',
        startMusic
      );


      // ======================================
      // CLEANUP
      // ======================================

      return () => {

        window.removeEventListener(
          'scroll',
          onScroll
        );

        observer.disconnect();

        document.removeEventListener(
          'click',
          startMusic
        );

        document.removeEventListener(
          'touchstart',
          startMusic
        );

        document.removeEventListener(
          'keydown',
          startMusic
        );

      };

    }


    return () => {

      window.removeEventListener(
        'scroll',
        onScroll
      );

      observer.disconnect();

    };

  }, []);


  // ==========================================
  // MUSIC TOGGLE
  // ==========================================

  const toggleMusic = () => {

    const audio = audioRef.current;

    if (!audio) return;


    if (musicPlaying) {

      // STOP MUSIC
      audio.pause();

      setMusicPlaying(false);

    } else {

      // START MUSIC
      audio
        .play()
        .then(() => {

          setMusicPlaying(true);

        })
        .catch(() => {});

    }

  };


  // ==========================================
  // APPLICATION
  // ==========================================

  return (

    <BrowserRouter>


      {/* ======================================
          BACKGROUND MUSIC
      ====================================== */}

      <audio
        ref={audioRef}
        loop
        preload="auto"
      >

        <source
          src="/assets/bisit-bar-music.mp3"
          type="audio/mpeg"
        />

        Your browser does not support
        the audio element.

      </audio>


      {/* ======================================
          MUSIC CONTROL BUTTON
      ====================================== */}

      <button
        className="music-control"
        onClick={toggleMusic}
        aria-label={
          musicPlaying
            ? "Stop background music"
            : "Play background music"
        }
        title={
          musicPlaying
            ? "Stop music"
            : "Play music"
        }
      >

        {musicPlaying ? '🔊' : '🔇'}

      </button>


      {/* ======================================
          ROUTES
      ====================================== */}

      <Routes>


        {/* ====================================
            HOME PAGE
        ==================================== */}

        <Route
          path="/"
          element={
            <>

              <Navbar />

              <main>

                <Hero />

                <About />

                <Culture />

                <Gallery />

                <Testimonials />

                <Program />

                <Location />

                <RSVP />

              </main>

              <Footer />

            </>
          }
        />


        {/* ====================================
            CULTURAL CELEBRATION PAGE
        ==================================== */}

        <Route
          path="/cultural-celebration"
          element={
            <>

              <Navbar />

              <main>

                {/* Cultural celebration
                    page content */}

              </main>

              <Footer />

            </>
          }
        />


      </Routes>

    </BrowserRouter>

  );

}