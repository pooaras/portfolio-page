import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Home } from './home';

function PageRoutes() {
  const location = useLocation();
  const reduced = useReducedMotion();
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    let timer;
    if (location.hash) {
      const scrollToSection = () => document.querySelector(location.hash)?.scrollIntoView?.({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      if (document.querySelector(location.hash)) scrollToSection();
      else timer = window.setTimeout(scrollToSection, reduced ? 30 : 240);
    } else if (previousPath.current !== location.pathname && window.scrollY > 0) {
      window.scrollTo?.({ top: 0, left: 0, behavior: reduced ? 'auto' : 'smooth' });
    }
    previousPath.current = location.pathname;
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash, reduced]);
  return <AnimatePresence mode="wait" initial={false}>
    <motion.div key={location.pathname} className="route-page" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? { opacity: 0 } : { opacity: 0, y: -5 }} transition={{ duration: reduced ? .01 : .22, ease: 'easeOut' }}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </motion.div>
  </AnimatePresence>;
}

export default function App() {
  return <BrowserRouter><PageRoutes /></BrowserRouter>;
}
