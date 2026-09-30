import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import styles from './nav.module.css';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pooarasu-s/', icon: <AiFillLinkedin /> },
  { label: 'GitHub', href: 'https://github.com/pooaras', icon: <AiFillGithub /> },
  { label: 'Email', href: 'mailto:pooarasusivaraj2002@gmail.com', icon: <SiGmail /> },
];

export function Navb() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reduced = useReducedMotion();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (open) menuRef.current?.querySelector('a')?.focus();
    const onKeyDown = event => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === 'Tab' && open) {
        const links = menuRef.current?.querySelectorAll('a[href]');
        if (!links?.length) return;
        const first = links[0];
        const last = links[links.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.classList.remove('menu-open'); window.removeEventListener('keydown', onKeyDown); };
  }, [open]);

  const closeMenu = () => setOpen(false);
  return <motion.header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} initial={reduced ? false : { opacity: 0, y: -9 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? .01 : .35, ease: 'easeOut' }}>
    <nav className={styles.nav} aria-label="Main navigation">
      <Link className={styles.brand} to="/" onClick={closeMenu} aria-label="Pooarasu home"><span className={styles.brandMark}>P</span><span>Pooarasu<span className={styles.brandDot}>.</span></span></Link>
      <div ref={menuRef} className={`${styles.menu} ${open ? styles.menuOpen : ''}`} id="primary-menu">
        <div className={styles.navLinks}><Link to="/#work" onClick={closeMenu}>Work</Link><Link to="/#about" onClick={closeMenu}>About</Link></div>
        <div className={styles.rightLinks}><a className={styles.contact} href="mailto:pooarasusivaraj2002@gmail.com" onClick={closeMenu}>Let’s talk <span>↗</span></a><div className={styles.socials}>{socialLinks.map(item => <a key={item.label} href={item.href} aria-label={item.label} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>{item.icon}<span className={styles.socialLabel}>{item.label}</span></a>)}</div></div>
      </div>
      <button ref={toggleRef} className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`} type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(value => !value)}><span /><span /></button>
    </nav>
  </motion.header>;
}
