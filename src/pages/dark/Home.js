import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ProgressScroll from '../../components/Common/ProgressScroll';
import Cursor from '../../components/Common/cusor';
import LoadingScreen from '../../components/Common/loader';
import ContactUs from '../../components/dark/contact/ContactUs';
import Info from '../../components/dark/contact/info';
import Footer from '../../components/dark/home/footer';
import NavTop from '../../components/dark/home/nav-top';
import Navbar from '../../components/dark/home/navbar';
import Portfolio from '../../components/dark/home/portfolio';
import Profile from '../../components/dark/home/profile';
import Skills from '../../components/dark/home/skills';
import Education from '../../components/dark/home/Education';
import Lines from '../../components/Common/Lines';
import Certifications from '../../components/dark/home/Certifications';
import References from '../../components/dark/home/References';

function HomeDark() {
  const location = useLocation();

  useEffect(() => {
    // Force scroll restoration to manual to prevent browser jumping on reload
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    // Always scroll to top on mount for the Home Screen
    window.scrollTo(0, 0);

    
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    // Cleanup: restore default behavior when navigating away from Home
    return () => {
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  useEffect(() => {
    if (location.hash === '#projects') {
      const timer = setTimeout(() => {
        const portfolioSection = document.getElementById('projects');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
      return () => clearTimeout(timer);
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  return (
    <div>
      <Helmet>
        <title>Muhammad Aamir Alam</title>
        <link rel="icon" href="/assets/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/assets/imgs/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/assets/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
      </Helmet>
      <Cursor />
      <ContactUs />
      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <div>
        <NavTop />
        <main className="container">
          <Profile />
          <Navbar />
          <section className="in-box">
            <Education />
            <Skills />
            <Portfolio />
            <Certifications />
            <References />
            <Info />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default HomeDark;
