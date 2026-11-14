
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import "./WebsiteDevelopment.css";

function WebsiteDevelopment() {const [activeFaq, setActiveFaq] = useState(null);

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the size and complexity of the project. Once we understand your requirements, we'll provide a realistic project schedule."
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. We design responsive websites that adapt to mobile phones, tablets and desktop screens."
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can refresh your existing website's design, improve its user experience and update its functionality."
  },
  {
    question: "Will I be able to update my website later?",
    answer:
      "Yes. We can build your website with suitable tools and content management options so that future updates are easier."
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "We can discuss ongoing maintenance, updates and technical support based on your website's requirements."
  }
];
    
  return (
    <div className="service-page">

      {/* HERO SECTION */}
      <section className="web-hero">
        <div className="web-hero-content">
          <motion.p
            className="web-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            DIGITAL EXPERIENCES · BUILT TO PERFORM
          </motion.p>

          
<motion.h1
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }}
>
  <motion.span
    className="hero-line"
    variants={{
      hidden: { opacity: 0, y: 65, filter: "blur(12px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
  >
    Websites That
  </motion.span>

  <motion.span
    className="hero-line hero-bronze-line"
    variants={{
      hidden: { opacity: 0, y: 65, filter: "blur(12px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
  >
    Move Businesses Forward.
  </motion.span>
</motion.h1>


          <motion.p
            className="web-hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We design and develop premium digital experiences
            that combine creativity, technology and performance
            to help ambitious brands grow.
          </motion.p>

          <motion.a
            href="#web-enquiry"
            className="web-hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            START YOUR PROJECT ↗
          </motion.a>
        </div>

        <div className="web-hero-visual">
          <div className="web-visual-orbit orbit-one"></div>
          <div className="web-visual-orbit orbit-two"></div>
          <div className="web-visual-core">
            <span>WEB</span>
            <strong>DESIGN</strong>
            <small>& DEVELOPMENT</small>
          </div>
        </div>
      </section>

      {/* SERVICE DESCRIPTION */}
      <section className="web-intro">
        <Reveal>
          <p className="web-eyebrow">BEYOND JUST A WEBSITE</p>
          <h2>
            Your Website Is Your
            <span> Digital First Impression.</span>
          </h2>
          <p>
            We create thoughtful, responsive and high-performing
            websites that communicate your brand, engage your
            audience and support your business goals.
          </p>
        </Reveal>
      </section>

      {/* WHAT WE OFFER */}
      <section className="web-offerings">
        <Reveal>
          <p className="web-eyebrow">OUR EXPERTISE</p>
          <h2>What We Bring to the Table.</h2>
        </Reveal>

        
<motion.div
  className="web-offerings-grid"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
  {[
    "Website Design",
    "UI/UX Design",
    "Website Development",
    "E-commerce Websites",
    "Responsive Web Design",
    "Website Maintenance"
  ].map((service, index) => (
    <motion.div
      key={service}
      className="web-offer-card"
      variants={{
        hidden: {
          opacity: 0,
          y: 70,
          rotateX: 12,
          scale: 0.92,
        },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
        },
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -12,
        rotateX: 3,
        scale: 1.025,
        transition: { duration: 0.3 },
      }}
    >
      <span>0{index + 1}</span>
      <h3>{service}</h3>
      <p>
        Thoughtful solutions designed around
        your business and your audience.
      </p>
    </motion.div>
  ))}
</motion.div>

      </section>

      {/* OUR CLIENTS */}
      <section className="web-clients">
        <Reveal>
          <p className="web-eyebrow">OUR CLIENTS</p>
          <h2>Built Around Every Business.</h2>
          <p>
            We create digital experiences for businesses
            across different industries and stages of growth.
          </p>
        </Reveal>
      </section>

      {/* TECHNOLOGIES */}
      
{/* TECHNOLOGIES */}
<section className="web-tech">
  <Reveal>
    <p className="web-eyebrow">OUR TECHNOLOGY STACK</p>
    <h2>
      Powered by <span>Possibilities.</span>
    </h2>
    <p>
      We combine modern technologies and creative tools
      to build digital experiences that perform beautifully.
    </p>
  </Reveal>

  <motion.div
    className="web-tech-grid"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.12 }
      }
    }}
  >
    {[
      { name: "React", symbol: "⚛" },
      { name: "JavaScript", symbol: "JS" },
      { name: "HTML5", symbol: "5" },
      { name: "CSS3", symbol: "✳" },
      { name: "Framer Motion", symbol: "M" },
      { name: "Three.js", symbol: "3D" }
    ].map((tech, index) => (
      <motion.div
        key={tech.name}
        className="web-tech-card"
        variants={{
          hidden: {
            opacity: 0,
            y: 45,
            scale: 0.85,
            filter: "blur(8px)"
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)"
          }
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileHover={{
          y: -10,
          scale: 1.05,
          rotate: index % 2 === 0 ? 2 : -2
        }}
      >
        <span className="web-tech-symbol">{tech.symbol}</span>
        <h3>{tech.name}</h3>
        <span className="web-tech-index">
          0{index + 1}
        </span>
      </motion.div>
    ))}
  </motion.div>

  {/* MOVING TICKER */}
  <div className="web-tech-ticker">
    <div className="web-ticker-track">
      {[1, 2].map((item) => (
        <div className="web-ticker-group" key={item}>
          <span>DESIGN WITH PURPOSE</span>
          <span>✦</span>
          <span>DEVELOP WITH PRECISION</span>
          <span>✦</span>
          <span>BUILD FOR THE FUTURE</span>
          <span>✦</span>
        </div>
      ))}
    </div>
  </div>
</section>


     
{/* FAQ */}
<section className="web-faq">
  <Reveal>
    <p className="web-eyebrow">GOOD QUESTIONS. CLEAR ANSWERS.</p>
    <h2>
      Everything You Need
      <span> to Know.</span>
    </h2>
    <p className="web-faq-intro">
      Here are a few things businesses often ask us
      before starting a website project.
    </p>
  </Reveal>

  <div className="web-faq-list">
    {faqs.map((faq, index) => (
      <motion.div
        className={`web-faq-item ${
          activeFaq === index ? "faq-active" : ""
        }`}
        key={faq.question}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
      >
        <button
          className="web-faq-question"
          onClick={() =>
            setActiveFaq(activeFaq === index ? null : index)
          }
          aria-expanded={activeFaq === index}
        >
          <span className="web-faq-number">
            0{index + 1}
          </span>

          <span className="web-faq-title">
            {faq.question}
          </span>

          <motion.span
            className="web-faq-icon"
            animate={{ rotate: activeFaq === index ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            +
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {activeFaq === index && (
            <motion.div
              className="web-faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>{faq.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>
</section>


      {/* ENQUIRY */}
      <section className="web-enquiry" id="web-enquiry">
        <Reveal>
          <p className="web-eyebrow">LET'S CREATE SOMETHING GREAT</p>
          <h2>Have a Website Project in Mind?</h2>
          <p>
            Let's turn your ideas into a powerful digital experience.
          </p>
          <a href="mailto:hello@plutussdigital.com">
            DISCUSS YOUR PROJECT ↗
          </a>
        </Reveal>
      </section>

    </div>
  );
}

export default WebsiteDevelopment;
