"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopoBackground from "./components/Topobackground";
import IntroAnimation from "./components/IntroAnimation";

const projects = [
  {
    number: "01",
    title: "Lifestyle & Informational Writing",
    desc: "My writing for lifestyle blogs or educational content is really about connecting with people. The complex topics are made simple so that anyone can relate to and understand. The focus is always on clarity, empathy, and practicality - the writing that feels like a guide walking with you every step of the way",
    reason: "Knowledge only matters when it is easy to understand, relatable, and actually useful. Good content should speak to you, not just give you information.",
    groups: [
      {
        label: "Velocity Express – Logistics & Courier Insights",
        links: [
          { name: "Export General Manifest (EGM): A Complete Guide", url: "https://velexp.com/blog/export-general-manifest-egm-a-complete-guide" },
          { name: "How to Send a Laptop via Courier Safely Across India", url: "https://velexp.com/blog/laptop-delivery-service-send-laptops-and-electronics-safely" },
          { name: "Guide to choose the Best Last-Mile Delivery Companies", url: "https://velexp.com/blog/guide-to-choose-best-last-mile-delivery-companies" }
        ]
      },
      {
        label: "The Desi Food - Food & Wellness",
        links: [
          { name: "Kaishore Guggul: Natural Support For Your Health", url: "https://thedesifood.com/blog/kaishore-guggul" },
          { name: "Best Gluten-Free Atta Options for Making Rotis", url: "https://thedesifood.com/blog/best-gluten-free-atta-options-for-roti" },
          { name: "Neem & Turmeric: The Easy Way to Improve Your Health", url: "https://thedesifood.com/blog/neem-and-turmeric-benefits-and-uses" }
        ]
      }
    ]
  },
  {
    number: "02",
    title: "Brand & Product Storytelling",
    desc: "I craft brand narratives and product descriptions that go beyond selling, focusing on authenticity, values, and user trust. Each of them is written to connect with people on an emotional level, making brands feel human, relatable, and unforgettable. This helps create genuine connections and lasting relationships between brands and their audience.",
    reason: "It turns every message into a meaningful connection, allowing brands to build trust and long-lasting relationships with their audience.",
    groups: [
      {
        label: "The Desi Food - Food & Wellness (Product Description)",
        links: [
          { name: "Patanjali Punarnavadi Mandoor", url: "https://thedesifood.com/products/patanjali-punarnavadi-mandoor" },
          { name: "Wishcare Pure & Natural Kannauj Rose Water", url: "https://thedesifood.com/products/wishcare-pure-&-natural-kannauj-rose-water-for-skin-face-&-hair" },
          { name: "Threptin Diskettes Biscuits", url: "https://thedesifood.com/products/threptin-diskettes-biscuits" }
        ]
      },
      {
        label: "The Desi Food - Food & Wellness (Brand Description)",
        links: [
          { name: "Similac", url: "https://thedesifood.com/our-brand/Similac" },
          { name: "IMC", url: "https://thedesifood.com/our-brand/IMC" },
          { name: "Katdare Masala and Spices", url: "https://thedesifood.com/our-brand/Katdare" }
        ]
      }
    ]
  },
  {
    number: "03",
    title: "Logistics & Process Content",
    desc: "I create clear, structured content for logistics and operations, including location-based service pages that explain complex processes in a simple, relatable way. Each piece is tailored for local relevance while maintaining consistency and clarity across platforms, helping users easily understand how services work and what to expect.",
    reason: "It improves clarity, builds stronger local connections, and ensures a smoother understanding of services, leading to better user trust and engagement.",
    groups: [
      {
        label: "Velocity Express - Logistics & Courier Insights",
        links: [
          { name: "Courier Service in Dimapur", url: "https://velexp.com/our-presence/courier-service-dimapur" },
          { name: "Courier Service in Barasat", url: "https://velexp.com/our-presence/courier-service-barasat" },
          { name: "Courier Service in Tamil Nadu", url: "https://velexp.com/our-presence/courier-service-tamilnadu" }
        ]
      },
      {
        label: "Omnity - Product-Led Growth & Digital Experiences",
        links: [
          { name: "About US Page", url: "https://omnity.in/about-us" },
          { name: "Contact US Page", url: "https://omnity.in/contact-us" },
          { name: "Fylooo Product Page", url: "https://omnity.in/product-fylooo" },
          { name: "OLRAA Product Page", url: "https://omnity.in/product-olraa" }
        ]
      }
    ]
  },
  {
    number: "04",
    title: "Wellness & Nutrition Content",
    desc: "I create informative, compassionate content around health, traditional foods, mindful eating, and natural wellness practices. This content aims to educate readers while respecting cultural roots and encouraging conscious, balanced lifestyle choices that feel approachable and trustworthy.",
    reason: "It helps people reconnect with their bodies, make conscious everyday choices, and build healthier lives rooted in understanding, balance, and long-term well-being.",
    groups: [
      {
        label: "OLRAA - Delivering Indian Goodness Globally",
        links: [
          { name: "Supplements - Main Category Page", url: "https://olraa.com/en-in/supplements" },
          { name: "Skin, Hair & Nail Supplements - Category Page", url: "https://olraa.com/en-in/supplements/skin-hair-nail-health" },
          { name: "Condiments - Pickles - Sub Category", url: "https://olraa.com/en-in/food/condiments/pickles" },
          { name: "Women Care Supplements - Category Page", url: "https://olraa.com/en-in/supplements/women-care" },
          { name: "Weight Management - Category Page", url: "https://olraa.com/en-in/supplements/weight-management" }
        ]
      }
    ]
  }
];

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fallback = setTimeout(() => setIntroComplete(true), 2600);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      {/* ── Intro sequence ── */}
      <AnimatePresence>
        {!introComplete && (
          <IntroAnimation onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>
      <section id="home" className="hero-section">
        {/* ── Main page ── */}
        <div className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <TopoBackground />

          {/* PORTFOLIO logo */}
          <motion.div
            className="page-logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: introComplete ? 1 : 0 }}
            transition={{ duration: 0.35, delay: introComplete ? 0.78 : 0 }}
          >
            PORTFOLIO
          </motion.div>

          {/* NAVBAR */}
          <motion.nav
            className="navbar"
            initial={{ opacity: 0, y: -16 }}
            animate={{
              opacity: introComplete ? 1 : 0,
              y: introComplete ? 0 : -16,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: introComplete ? 0.55 : 0 }}
          >
            <div className="nav-container">
              <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              </button>
              <div className={`nav-pill ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <a href="#home" className="nav-link active" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="#work" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                <a href="#contact" className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</a>
              </div>
            </div>
          </motion.nav>

          {/* CONTENT */}
          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: introComplete ? 1 : 0 }}
            transition={{ duration: 0.9, delay: introComplete ? 0.35 : 0 }}
          >
            {/* LEFT TEXT */}
            <motion.div
              className="left"
              initial={{ x: -40, opacity: 0 }}
              animate={introComplete ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
            >
              <h1>
                Anusha
                Inamdar
              </h1>
              <p>SEO Content Writer crafting meaningful, high-ranking content.</p>
              <motion.a
                href="#projects"
                className="cta-btn"
                initial={{ opacity: 0, y: 16 }}
                animate={introComplete ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.85, duration: 0.6 }}
              >
                <span className="cta-btn-slide cta-btn-slide--1" />
                <span className="cta-btn-slide cta-btn-slide--2" />
                <span className="cta-btn-slide cta-btn-slide--3" />
                <span className="cta-btn-text">View My Work →</span>
              </motion.a>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="right"
              initial={{ x: 80, opacity: 0, scale: 0.96 }}
              animate={introComplete ? { x: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            >
              <motion.div
                className="img-wrapper"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img src="/profile.jpeg" alt="Anusha Inamdar" />
                <div className="img-glow" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* ── ABOUT SECTION ── */}
      <section id="about" className="about-section">
        <div className="about-name-row">
          <motion.h2
            className="about-scroll-name"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="about-me-tag"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
        </div>

        <motion.div
          className="about-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />

        <div className="about-body">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <blockquote className="about-quote">
              "Words don't just fill pages — they shape emotions, build trust, and influence decisions."
            </blockquote>
            <p className="about-para">
              I am an SEO Content Writer specializing in wellness, lifestyle, logistics, and brand storytelling,
              creating research-driven content that balances search engine performance with meaningful human connection.
            </p>
            <p className="about-para">
              My work focuses on building high-ranking, search-optimized content that not only improves organic
              visibility but also strengthens brand credibility and audience engagement. I transform complex topics
              into clear, valuable, and reader-friendly experiences that help brands communicate with authenticity and impact.
            </p>
            <p className="about-para">
              By blending SEO strategy, content psychology, and storytelling, I create content that ranks on search
              engines, attracts the right audience, and converts information into trust and action.
            </p>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          >
            <div className="about-card">
              <span className="about-card-label">SEO Content Highlights</span>
              <ul className="about-list">
                <li>610+ SEO-optimized blogs, service pages, and product descriptions published</li>
                <li>Content across logistics, wellness, lifestyle, and e-commerce industries</li>
                <li>Pages gaining Google visibility within 30–90 days for targeted keywords</li>
                <li>Skilled in keyword research, search intent optimization, and on-page SEO strategy</li>
                <li>SEO-optimized product descriptions driving better discoverability</li>
              </ul>
            </div>
            <div className="about-card">
              <span className="about-card-label">My work helps brands</span>
              <ul className="about-list">
                <li>Improve organic search rankings</li>
                <li>Increase website visibility</li>
                <li>Build reader trust and brand authority</li>
                <li>Turn complex information into engaging, actionable content</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section id="work" className="services-section">
        <div className="services-heading-wrap">
          <motion.span
            className="services-ghost"
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            SERVICES
          </motion.span>
        </div>

        <div className="services-panels">
          {[
            { num: "1", color: "#1e3a5f", label: "SEO Content Writing", desc: "Blogs, articles, and long-form content that rank and engage", img: "/s1.webp" },
            { num: "2", color: "#b5a08a", label: "Website Content", desc: "SEO-friendly service pages with clear, purposeful messaging", img: "/s2.jpg" },
            { num: "3", color: "#6b7c4e", label: "Product Descriptions", desc: "Optimized product and category content for better visibility", img: "/s5.webp" },
            { num: "4", color: "#c0473a", label: "Brand Storytelling", desc: "Authentic brand narratives that build trust and connection", img: "/s3.jpg" },
            { num: "5", color: "#3b5fa0", label: "Technical Content", desc: "Simple, structured content for complex topics and processes", img: "/s7.webp" },
            { num: "6", color: "#7a6a52", label: "Wellness Writing", desc: "Research-driven, reader-friendly health and lifestyle content", img: "/s4.jpg" },
            { num: "7", color: "#2e4a3e", label: "Content Optimization", desc: "SEO improvement, editing, and content refinement", img: "/s6.webp" },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              className="service-panel"
              style={{ background: item.color }}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              whileHover={{ y: -10 }}
            >
              <img src={item.img} alt={item.label} className="service-panel-img-slot" />
              <div className="service-panel-body">
                <p className="service-panel-label">{item.label}</p>
                <p className="service-panel-desc">{item.desc}</p>
              </div>
              <span className="service-panel-num">{item.num}</span>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ── EDUCATION SECTION ── */}
      <section id="education" className="edu-section">
        <div className="edu-timeline-grid">
          <motion.div
            className="edu-column"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="edu-column-title">Education</h2>
            <div className="edu-line-list">
              {[
                {
                  date: "2015 - 2018",
                  title: "Bachelor of Commerce",
                  place: "Jain College of BCom, BBA & BCA",
                  desc: "Graduated with a strong foundation in commerce, business studies, and practical management concepts.",
                },
                {
                  date: "Certification",
                  title: "Digital Marketing Certification",
                  place: "VIOM Institute of Digital Marketing",
                  desc: "Completed training in digital marketing fundamentals, content strategy, and online branding.",
                },
              ].map((item, i) => (
                <motion.article
                  className="edu-timeline-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                >
                  <span className="edu-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p className="edu-place">{item.place}</p>
                  <p>{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="edu-column"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h2 className="edu-column-title">Training Focused On</h2>
            <div className="edu-line-list">
              {[
                "SEO fundamentals",
                "Keyword research strategies",
                "Content marketing",
                "Social Media Marketing",
                "Online Reputation Marketing (ORM)",
                "Digital branding and online visibility",
              ].map((item, i) => (
                <motion.article
                  className="edu-timeline-card edu-topic-card"
                  key={item}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                >
                  <span className="edu-date">Focus {String(i + 1).padStart(2, "0")}</span>
                  <h3>{item}</h3>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STRENGTHS SECTION ── */}
      <section id="strengths" className="strengths-section">
        <div className="strengths-heading-wrap">
          <motion.h2
            className="strengths-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            My Strength Areas
          </motion.h2>
          <motion.p
            className="strengths-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            Skills and qualities I bring to every piece of content
          </motion.p>
        </div>

        <div className="strengths-timeline-grid">
          {[
            {
              heading: "SEO & Content Strategy",
              items: [
                "SEO-optimized content writing",
                "Keyword research and search intent optimization",
                "Content structure planning for ranking and readability",
                "Blog writing and long-form informational content",
              ],
            },
            {
              heading: "Writing Specialties",
              items: [
                "Technical blogs",
                "Brand storytelling and product narratives",
                "Editing, proofreading, and content refinement",
                "Research-driven writing approach",
              ],
            },
            {
              heading: "Professional Strengths",
              items: [
                "Adaptable tone for diverse industries and audiences",
                "Strong attention to detail",
                "Clear and thoughtful communication",
                "Quick learning and adaptability",
                "Openness to feedback and continuous improvement",
              ],
            },
          ].map((column, columnIndex) => (
            <motion.div
              className="strength-column"
              key={column.heading}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: columnIndex * 0.12 }}
            >
              <h3 className="strength-column-title">{column.heading}</h3>
              <div className="strength-line-list">
                {column.items.map((item, itemIndex) => (
                  <motion.article
                    className="strength-timeline-card"
                    key={item}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: itemIndex * 0.06 }}
                  >
                    <span className="strength-date">Strength {String(itemIndex + 1).padStart(2, "0")}</span>
                    <h4>{item}</h4>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WORK EXPERIENCE SECTION ── */}
      <section id="experience" className="experience-section">
        <motion.div
          className="experience-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="experience-heading">
            <span className="experience-kicker">Work Experience</span>
            <h2>SEO Content Writer</h2>
          </div>

          <div className="experience-body">
            <div className="experience-company">
              <span className="experience-company-mark">
                <img src="/technomind_solutions_logo.jpeg" alt="TechnoMind IT Solutions logo" />
              </span>
              <div>
                <h3>TMITS</h3>
                <p>Jan 2025 - Present</p>
              </div>
            </div>

            <div className="experience-meta">
              <div>
                <span>Role</span>
                <strong>SEO Content Writer</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>SEO, Research & Brand Content</strong>
              </div>
              <div>
                <span>Output</span>
                <strong>610+ Optimized Pages</strong>
              </div>
            </div>

            <div className="experience-copy">
              <p>
                As an SEO Content Writer at TMITS, I work on diverse content projects that require creativity,
                responsibility, and a clear understanding of reader intent. My role focuses on crafting original,
                well-researched content aligned with brand goals while keeping the end reader's needs in mind.
              </p>
            </div>
          </div>

          <div className="experience-contributions">
            <h3>Key Contributions</h3>
            <div className="experience-contribution-grid">
              {[
                "610+ SEO-optimized articles, blogs, and service pages to boost engagement and visibility",
                "Enhanced organic traffic with strategic keyword-focused content planning",
                "Designed content structure strategies for better readability and audience retention",
                "Created brand-aligned narratives across multiple platforms and audiences",
                "Simplified technical and operational topics for clarity and broader understanding",
              ].map((item, i) => (
                <motion.article
                  className="experience-contribution-card"
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── TOOLS SECTION ── */}
      <section id="tools" className="tools-section">
        <div className="tools-shell">
          <motion.div
            className="tools-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Tools & Platforms</span>
            <h2>Research, writing, and optimization stack</h2>
          </motion.div>

          <div className="tools-grid">
            {[
              {
                title: "SEO & Content Research Tools",
                tools: [
                  { name: "SEMrush", icon: "/semrush-icon.webp", desc: "Keyword research, competitor analysis, SEO content planning" },
                  { name: "Ubersuggest", icon: "/ubersuggest.png", desc: "Keyword discovery and content topic research" },
                  { name: "Google Keyword Planner", icon: "/GoogleKeyword.png", desc: "Search volume and keyword trend analysis" },
                ],
              },
              {
                title: "Content & Writing Tools",
                tools: [
                  { name: "Google Docs", icon: "/google-docs-icon-logo-symbol-free-png.webp", desc: "Content drafting and collaboration" },
                  { name: "Grammarly", icon: "/grammely.png", desc: "Editing, grammar, and clarity enhancement" },
                ],
              },
            ].map((group, groupIndex) => (
              <motion.div
                className="tools-group"
                key={group.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: groupIndex * 0.12 }}
              >
                <h3>{group.title}</h3>
                <div className="tools-list">
                  {group.tools.map((tool, i) => (
                    <motion.article
                      className="tool-card"
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.45, delay: i * 0.06 }}
                    >
                      <span className="tool-card-icon">
                        <img src={tool.icon} alt={`${tool.name} logo`} />
                      </span>
                      <div>
                        <h4>{tool.name}</h4>
                        <p>{tool.desc}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── PROJECTS SECTION ── */}

      {/* ── PROJECTS SECTION ── */}
      {/* ── PROJECTS SECTION (REDESIGN) ── */}
      <section id="projects" className="projects-redesign-section">
        <div className="projects-redesign-shell">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              className="projects-redesign-split"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* LEFT COLUMN */}
              <div className="projects-redesign-left">
                {/* TOP PILLS */}
                <div className="projects-redesign-top-pills">
                  {projects.map((project, index) => (
                    <button
                      key={project.number}
                      type="button"
                      className={`redesign-pill ${activeProject === index ? "redesign-pill--active" : ""}`}
                      onClick={() => setActiveProject(index)}
                    >
                      Project {parseInt(project.number)}
                    </button>
                  ))}
                </div>

                <h2 className="projects-redesign-title">
                  PROJECT {parseInt(projects[activeProject].number)} :<br />
                  {projects[activeProject].title.toLowerCase()}.
                </h2>
                <p className="projects-redesign-desc">
                  {projects[activeProject].desc}
                </p>

                <div className="projects-redesign-reason-box">
                  <div className="reason-content">
                    <h4>what problem was I solving?</h4>
                    <p>{projects[activeProject].reason}</p>
                  </div>
                  {/* Faux lightbulb icon replacing the reason icon */}
                  <div className="reason-icon-wrapper">
                    <div className="reason-icon">💡</div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="projects-redesign-right">
                <div className="projects-redesign-links-card">
                  <h3 className="links-card-title">Published Work & SEO Content</h3>
                  {projects[activeProject].groups.map((group, idx) => (
                    <div key={idx} className="links-card-group">
                      <h4>{group.label}</h4>
                      <ul>
                        {group.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.url} target="_blank" rel="noreferrer">
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      {/* ── REDESIGNED CONTACT SECTION ── */}
      <section id="contact" className="contact-redesign-section">
        <div className="contact-quad-container">
          {/* Top Left */}
          <motion.div
            className="contact-quad-tl"
            initial={{ opacity: 0, x: -50, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="contact-quad-title">READY TO WORK TOGETHER?</h2>
          </motion.div>

          {/* Top Right */}
          <motion.div
            className="contact-quad-tr"
            initial={{ opacity: 0, x: 50, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h3 className="contact-quad-cta">
              Let’s create work that truly makes an impact - Reach out today
            </h3>
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            className="contact-quad-bl"
            initial={{ opacity: 0, x: -50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <p className="contact-quad-desc">
              If my work aligns with your vision, I would love to collaborate and create content that ranks, informs, and builds meaningful connections.
            </p>
            <p className="contact-quad-desc">
              From logistics processes and technical insights to wellness storytelling, I focus on writing that serves both brands and people with clarity, strategy, and purpose.
            </p>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            className="contact-quad-br"
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="contact-quad-info">
              <a href="mailto:anuinamdar.ai@gmail.com" className="quad-link">
                <span>Email Id -</span> anuinamdar.ai@gmail.com
              </a>
              <a href="tel:9945840866" className="quad-link">
                <span>Mobile No: -</span> 9945840866
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
