import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { Navb } from './nav';
import { Reveal } from './components/Reveal';
import { ScrollProgress } from './components/ScrollProgress';
import cls from './homestyle.module.css';

const portrait = '/pooarasu-portrait.png';

const stack = [
  { group: 'FRONTEND', items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Redux', 'Tailwind CSS', 'Material UI', 'HTML', 'CSS'] },
  { group: 'BACKEND', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { group: 'DATA', items: ['SQL', 'NoSQL'] },
  { group: 'TOOLS / ENGINEERING', items: ['Git', 'Postman', 'WebSockets', 'Keycloak', 'React Flow'] },
];

const principles = [
  ['01', 'Reusable by default', 'I prefer component-driven solutions that can grow with the product.'],
  ['02', 'Logic over decoration', 'I enjoy solving application and workflow problems as much as shaping interfaces.'],
  ['03', 'Built for real users', 'Validation, edge cases, responsiveness and maintainability belong in the first pass.'],
  ['04', 'Always improving', 'I keep sharpening fundamentals and revisit solutions as requirements evolve.'],
];
const cgpa = '8.68';

function HeroVisual() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const query = typeof window.matchMedia === 'function' ? window.matchMedia('(max-width: 700px)') : null;
    const update = () => setMobile(Boolean(query?.matches));
    update();
    if (!query) return undefined;
    if (query.addEventListener) query.addEventListener('change', update);
    else query.addListener(update);
    return () => {
      if (query.removeEventListener) query.removeEventListener('change', update);
      else query.removeListener(update);
    };
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, value => (reduced || mobile ? 0 : value * 12));
  return <motion.div ref={ref} className={cls.visual} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .48, ease: [.2, .7, .2, 1] }}>
    <motion.div className={cls.imageFrame} style={{ y: imageY }} initial={{ clipPath: 'inset(12% 0 0 0)' }} animate={{ clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: .8, delay: .48, ease: [.2, .7, .2, 1] }}><img src={portrait} alt="Pooarasu S" fetchpriority="high" /><div className={cls.imageShade} /></motion.div>
    <motion.div className={cls.note} initial={{ opacity: 0, x: -9 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: .4 }}><span className={cls.noteMark}>✳</span><span>Building with<br /><strong>purpose & patience</strong></span></motion.div>
    <span className={cls.orbit} aria-hidden="true">PRODUCTS · SYSTEMS · PEOPLE</span>
  </motion.div>;
}

function Footer() {
  return <Reveal as="footer" className={cls.footer}><a className={cls.footerBrand} href="#top">Pooarasu S <span>· Software Engineer</span></a><div className={cls.footerSocials}><a href="https://www.linkedin.com/in/pooarasu-s/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><AiFillLinkedin /></a><a href="https://github.com/pooaras" target="_blank" rel="noreferrer" aria-label="GitHub"><AiFillGithub /></a><a href="mailto:pooarasusivaraj2002@gmail.com" aria-label="Email"><SiGmail /></a></div><span>© {new Date().getFullYear()} Pooarasu S</span></Reveal>;
}

export function Home() {
  const reduced = useReducedMotion();
  const introTransition = reduced ? { duration: .01 } : { duration: .5, ease: [.2, .7, .2, 1] };
  return <main className={cls.page} id="top">
    <ScrollProgress /><div className="grain" aria-hidden="true" /><Navb />
    <section className={cls.hero} aria-labelledby="hero-title">
      <div className={cls.heroInner}>
        <div className={cls.intro}>
          <motion.p className={cls.eyebrow} initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ ...introTransition, delay: .18 }}>SOFTWARE ENGINEER <span>·</span> INDIA</motion.p>
          <h1 id="hero-title"><span className={cls.headlineLine}><motion.span initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ ...introTransition, delay: .26 }}>Building thoughtful</motion.span></span><span className={`${cls.headlineLine} ${cls.headlineAccent}`}><motion.span initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ ...introTransition, delay: .36 }}>web products.</motion.span></span></h1>
          <motion.p className={cls.lede} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ ...introTransition, delay: .48 }}>I build modern web applications with React and TypeScript, and connect them to reliable backend services.</motion.p>
          <motion.div className={cls.identifiers} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...introTransition, delay: .55 }}><span>React</span><i /><span>TypeScript</span><i /><span>Node.js</span></motion.div>
          <motion.div className={cls.actions} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ ...introTransition, delay: .62 }}><a href="#work" className={cls.primary}>View my work <span>↓</span></a><a href="#about" className={cls.secondary}>About me <span>↗</span></a></motion.div>
          <motion.div className={cls.heroMeta} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...introTransition, delay: .86 }}><span className={cls.metaLine} /><span>BASED IN INDIA</span><span className={cls.metaLine} /></motion.div>
        </div>
        <HeroVisual />
      </div>
      <motion.a className={cls.scrollCue} href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...introTransition, delay: 1.12 }}><span /> SCROLL TO EXPLORE</motion.a>
    </section>

    <section className={cls.aboutSection} id="about" aria-labelledby="about-title">
      <div className={cls.sectionGrid}><Reveal><p className={cls.eyebrow}>01 / ABOUT</p></Reveal><div><Reveal as="h2" className={cls.sectionTitle} id="about-title">Software engineering, with care for the details<span>.</span></Reveal><Reveal delay={.08}><p className={cls.aboutCopy}>I’m a Software Engineer with around two years of experience building web applications with React, TypeScript and Node.js. I enjoy turning complex requirements into maintainable interfaces, reusable components and reliable application flows.</p></Reveal><Reveal delay={.12}><a className={cls.textLink} href="#experience">My experience <span>↓</span></a></Reveal></div></div>
      <div className={cls.workMethod}><Reveal><p className={cls.eyebrow}>HOW I WORK</p></Reveal><div className={cls.methodGrid}>{[['01', 'Understand the problem'], ['02', 'Design reusable solutions'], ['03', 'Build and validate'], ['04', 'Improve through iteration']].map(([n, text], i) => <Reveal as="div" className={cls.method} key={n} delay={i * .05}><span>{n}</span><h3>{text}</h3></Reveal>)}</div></div>
    </section>

    <section className={cls.experience} id="experience" aria-labelledby="experience-title"><Reveal className={cls.sectionGrid}><p className={cls.eyebrow}>02 / EXPERIENCE</p><div className={cls.experienceIntro}><h2 className={cls.sectionTitle} id="experience-title">Growing through real product work<span>.</span></h2><p className={cls.aboutCopy}>Around two years in software development, progressing from Graduate Trainee to Software Engineer.</p></div></Reveal><Reveal className={cls.timeline} delay={.08}><div className={cls.timelineDate}>JUL 2024 — PRESENT</div><div className={cls.timelineRoles}><article><span>CURRENT ROLE</span><h3>Software Engineer</h3><p>Building web product features across frontend experiences and backend integrations.</p></article><article><span>STARTED AS · 6 MONTHS</span><h3>Graduate Trainee</h3><p>Built software development foundations through hands-on product work and collaboration.</p></article></div></Reveal></section>

    <section className={cls.educationSection} id="education" aria-labelledby="education-title"><div className={cls.sectionGrid}><Reveal><p className={cls.eyebrow}>03 / EDUCATION</p></Reveal><Reveal as="div"><h2 className={cls.sectionTitle} id="education-title">A foundation in computer science<span>.</span></h2></Reveal></div><Reveal className={cls.educationDetails} data-has-cgpa={Boolean(cgpa)} delay={.08}><article><span>DEGREE</span><h3>B.E. Computer Science &amp; Engineering</h3></article><article><span>INSTITUTION</span><p>Anna University Regional Office, Tiruchirappalli</p></article>{cgpa && <article><span>CGPA</span><p>{cgpa}</p></article>}</Reveal></section>

    <section className={cls.work} id="work" aria-labelledby="work-title"><div className={cls.sectionGrid}><Reveal><p className={cls.eyebrow}>04 / SELECTED WORK</p></Reveal><div><Reveal as="h2" className={cls.sectionTitle} id="work-title">Small product, thoughtful utility<span>.</span></Reveal><Reveal delay={.06}><p className={cls.aboutCopy}>A browser extension focused on making a new tab more useful, with quick links and at-a-glance information.</p></Reveal></div></div>
      <Reveal className={cls.projectCard} delay={.1}><div className={cls.projectVisual} aria-hidden="true"><div className={cls.browserBar}><span /><span /><span /><i>custom tab</i></div><div className={cls.mockDate}>A calmer<br /><b>new tab.</b><div>MONDAY · 09:41</div></div><div className={cls.quickLinks}><span>work</span><span>learn</span><span>make</span><span>+</span></div></div><div className={cls.projectInfo}><div className={cls.projectMeta}><span>PERSONAL PROJECT</span><span>HTML · CSS · JAVASCRIPT</span></div><h3>Customized Tab for User Tasks</h3><p>A Firefox new-tab extension with user-managed quick links, a changeable background image, and the current date and time.</p><div className={cls.projectLinks}><a href="https://github.com/pooaras/custom-tab-Firefox-extension" target="_blank" rel="noreferrer">View source <span>↗</span></a><a href="https://addons.mozilla.org/en-US/firefox/addon/customized-tab-for-user-tasks/" target="_blank" rel="noreferrer">Firefox Add-ons <span>↗</span></a></div></div></Reveal>
    </section>

    <section className={cls.stackSection} id="stack" aria-labelledby="stack-title"><div className={cls.sectionGrid}><Reveal><p className={cls.eyebrow}>05 / TECHNICAL FOCUS</p></Reveal><div><Reveal as="h2" className={cls.sectionTitle} id="stack-title">Tools for the whole application<span>.</span></Reveal><Reveal><p className={cls.aboutCopy}>Frontend-focused, with hands-on experience integrating APIs, data and access-controlled workflows.</p></Reveal></div></div><div className={cls.stackGroups}>{stack.map((group, index) => <Reveal as="div" className={cls.stackRow} key={group.group} delay={index * .05}><h3>{group.group}</h3><div className={cls.skills}>{group.items.map((skill, i) => <span key={skill} style={{ '--item-delay': `${i * 18}ms` }}>{skill}</span>)}</div></Reveal>)}<Reveal className={cls.currentFocus} delay={.2}><h3>CURRENT FOCUS</h3><div className={cls.skills}>{['Advanced React', 'TypeScript', 'Next.js', 'Node.js', 'Backend fundamentals', 'DSA', 'System design'].map(item => <span key={item}>{item}</span>)}</div></Reveal></div></section>

    <section className={cls.principles} aria-labelledby="principles-title"><div className={cls.sectionGrid}><Reveal><p className={cls.eyebrow}>06 / ENGINEERING MINDSET</p></Reveal><div><Reveal as="h2" className={cls.sectionTitle} id="principles-title">Good software is thoughtful at every layer<span>.</span></Reveal><div className={cls.principleGrid}>{principles.map(([n, title, description], i) => <Reveal as="article" className={cls.principle} key={n} delay={i * .04}><span>{n}</span><h3>{title}</h3><p>{description}</p></Reveal>)}</div></div></div></section>

    <section className={cls.contactSection} id="contact"><Reveal className={cls.contactInner}><p className={cls.eyebrow}>07 / CONTACT</p><h2>Let’s build something useful<span>.</span></h2><p>Have a product idea, engineering problem or interesting opportunity?</p><div className={cls.contactActions}><a href="mailto:pooarasusivaraj2002@gmail.com" className={cls.primary}>Email me <span>↗</span></a><a href="https://www.linkedin.com/in/pooarasu-s/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://github.com/pooaras" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></Reveal></section>
    <Footer />
  </main>;
}
