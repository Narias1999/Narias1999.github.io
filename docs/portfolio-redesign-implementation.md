# Portfolio Redesign — Full Implementation Guide

## Context & Constraints

This document is a complete implementation spec for the Nicolás Arias portfolio redesign at `Narias1999.github.io`. Read it fully before touching any file. The agent building this must follow all constraints.

**Stack**: Vanilla HTML + CSS + JS only. No framework, no build step, no npm packages installed. GitHub Pages compatible (static files).  
**New dependency**: GSAP 3 + ScrollTrigger via CDN — added as `<script>` tags.  
**Do not**: Add React, Vue, Astro, webpack, Vite, or any framework.  
**Do not**: Create new files beyond what is specified here.  
**Files to modify**: `index.html`, `css/main.css`, `js/index.js` — these three files only.

---

## Section Order (after redesign)

```
Nav → Hero → About → Work/Experience (NEW) → Skills → Clients (marquee) → Projects → Contact → Footer
```

---

## Design Tokens

All colors, spacing, and type decisions are captured here. Implement using CSS custom properties on `:root`.

```css
:root {
  /* Colors */
  --color-bg:           #fdf8f3;   /* warm off-white — main background */
  --color-bg-alt:       #f5ede3;   /* slightly warmer — alternating sections */
  --color-bg-card:      #ffffff;   /* card backgrounds */
  --color-accent:       #c4623a;   /* terracotta — primary accent */
  --color-accent-light: #e07a5f;   /* lighter terracotta — hover states, secondary */
  --color-accent-pale:  #f4b8a0;   /* pale peach — dots, borders, subtle highlights */
  --color-accent-dark:  #8b4535;   /* dark terracotta — text on light accent bg */
  --color-text-primary: #1e120c;   /* near-black warm — headings */
  --color-text-body:    #4a3728;   /* warm dark brown — body text */
  --color-text-muted:   #7a6055;   /* warm grey-brown — subtitles, secondary text */
  --color-border:       #e8d9ce;   /* warm light border */
  --color-shadow:       rgba(196, 98, 58, 0.1); /* terracotta-tinted shadow */

  /* Typography */
  --font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Spacing */
  --section-padding: 6rem 0;
  --container-max:   1200px;
  --radius-card:     16px;
  --radius-sm:       8px;
  --radius-pill:     24px;
}
```

---

## 1. `index.html` — Full Specification

### 1.1 `<head>` — Replace existing font + deps block

Remove the current Inter font link and add Plus Jakarta Sans. Add GSAP + ScrollTrigger scripts at the bottom of `<body>` (before `js/index.js`). Add DevIcons CDN for skills icons.

**In `<head>`, replace:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**With:**
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css">
```

**At bottom of `<body>`, before `<script src="js/index.js">`, add:**
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

---

### 1.2 Navigation — Replace existing `<nav>`

The navbar becomes light/warm instead of dark. Links are now dark text. Hamburger bars become dark.

```html
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-container">
    <div class="nav-logo">
      <img src="assets/logo.svg" alt="Nicolás Arias Logo" width="80">
    </div>
    <ul class="nav-menu" role="menubar">
      <li role="none"><a href="#home"       class="nav-link" role="menuitem">Home</a></li>
      <li role="none"><a href="#about"      class="nav-link" role="menuitem">About</a></li>
      <li role="none"><a href="#experience" class="nav-link" role="menuitem">Experience</a></li>
      <li role="none"><a href="#skills"     class="nav-link" role="menuitem">Skills</a></li>
      <li role="none"><a href="#projects"   class="nav-link" role="menuitem">Projects</a></li>
      <li role="none"><a href="#contact"    class="nav-link" role="menuitem">Contact</a></li>
    </ul>
    <div class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-menu">
      <span class="bar" aria-hidden="true"></span>
      <span class="bar" aria-hidden="true"></span>
      <span class="bar" aria-hidden="true"></span>
    </div>
  </div>
</nav>
```

Note: `#clients` is removed from nav (clients is now an ambient marquee section, not a primary nav destination).

---

### 1.3 Hero Section — Replace existing `<section id="home">`

Key changes:
- Warm light background (no more dark purple gradient)
- Decorative circles/dots for parallax depth
- Role cycler replacing static subtitle
- Profile photo keeps circular style with warm treatment

```html
<section id="home" class="hero" aria-labelledby="hero-title">
  <!-- Decorative parallax dots -->
  <div class="hero-dots" aria-hidden="true">
    <span class="dot dot-1"></span>
    <span class="dot dot-2"></span>
    <span class="dot dot-3"></span>
    <span class="dot dot-4"></span>
    <span class="dot dot-5"></span>
    <span class="dot dot-6"></span>
  </div>

  <div class="hero-content">
    <div class="hero-text">
      <h1 id="hero-title" class="hero-title">Nicolás Arias</h1>
      <p class="hero-role">
        <span class="role-text">Senior Software Engineer</span>
      </p>
      <p class="hero-description">
        I build fast, scalable products — from frontend interfaces to backend systems — and help engineering teams ship with confidence.
      </p>
      <div class="hero-buttons">
        <a href="#projects"  class="btn btn-primary"   aria-label="View my projects and work">View My Work</a>
        <a href="#contact"   class="btn btn-secondary" aria-label="Get in touch with me">Get In Touch</a>
        <a href="assets/cv-NicolasArias.pdf" target="_blank" class="btn btn-cv" aria-label="Download my CV (opens in new tab)">
          <i class="fas fa-download" aria-hidden="true"></i>
          Download CV
        </a>
      </div>
    </div>

    <div class="hero-image">
      <div class="hero-image-wrapper">
        <img src="assets/profile.jpeg" alt="Nicolás Arias - Software Engineer" class="profile-image">
      </div>
    </div>
  </div>
</section>
```

---

### 1.4 About Section — Light update only

Keep all content. Only change: add `reveal-section` class and remove `#f8f9fa` background (handled in CSS now).

```html
<section id="about" class="about reveal-section" aria-labelledby="about-title">
  <!-- all inner content unchanged -->
</section>
```

---

### 1.5 Work/Experience Section — NEW, insert after About

This section is brand new. Insert it **between About and Skills** in the HTML.

**Content note**: The placeholder dates/roles below must be replaced by Nicolás with accurate information before shipping. Each `<!-- TODO -->` comment marks a field to fill in.

```html
<section id="experience" class="experience reveal-section" aria-labelledby="experience-title">
  <div class="container">
    <div class="section-header">
      <h2 id="experience-title" class="section-title">Work Experience</h2>
      <p class="section-subtitle">Companies and teams I've had the pleasure of building with</p>
    </div>

    <div class="experience-grid">

      <article class="experience-card">
        <div class="exp-header">
          <div class="exp-logo">
            <img src="assets/clients/nubrakes.svg" alt="Nubrakes" loading="lazy">
          </div>
          <div class="exp-meta">
            <h3 class="exp-role"><!-- TODO: e.g. Senior Software Engineer --></h3>
            <a href="https://nubrakes.com/" class="exp-company" target="_blank" rel="noopener">Nubrakes</a>
            <span class="exp-date"><!-- TODO: e.g. 2022 – Present --></span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li><!-- TODO: key achievement or responsibility --></li>
          <li><!-- TODO: key achievement or responsibility --></li>
          <li><!-- TODO: key achievement or responsibility --></li>
        </ul>
      </article>

      <article class="experience-card">
        <div class="exp-header">
          <div class="exp-logo">
            <img src="assets/clients/3D_Publishing_Icon.png" alt="Publishing.com" loading="lazy">
          </div>
          <div class="exp-meta">
            <h3 class="exp-role"><!-- TODO: e.g. Tech Lead --></h3>
            <a href="https://www.publishing.com/" class="exp-company" target="_blank" rel="noopener">Publishing.com</a>
            <span class="exp-date"><!-- TODO: e.g. 2021 – 2022 --></span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li><!-- TODO: key achievement or responsibility --></li>
          <li><!-- TODO: key achievement or responsibility --></li>
        </ul>
      </article>

      <article class="experience-card">
        <div class="exp-header">
          <div class="exp-logo">
            <img src="assets/clients/axel.svg" alt="HelloAxel" loading="lazy">
          </div>
          <div class="exp-meta">
            <h3 class="exp-role"><!-- TODO --></h3>
            <a href="https://helloaxel.com/" class="exp-company" target="_blank" rel="noopener">HelloAxel</a>
            <span class="exp-date"><!-- TODO --></span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li><!-- TODO --></li>
          <li><!-- TODO --></li>
        </ul>
      </article>

      <article class="experience-card">
        <div class="exp-header">
          <div class="exp-logo">
            <img src="assets/clients/voice123.svg" alt="Voice123" loading="lazy">
          </div>
          <div class="exp-meta">
            <h3 class="exp-role"><!-- TODO --></h3>
            <a href="https://voice123.com/" class="exp-company" target="_blank" rel="noopener">Voice123</a>
            <span class="exp-date"><!-- TODO --></span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li><!-- TODO --></li>
          <li><!-- TODO --></li>
        </ul>
      </article>

      <article class="experience-card">
        <div class="exp-header">
          <div class="exp-logo">
            <img src="assets/clients/commercial_cademy.svg" alt="Commercial Academy" loading="lazy">
          </div>
          <div class="exp-meta">
            <h3 class="exp-role"><!-- TODO --></h3>
            <a href="https://beta.commercialhub.com/" class="exp-company" target="_blank" rel="noopener">Commercial Academy</a>
            <span class="exp-date"><!-- TODO --></span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li><!-- TODO --></li>
          <li><!-- TODO --></li>
        </ul>
      </article>

      <article class="experience-card">
        <div class="exp-header">
          <div class="exp-logo">
            <img src="assets/clients/bluetread.svg" alt="Bluetread" loading="lazy">
          </div>
          <div class="exp-meta">
            <h3 class="exp-role"><!-- TODO --></h3>
            <a href="https://www.bluetread.com/" class="exp-company" target="_blank" rel="noopener">Bluetread</a>
            <span class="exp-date"><!-- TODO --></span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li><!-- TODO --></li>
          <li><!-- TODO --></li>
        </ul>
      </article>

      <article class="experience-card">
        <div class="exp-header">
          <div class="exp-logo">
            <img src="assets/clients/bismark.png" alt="Bismark IOT" loading="lazy">
          </div>
          <div class="exp-meta">
            <h3 class="exp-role"><!-- TODO --></h3>
            <a href="https://bismark.net.co/" class="exp-company" target="_blank" rel="noopener">Bismark IOT</a>
            <span class="exp-date"><!-- TODO --></span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li><!-- TODO --></li>
        </ul>
      </article>

      <article class="experience-card">
        <div class="exp-header">
          <div class="exp-logo">
            <img src="assets/clients/beon_blue.webp" alt="Beon.tech" loading="lazy">
          </div>
          <div class="exp-meta">
            <h3 class="exp-role"><!-- TODO --></h3>
            <a href="http://beon.tech/" class="exp-company" target="_blank" rel="noopener">Beon.tech</a>
            <span class="exp-date"><!-- TODO --></span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li><!-- TODO --></li>
        </ul>
      </article>

    </div>
  </div>
</section>
```

---

### 1.6 Skills Section — Full overhaul

Replace the entire `<section id="skills">` with this icon-grid layout. Uses DevIcons classes. Add `reveal-section` class.

```html
<section id="skills" class="skills reveal-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Skills & Technologies</h2>
      <p class="section-subtitle">Tools I reach for every day</p>
    </div>

    <div class="skills-categories">

      <div class="skills-category-block">
        <h3 class="skills-category-label">Frontend</h3>
        <div class="skills-icon-grid">
          <div class="skill-icon-item">
            <i class="devicon-react-original colored"></i>
            <span>React</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-nextjs-plain"></i>
            <span>Next.js</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-vuejs-plain colored"></i>
            <span>Vue.js</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-nuxtjs-plain colored"></i>
            <span>Nuxt.js</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-typescript-plain colored"></i>
            <span>TypeScript</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-tailwindcss-plain colored"></i>
            <span>Tailwind</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-redux-original colored"></i>
            <span>Redux</span>
          </div>
        </div>
      </div>

      <div class="skills-category-block">
        <h3 class="skills-category-label">Backend</h3>
        <div class="skills-icon-grid">
          <div class="skill-icon-item">
            <i class="devicon-nodejs-plain colored"></i>
            <span>Node.js</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-nestjs-plain colored"></i>
            <span>NestJS</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-express-original"></i>
            <span>Express</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-graphql-plain colored"></i>
            <span>GraphQL</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-postgresql-plain colored"></i>
            <span>PostgreSQL</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-mongodb-plain colored"></i>
            <span>MongoDB</span>
          </div>
        </div>
      </div>

      <div class="skills-category-block">
        <h3 class="skills-category-label">Tools & DevOps</h3>
        <div class="skills-icon-grid">
          <div class="skill-icon-item">
            <i class="devicon-docker-plain colored"></i>
            <span>Docker</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-kubernetes-plain colored"></i>
            <span>Kubernetes</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-git-plain colored"></i>
            <span>Git</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-github-original"></i>
            <span>GitHub</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-gitlab-plain colored"></i>
            <span>GitLab CI</span>
          </div>
        </div>
      </div>

      <div class="skills-category-block">
        <h3 class="skills-category-label">AI Integration</h3>
        <div class="skills-tag-grid">
          <span class="skill-tag">OpenAI API</span>
          <span class="skill-tag">Google Gemini</span>
          <span class="skill-tag">LLM Prompting</span>
          <span class="skill-tag">Embeddings</span>
          <span class="skill-tag">Vector DBs</span>
          <span class="skill-tag">AI Features</span>
        </div>
      </div>

    </div>
  </div>
</section>
```

---

### 1.7 Clients Section — Replace with CSS marquee

Replace the entire `<section id="clients">` with this marquee version. Remove the `<ul>` grid, replace with the scrolling track.

```html
<section id="clients" class="clients" aria-label="Companies I've worked with">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Companies I've Worked With</h2>
      <p class="section-subtitle">Trusted by innovative companies across different industries</p>
    </div>
  </div>

  <div class="marquee-wrapper" aria-hidden="true">
    <div class="marquee-track">
      <!-- First set -->
      <div class="marquee-item"><img src="assets/clients/nubrakes.svg"            alt="Nubrakes"           loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/3D_Publishing_Icon.png"  alt="Publishing.com"     loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/axel.svg"                alt="HelloAxel"          loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/commercial_cademy.svg"   alt="Commercial Academy" loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/voice123.svg"            alt="Voice123"           loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/bluetread.svg"           alt="Bluetread"          loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/bismark.png"             alt="Bismark IOT"        loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/beon_blue.webp"          alt="Beon.tech"          loading="lazy"></div>
      <!-- Duplicate set for seamless loop -->
      <div class="marquee-item"><img src="assets/clients/nubrakes.svg"            alt="" loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/3D_Publishing_Icon.png"  alt="" loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/axel.svg"                alt="" loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/commercial_cademy.svg"   alt="" loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/voice123.svg"            alt="" loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/bluetread.svg"           alt="" loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/bismark.png"             alt="" loading="lazy"></div>
      <div class="marquee-item"><img src="assets/clients/beon_blue.webp"          alt="" loading="lazy"></div>
    </div>
  </div>
</section>
```

---

### 1.8 Projects Section — Style update only

Keep all existing project card HTML exactly as-is. Add `reveal-section` class to the `<section>` tag:

```html
<section id="projects" class="projects reveal-section">
```

No other HTML changes to projects.

---

### 1.9 Contact Section — Add LinkedIn

Keep existing content. Add LinkedIn to the social links and change `.social-links` wrapper to allow it. Insert before the Twitter link:

```html
<a href="https://www.linkedin.com/in/nmariasdev/" target="_blank" class="social-link" aria-label="LinkedIn profile (opens in new tab)">
  <i class="fab fa-linkedin-in"></i>
</a>
```

Add `reveal-section` class to the `<section>` tag.

---

### 1.10 Footer — Update year

Change `© 2024` to `© 2025`. Apply warm background via CSS (no HTML change needed beyond the CSS rewrite).

---

## 2. `css/main.css` — Full Rewrite

Replace the entire content of `css/main.css` with the following. This is a complete replacement, not a patch.

```css
/* ============================================================
   RESET + TOKENS
   ============================================================ */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-bg:           #fdf8f3;
  --color-bg-alt:       #f5ede3;
  --color-bg-card:      #ffffff;
  --color-accent:       #c4623a;
  --color-accent-light: #e07a5f;
  --color-accent-pale:  #f4b8a0;
  --color-accent-dark:  #8b4535;
  --color-text-primary: #1e120c;
  --color-text-body:    #4a3728;
  --color-text-muted:   #7a6055;
  --color-border:       #e8d9ce;
  --color-shadow:       rgba(196, 98, 58, 0.12);
  --font-family:        'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --radius-card:        16px;
  --radius-sm:          8px;
  --radius-pill:        24px;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-family);
  line-height: 1.6;
  color: var(--color-text-body);
  background-color: var(--color-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

p { margin-bottom: 1rem; }

a {
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

/* ============================================================
   ACCESSIBILITY
   ============================================================ */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-accent);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: var(--radius-sm);
  z-index: 1001;
  transition: top 0.3s;
}
.skip-link:focus { top: 6px; }

*:focus { outline: 2px solid var(--color-accent); outline-offset: 2px; }
*:focus:not(:focus-visible) { outline: none; }

/* ============================================================
   BUTTONS
   ============================================================ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.95rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  font-family: var(--font-family);
}

.btn-primary {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
}
.btn-primary:hover {
  background: var(--color-accent-dark);
  border-color: var(--color-accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--color-shadow);
}

.btn-secondary {
  background: transparent;
  color: var(--color-accent);
  border-color: var(--color-accent);
}
.btn-secondary:hover {
  background: var(--color-accent);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--color-shadow);
}

.btn-cv {
  background: var(--color-bg-alt);
  color: var(--color-text-body);
  border-color: var(--color-border);
}
.btn-cv:hover {
  background: var(--color-border);
  transform: translateY(-2px);
}

/* ============================================================
   NAVIGATION
   ============================================================ */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(253, 248, 243, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(253, 248, 243, 0.97);
  border-bottom-color: var(--color-border);
  box-shadow: 0 2px 20px var(--color-shadow);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo img { height: 40px; }

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-text-body);
  position: relative;
}
.nav-link:hover { color: var(--color-accent); }

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}
.nav-link:hover::after { width: 100%; }

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}
.bar {
  width: 25px;
  height: 2px;
  background: var(--color-text-primary);
  margin: 4px 0;
  transition: 0.3s;
  border-radius: 2px;
}

/* ============================================================
   HERO
   ============================================================ */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: var(--color-bg);
  overflow: hidden;
  padding-top: 80px;
}

/* Decorative dots */
.hero-dots {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.dot {
  position: absolute;
  border-radius: 50%;
  background: var(--color-accent-pale);
}

.dot-1 { width: 64px;  height: 64px;  top: 15%;  right: 8%;   background: var(--color-accent-pale); opacity: 0.7; }
.dot-2 { width: 24px;  height: 24px;  top: 30%;  right: 18%;  background: var(--color-accent);      opacity: 0.5; }
.dot-3 { width: 40px;  height: 40px;  top: 60%;  right: 5%;   background: var(--color-accent-light); opacity: 0.4; }
.dot-4 { width: 16px;  height: 16px;  top: 20%;  left: 5%;    background: var(--color-accent);      opacity: 0.3; }
.dot-5 { width: 80px;  height: 80px;  bottom: 15%; right: 30%; background: var(--color-accent-pale); opacity: 0.3; }
.dot-6 { width: 12px;  height: 12px;  bottom: 30%; left: 8%;  background: var(--color-accent-light); opacity: 0.5; }

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
}

.hero-title {
  font-size: 3.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.hero-role {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 1.25rem;
  min-height: 2rem;
  overflow: hidden;
}

.role-text {
  display: inline-block;
  will-change: transform, opacity;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  line-height: 1.7;
  max-width: 480px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  will-change: transform;
}

.hero-image-wrapper {
  position: relative;
}

.profile-image {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-accent-pale);
  box-shadow:
    0 0 0 12px rgba(244, 184, 160, 0.15),
    0 24px 48px var(--color-shadow);
}

/* ============================================================
   SECTION SHARED
   ============================================================ */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  max-width: 540px;
  margin: 0 auto;
}

/* Scroll reveal default state — set by JS, but provide fallback */
.reveal-section {
  opacity: 1; /* JS will set to 0 before animating */
}

/* ============================================================
   ABOUT
   ============================================================ */
.about {
  padding: var(--section-padding, 6rem 0);
  background: var(--color-bg-alt);
}

.about-content { max-width: 800px; margin: 0 auto; }

.about-text p {
  font-size: 1.1rem;
  color: var(--color-text-body);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

.stat {
  text-align: center;
  padding: 2rem 1rem;
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 16px var(--color-shadow);
  transition: transform 0.3s ease;
}
.stat:hover { transform: translateY(-4px); }

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

/* ============================================================
   WORK / EXPERIENCE
   ============================================================ */
.experience {
  padding: 6rem 0;
  background: var(--color-bg);
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}

.experience-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 1.75rem;
  box-shadow: 0 4px 16px var(--color-shadow);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px var(--color-shadow);
}

.exp-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.exp-logo {
  width: 56px;
  height: 56px;
  min-width: 56px;
  background: var(--color-bg-alt);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 1px solid var(--color-border);
}
.exp-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.exp-meta { flex: 1; }

.exp-role {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.15rem;
}

.exp-company {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
}
.exp-company:hover { color: var(--color-accent-dark); }

.exp-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.exp-bullets {
  list-style: none;
  padding: 0;
  border-top: 1px solid var(--color-border);
  padding-top: 1rem;
}

.exp-bullets li {
  font-size: 0.9rem;
  color: var(--color-text-body);
  line-height: 1.6;
  padding: 0.3rem 0 0.3rem 1.25rem;
  position: relative;
}
.exp-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent-pale);
}

/* ============================================================
   SKILLS
   ============================================================ */
.skills {
  padding: 6rem 0;
  background: var(--color-bg-alt);
}

.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skills-category-block {}

.skills-category-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-border);
}

.skills-icon-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.skill-icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 1rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  min-width: 90px;
  transition: all 0.25s ease;
  cursor: default;
}
.skill-icon-item:hover {
  border-color: var(--color-accent-pale);
  box-shadow: 0 6px 20px var(--color-shadow);
  transform: translateY(-3px);
}

.skill-icon-item i {
  font-size: 2.5rem;
  line-height: 1;
  color: var(--color-text-body); /* fallback for non-colored icons */
}

/* Force dark color for icons that don't have a colored variant */
.devicon-nextjs-plain,
.devicon-express-original,
.devicon-github-original {
  color: var(--color-text-primary) !important;
}

.skill-icon-item span {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-align: center;
  white-space: nowrap;
}

/* AI tags (no icon available) */
.skills-tag-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-body);
  transition: all 0.25s ease;
}
.skill-tag:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  background: rgba(196, 98, 58, 0.05);
}

/* ============================================================
   CLIENTS MARQUEE
   ============================================================ */
.clients {
  padding: 4rem 0;
  background: var(--color-bg);
  overflow: hidden;
}

.marquee-wrapper {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  margin-top: 2rem;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 3rem;
  align-items: center;
  animation: marquee 28s linear infinite;
  padding: 1rem 0;
}

.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  min-width: 120px;
  flex-shrink: 0;
}

.marquee-item img {
  max-height: 40px;
  max-width: 120px;
  width: auto;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.5);
  transition: filter 0.3s ease;
}
.marquee-wrapper:hover .marquee-item img {
  filter: grayscale(0%) opacity(1);
}

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ============================================================
   PROJECTS
   ============================================================ */
.projects {
  padding: 6rem 0;
  background: var(--color-bg-alt);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.75rem;
  margin-bottom: 3rem;
}

.project-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 16px var(--color-shadow);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px var(--color-shadow);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.project-card:hover .project-image img { transform: scale(1.05); }

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(196, 98, 58, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.project-card:hover .project-overlay { opacity: 1; }

.project-links { display: flex; gap: 1rem; }

.project-link {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  font-size: 1.1rem;
  transition: all 0.25s ease;
}
.project-link:hover {
  transform: scale(1.1);
  background: var(--color-accent-dark);
  color: white;
}

.project-content { padding: 1.5rem; }

.project-content h3 {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
}

.project-content p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.tech-tag {
  background: var(--color-bg-alt);
  color: var(--color-text-body);
  border: 1px solid var(--color-border);
  padding: 0.2rem 0.7rem;
  border-radius: var(--radius-pill);
  font-size: 0.78rem;
  font-weight: 600;
}

.projects-cta { text-align: center; }

/* ============================================================
   CONTACT
   ============================================================ */
.contact {
  padding: 6rem 0;
  background: var(--color-bg);
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  text-align: left;
}

.contact-item i {
  font-size: 1.4rem;
  color: var(--color-accent);
  width: 36px;
  text-align: center;
  flex-shrink: 0;
}

.contact-item h3 {
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
  color: var(--color-text-primary);
}

.contact-item a,
.contact-item p {
  color: var(--color-text-muted);
  margin: 0;
  font-size: 0.9rem;
}
.contact-item a:hover { color: var(--color-accent); }

.social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-link {
  width: 48px;
  height: 48px;
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.1rem;
  transition: all 0.25s ease;
}
.social-link:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px var(--color-shadow);
}

/* ============================================================
   FOOTER
   ============================================================ */
.footer {
  background: var(--color-text-primary);
  color: rgba(255, 255, 255, 0.7);
  padding: 2.5rem 0;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo p {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  color: white;
}

.footer-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  margin: 0;
}

/* ============================================================
   RESPONSIVE — 768px
   ============================================================ */
@media (max-width: 768px) {
  .hamburger { display: flex; }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 72px;
    flex-direction: column;
    background: var(--color-bg);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px var(--color-shadow);
    padding: 2rem 0;
    border-top: 1px solid var(--color-border);
  }
  .nav-menu.active { left: 0; }

  .hamburger.active .bar:nth-child(2) { opacity: 0; }
  .hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }
  .hero-text { order: 2; }
  .hero-image { order: 1; }

  .hero-title { font-size: 2.5rem; }
  .hero-description { margin: 0 auto 2rem; }

  .hero-buttons {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .btn { width: 100%; max-width: 260px; justify-content: center; }

  .profile-image { width: 240px; height: 240px; }

  .section-title { font-size: 2rem; }

  .about-stats { grid-template-columns: 1fr; }

  .experience-grid { grid-template-columns: 1fr; }

  .skills-icon-grid { gap: 0.75rem; }
  .skill-icon-item { min-width: 76px; padding: 1rem 0.75rem; }
  .skill-icon-item i { font-size: 2rem; }

  .projects-grid { grid-template-columns: 1fr; }

  .contact-info { grid-template-columns: 1fr; }
}

/* ============================================================
   RESPONSIVE — 480px
   ============================================================ */
@media (max-width: 480px) {
  .container { padding: 0 16px; }
  .hero { padding-top: 80px; }
  .hero-title { font-size: 2rem; }
  .section-title { font-size: 1.75rem; }
  .profile-image { width: 200px; height: 200px; }

  .skills-icon-grid { gap: 0.5rem; }
  .skill-icon-item { min-width: 68px; }
}

/* ============================================================
   REDUCED MOTION — disable all animations
   ============================================================ */
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none !important; }
  .dot { transition: none !important; }
  * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}
```

---

## 3. `js/index.js` — Full Rewrite

Replace the entire content of `js/index.js` with the following. This handles: mobile menu, navbar scroll behavior, GSAP init, hero load animation, role cycler, parallax dots, section reveals, and reduced-motion guard.

```js
/* ============================================================
   MOBILE NAVIGATION
   ============================================================ */
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hamburger.click(); }
});

/* ============================================================
   NAVBAR SCROLL STATE
   ============================================================ */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ============================================================
   SMOOTH SCROLL (anchor links)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   LAZY IMAGE FADE-IN
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.4s ease';
    img.addEventListener('load', () => { img.style.opacity = '1'; });
    if (img.complete) img.style.opacity = '1';
  });
});

/* ============================================================
   ROLE CYCLER — independent of GSAP, graceful fallback
   ============================================================ */
const roles = [
  'Senior Software Engineer',
  'Tech Lead',
  'Claude Code Supervisor',
];
let currentRole = 0;
const roleEl = document.querySelector('.role-text');

function cycleRole() {
  currentRole = (currentRole + 1) % roles.length;

  if (window.__gsapReady && !window.__reducedMotion) {
    gsap.to(roleEl, {
      y: -20, opacity: 0, duration: 0.3, ease: 'power2.in',
      onComplete: () => {
        roleEl.textContent = roles[currentRole];
        gsap.fromTo(roleEl,
          { y: 20, opacity: 0 },
          { y: 0,  opacity: 1, duration: 0.35, ease: 'power2.out' }
        );
      }
    });
  } else {
    roleEl.textContent = roles[currentRole];
  }
}

setInterval(cycleRole, 3200);

/* ============================================================
   GSAP ANIMATIONS
   ============================================================ */
window.__reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  if (window.__reducedMotion || typeof gsap === 'undefined') return;

  window.__gsapReady = true;
  gsap.registerPlugin(ScrollTrigger);

  /* --- Hero load animation --- */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .fromTo('.hero-title',
      { y: 50, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.9 }
    )
    .fromTo('.hero-role',
      { y: 30, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.7 },
      '-=0.5'
    )
    .fromTo('.hero-description',
      { y: 24, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.6 },
      '-=0.4'
    )
    .fromTo('.hero-buttons .btn',
      { y: 20, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.5, stagger: 0.12 },
      '-=0.3'
    )
    .fromTo('.profile-image',
      { scale: 0.88, opacity: 0 },
      { scale: 1,    opacity: 1, duration: 0.9, ease: 'power2.out' },
      '-=0.8'
    )
    .fromTo('.dot',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.5'
    );

  /* --- Hero parallax: dots move independently on scroll --- */
  const dotConfigs = [
    { el: '.dot-1', yPercent: -40 },
    { el: '.dot-2', yPercent:  60 },
    { el: '.dot-3', yPercent: -30 },
    { el: '.dot-4', yPercent:  50 },
    { el: '.dot-5', yPercent: -20 },
    { el: '.dot-6', yPercent:  70 },
  ];

  dotConfigs.forEach(({ el, yPercent }) => {
    gsap.to(el, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end:   'bottom top',
        scrub: 1.5,
      },
    });
  });

  /* --- Hero image subtle parallax --- */
  gsap.to('.hero-image', {
    y: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end:   'bottom top',
      scrub: 2,
    },
  });

  /* --- Section reveals --- */
  gsap.utils.toArray('.reveal-section').forEach(section => {
    gsap.fromTo(section,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.85, ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  /* --- Staggered grid items --- */
  const staggerSelectors = [
    { grid: '.experience-grid',  items: '.experience-card' },
    { grid: '.skills-icon-grid', items: '.skill-icon-item' },
    { grid: '.projects-grid',    items: '.project-card'    },
    { grid: '.about-stats',      items: '.stat'            },
  ];

  staggerSelectors.forEach(({ grid, items }) => {
    document.querySelectorAll(grid).forEach(container => {
      gsap.fromTo(container.querySelectorAll(items),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  });
});
```

---

## 4. Checklist Before Shipping

The implementing agent must verify each item:

- [ ] Plus Jakarta Sans loads correctly (check Network tab — no Inter references remain)
- [ ] GSAP + ScrollTrigger scripts load with no console errors
- [ ] DevIcons CSS loads and icons render (check a few: React, Node, Docker)
- [ ] Role cycler animates through all 3 roles on loop
- [ ] Hero dots parallax on scroll (dots move at different speeds)
- [ ] Profile photo has subtle parallax lift on scroll
- [ ] Navbar turns solid (adds `.scrolled` class) after scrolling 60px
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] Clients marquee scrolls continuously, pauses on hover
- [ ] `prefers-reduced-motion` disables GSAP and marquee (test by setting OS accessibility setting or DevTools emulation)
- [ ] All existing sections still present: Hero, About, Experience (NEW), Skills, Clients, Projects, Contact, Footer
- [ ] Experience section TODO placeholders are visible (content to be filled by Nicolás)
- [ ] LinkedIn social link appears in Contact section
- [ ] Nav links work and smooth-scroll to correct sections (including #experience)
- [ ] No broken image paths — all existing asset paths are preserved
- [ ] Footer year reads 2025
- [ ] Page loads under 200ms on local dev server (`npm run dev`)
- [ ] No errors in browser console

---

## 5. Key File Paths (do not move or rename these)

```
index.html                          ← Main HTML (modify)
css/main.css                        ← Styles (full rewrite)
js/index.js                         ← Scripts (full rewrite)
assets/profile.jpeg                 ← Profile photo (unchanged)
assets/logo.svg                     ← Nav logo (unchanged)
assets/cv-NicolasArias.pdf          ← CV download (unchanged)
assets/clients/*.svg|png|webp       ← Client logos (unchanged)
assets/work/*.jpg|webp|png          ← Project images (unchanged)
```

---

## 6. Notes for the Building Agent

1. **Do not install any npm packages**. GSAP and DevIcons are loaded via CDN `<script>` / `<link>` tags only.
2. **Do not create new files** beyond what this doc specifies.
3. The `css/main.css` content above is the **complete file** — overwrite it entirely, do not patch.
4. The `js/index.js` content above is the **complete file** — overwrite it entirely, do not patch.
5. The `index.html` changes are **surgical** — only replace the specific sections described. Do not remove the `<head>` SEO meta tags, structured data script, or skip link.
6. The experience section content (roles, dates, bullets) is intentionally left as `<!-- TODO -->` placeholders. Do not fabricate content.
7. Test by running `npm run dev` (launches Python HTTP server on port 8000).
