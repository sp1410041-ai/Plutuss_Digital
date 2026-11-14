import { motion } from "framer-motion";
import "./App.css";
import Hero3D from "./components/Hero3D";
import Reveal from "./components/Reveal";
import TiltCard from "./components/TiltCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";

function HomePage() {
  return (
    <div className="website">

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="logo">
          PLUTUSS<span></span>
          <small>DIGITAL </small>
        </div>

        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
        </nav>

        <a href="#contact" className="nav-button">
          LET'S WORK TOGETHER <span>↗</span>
        </a>
      </header>

      {/* HERO SECTION */}
      <main id="home" className="hero">

        <div className="hero-glow"></div>

        <div className="hero-content">
          <p className="eyebrow">
            BRANDING <span>•</span> DIGITAL MARKETING
            <span>•</span> WEB DEVELOPMENT
          </p>

          
<motion.h1
  initial={{
    opacity: 0,
    y: 70,
    filter: "blur(12px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Building Brands.
  <br />
  Creating <span>Impact.</span>
</motion.h1>


          
<motion.p
  className="hero-description"
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 0.7,
    ease: "easeOut",
  }}
>
  We help ambitious businesses grow through powerful
  digital experiences, creative strategies and
  intelligent solutions.
</motion.p>


        
<motion.div
  className="hero-buttons"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 1.1,
    ease: "easeOut",
  }}
>
  <motion.a
    href="#work"
    className="primary-button"
    whileHover={{ scale: 1.06, y: -4 }}
    whileTap={{ scale: 0.97 }}
  >
    EXPLORE OUR WORK <span>→</span>
  </motion.a>

  <motion.a
    href="#services"
    className="secondary-button"
    whileHover={{ scale: 1.06, y: -4 }}
    whileTap={{ scale: 0.97 }}
  >
    OUR SERVICES
  </motion.a>
</motion.div>

</div>
       
<motion.div
  className="hero-bottom"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1.5 }}
>
  <span>CREATIVITY MEETS STRATEGY</span>
  <span>SCROLL TO EXPLORE ↓</span>
</motion.div>

<Hero3D />
     </main>
      
      {/* SERVICES SECTION */}

      <section id="services" className="services-section">

        <div className="services-heading">

          <p className="section-eyebrow">
            WHAT WE DO <span>✦</span> WHAT WE CREATE
          </p>

         <Reveal>
  <h2>
    Solutions That Move Brands Forward.
  </h2>
</Reveal>
          <p className="services-intro">
            From building powerful brand identities to creating
            intelligent digital experiences, we bring strategy,
            creativity and technology together.
          </p>

        </div>

        <div className="services-grid">
<Reveal delay={0.1}>
  <TiltCard className="service-card">
          
            <div className="service-top">
              <span className="service-number">01 / 04</span>
              <span className="service-icon">✳</span>
            </div>
            
            <h3>Branding &<br />Creative Design</h3>

            <p>
              We create distinctive brand identities that
              communicate your vision and make your business
              unforgettable.
            </p>

            <div className="service-tags">
              <span>Brand Strategy</span>
              <span>Logo Design</span>
              <span>Visual Identity</span>
              <span>Graphic Design</span>
            </div>

            <a href="#contact" className="service-link">
              EXPLORE SERVICE <span>↗</span>
            </a>
            </TiltCard>
</Reveal>
<Reveal delay={0.2}>
          <TiltCard className="service-card">
            <div className="service-top">
              <span className="service-number">02 / 04</span>
              <span className="service-icon">⌘</span>
            </div>

            <h3>Website Design &<br />Development</h3>

            <p>
              We build beautiful, responsive and high-performing
              websites that turn visitors into customers.
            </p>

            <div className="service-tags">
              <span>Web Design</span>
              <span>UI/UX</span>
              <span>E-commerce</span>
              <span>Development</span>
            </div>

            <a href="#contact" className="service-link">
              EXPLORE SERVICE <span>↗</span>
            </a>
          </TiltCard>
</Reveal>
<Reveal delay={0.3}>
          <TiltCard className="service-card">
            <div className="service-top">
              <span className="service-number">03 / 04</span>
              <span className="service-icon">↗</span>
            </div>

            <h3>Digital Marketing<br />& SEO</h3>

            <p>
              We help businesses increase visibility, reach
              the right audience and generate meaningful growth.
            </p>

            <div className="service-tags">
              <span>SEO</span>
              <span>Social Media</span>
              <span>Paid Ads</span>
              <span>Content Marketing</span>
            </div>

            <a href="#contact" className="service-link">
              EXPLORE SERVICE <span>↗</span>
            </a>
          </TiltCard>
</Reveal>
<Reveal delay={0.4}>
          <TiltCard className="service-card">
            <div className="service-top">
              <span className="service-number">04 / 04</span>
              <span className="service-icon">✧</span>
            </div>

            <h3>AI & Business<br />Automation</h3>

            <p>
              We simplify business operations with intelligent
              automation and technology-driven solutions.
            </p>

            <div className="service-tags">
              <span>AI Solutions</span>
              <span>Automation</span>
              <span>Integrations</span>
              <span>Smart Workflows</span>
            </div>

            <a href="#contact" className="service-link">
              EXPLORE SERVICE <span>↗</span>
            </a>
          </TiltCard>
</Reveal>
        </div>

        <div className="services-bottom">
          <span>CREATIVE THINKING. DIGITAL EXECUTION.</span>
          <span>BUILT AROUND YOUR AMBITION ✦</span>
        </div>

      </section>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services/web-development"
          element={<WebsiteDevelopment />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;