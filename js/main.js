// ═══════════════════════════════════════════════════════════
//  PORTFOLIO ENGINE — Renders everything from data.js
//  You should NOT need to edit this file.
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  renderNavbar();
  renderHero();
  renderStats();
  renderAbout();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderCertificates();
  renderContact();
  renderFooter();
  initParticles();
  initScrollReveal();
  initTyping();
  initNavScroll();
  initCounters();
  initSkillBars();
});

/* ─── THEME ─────────────────────────────────────────────── */
function applyTheme() {
  const t = PORTFOLIO.theme;
  const r = document.documentElement.style;
  r.setProperty('--primary', t.primary);
  r.setProperty('--secondary', t.secondary);
  r.setProperty('--accent', t.accent);
  r.setProperty('--bg', t.background);
  r.setProperty('--surface', t.surface);
  r.setProperty('--surface-light', t.surfaceLight);
  r.setProperty('--text', t.text);
  r.setProperty('--text-muted', t.textMuted);
  r.setProperty('--grad1', t.gradient1);
  r.setProperty('--grad2', t.gradient2);
}

/* ─── NAVBAR ────────────────────────────────────────────── */
function renderNavbar() {
  const nav = document.getElementById('navbar');
  nav.innerHTML = `
    <div class="container nav-inner">
      <a href="#hero" class="nav-logo">&lt;<span>${PORTFOLIO.firstName}</span>/&gt;</a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>`;
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('open');
  }));
}

/* ─── HERO ──────────────────────────────────────────────── */
function renderHero() {
  const d = PORTFOLIO;
  document.getElementById('hero').innerHTML = `
    <canvas id="particles-canvas"></canvas>
    <div class="container hero-content">
      <div class="hero-text">
        <span class="greeting">// Hello World, I'm</span>
        <h1>${d.name}</h1>
        <div class="typing-wrapper"><span id="typing-text"></span><span class="typing-cursor"></span></div>
        <p>${d.about.description.substring(0, 180)}...</p>
        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary"><i class="fas fa-rocket"></i> View Projects</a>
          <a href="${d.resumeFile}" class="btn btn-outline" download><i class="fas fa-download"></i> Download CV</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="profile-frame">
          <div class="profile-glow"></div>
          <div class="profile-ring"></div>
          <div class="profile-ring"></div>
          <img src="${d.profileImage}" alt="${d.name}" class="profile-img">
        </div>
      </div>
    </div>
    <div class="hero-socials">
      ${d.socials.map(s => `<a href="${s.url}" target="_blank" aria-label="${s.name}"><i class="${s.icon}"></i></a>`).join('')}
    </div>`;
}

/* ─── STATS ─────────────────────────────────────────────── */
function renderStats() {
  document.getElementById('stats').innerHTML = `
    <div class="container">
      <div class="stats-bar glass-card reveal">
        ${PORTFOLIO.stats.map(s => `
          <div class="stat-item">
            <div class="stat-value"><span class="counter" data-target="${s.value}">0</span>${s.suffix}</div>
            <div class="stat-label">${s.label}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ─── ABOUT ─────────────────────────────────────────────── */
function renderAbout() {
  const a = PORTFOLIO.about;
  document.getElementById('about').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">// About Me</span>
        <h2 class="section-title">Who I Am</h2>
        <p class="section-subtitle">A glimpse into my journey and passions</p>
      </div>
      <div class="about-grid">
        <div class="about-text reveal">
          <p>${a.description}</p>
          <a href="${PORTFOLIO.resumeFile}" class="btn btn-primary" download><i class="fas fa-file-alt"></i> Download Resume</a>
        </div>
        <div class="about-highlights reveal">
          ${a.highlights.map(h => `
            <div class="glass-card highlight-card">
              <i class="${h.icon}"></i>
              <div class="h-label">${h.label}</div>
              <div class="h-value">${h.value}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

/* ─── SKILLS ────────────────────────────────────────────── */
function renderSkills() {
  const s = PORTFOLIO.skills;
  document.getElementById('skills').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">// My Skills</span>
        <h2 class="section-title">Tech Arsenal</h2>
        <p class="section-subtitle">Technologies and tools I work with</p>
      </div>
      <div class="skills-tabs reveal">
        <button class="tab-btn active" data-tab="programming">Programming</button>
        <button class="tab-btn" data-tab="technical">Technical</button>
        <button class="tab-btn" data-tab="soft">Soft Skills</button>
      </div>
      <div id="panel-programming" class="skills-panel active reveal">
        <div class="prog-skills">
          ${s.programming.map(sk => `
            <div class="skill-bar-item">
              <label><span><i class="${sk.icon}"></i> ${sk.name}</span><span>${sk.level}%</span></label>
              <div class="skill-bar-bg"><div class="skill-bar-fill" data-level="${sk.level}"></div></div>
            </div>`).join('')}
        </div>
      </div>
      <div id="panel-technical" class="skills-panel reveal">
        <div class="tech-grid">
          ${s.technical.map(sk => `
            <div class="glass-card tech-chip"><i class="${sk.icon}"></i><span>${sk.name}</span></div>`).join('')}
        </div>
      </div>
      <div id="panel-soft" class="skills-panel reveal">
        <div class="soft-grid">
          ${s.soft.map(sk => `
            <div class="glass-card tech-chip"><i class="${sk.icon}"></i><span>${sk.name}</span></div>`).join('')}
        </div>
      </div>
    </div>`;
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
      initSkillBars();
    });
  });
}

/* ─── PROJECTS ──────────────────────────────────────────── */
function renderProjects() {
  document.getElementById('projects').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">// Portfolio</span>
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">Things I've built and contributed to</p>
      </div>
      <div class="projects-grid">
        ${PORTFOLIO.projects.map(p => `
          <div class="glass-card project-card reveal">
            <img src="${p.image}" alt="${p.title}" class="project-img">
            <div class="project-body">
              <div class="project-category">${p.category} — ${p.year}</div>
              <h3>${p.title}</h3>
              <p>${p.description}</p>
              <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
              <div class="project-links">
                <a href="${p.link}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>
                <a href="${p.github}" target="_blank" title="Source Code"><i class="fab fa-github"></i></a>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ─── TIMELINE ──────────────────────────────────────────── */
function renderTimeline() {
  document.getElementById('experience').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">// Journey</span>
        <h2 class="section-title">Experience & Education</h2>
        <p class="section-subtitle">My path so far</p>
      </div>
      <div class="timeline">
        ${PORTFOLIO.timeline.map(t => `
          <div class="timeline-item reveal">
            <div class="glass-card timeline-content">
              <div class="timeline-dot"></div>
              <div class="timeline-year"><i class="${t.icon}"></i> ${t.year}</div>
              <h3>${t.title}</h3>
              <h4>${t.subtitle}</h4>
              <p>${t.description}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ─── CERTIFICATES ──────────────────────────────────────── */
function renderCertificates() {
  document.getElementById('certificates').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">// Certifications</span>
        <h2 class="section-title">Certificates & Courses</h2>
        <p class="section-subtitle">Continuous learning journey</p>
      </div>
      <div class="certs-grid">
        ${PORTFOLIO.certificates.map(c => `
          <a href="${c.link}" target="_blank" class="glass-card cert-card reveal" style="text-decoration:none;color:inherit;">
            <i class="${c.icon}" style="color:${c.color}"></i>
            <h3>${c.title}</h3>
            <p>${c.issuer}</p>
          </a>`).join('')}
      </div>
    </div>`;
}

/* ─── CONTACT ───────────────────────────────────────────── */
function renderContact() {
  const d = PORTFOLIO;
  document.getElementById('contact').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-label">// Get In Touch</span>
        <h2 class="section-title">Contact Me</h2>
        <p class="section-subtitle">Let's work together on something great</p>
      </div>
      <div class="contact-grid reveal">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
            <div><h4>Email</h4><p><a href="mailto:${d.email}">${d.email}</a></p></div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-phone"></i></div>
            <div><h4>Phone</h4><p>${d.phone}</p></div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div><h4>Location</h4><p>${d.location}</p></div>
          </div>
          <div style="display:flex;gap:12px;margin-top:12px;">
            ${d.socials.map(s => `
              <a href="${s.url}" target="_blank" class="footer-socials" style="width:44px;height:44px;border-radius:50%;background:var(--surface);border:1px solid var(--glass-border);display:flex;align-items:center;justify-content:center;color:var(--text-muted);transition:var(--transition);font-size:1.1rem;text-decoration:none;" onmouseover="this.style.background='var(--primary)';this.style.color='#fff'" onmouseout="this.style.background='var(--surface)';this.style.color='var(--text-muted)'">
                <i class="${s.icon}"></i>
              </a>`).join('')}
          </div>
        </div>
        <form class="contact-form glass-card" style="padding:32px;" onsubmit="event.preventDefault();alert('Message sent! (Connect a backend to make this work)')">
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
          <input type="text" placeholder="Subject">
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;"><i class="fas fa-paper-plane"></i> Send Message</button>
        </form>
      </div>
    </div>`;
}

/* ─── FOOTER ────────────────────────────────────────────── */
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="container">
      <div class="footer-socials">
        ${PORTFOLIO.socials.map(s => `<a href="${s.url}" target="_blank" aria-label="${s.name}"><i class="${s.icon}"></i></a>`).join('')}
      </div>
      <p>&copy; ${new Date().getFullYear()} ${PORTFOLIO.name}. Crafted with <span style="color:var(--primary)">&hearts;</span> and code.</p>
    </div>`;
}

/* ─── PARTICLES ─────────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  function resize() { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 0.5,
      o: Math.random() * 0.5 + 0.1
    });
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(6,182,212,${p.o})`;
      ctx.fill();
      // Lines between nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const dx = p.x - particles[j].x, dy = p.y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(6,182,212,${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ─── TYPING ANIMATION ─────────────────────────────────── */
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const texts = PORTFOLIO.typingTexts;
  let ti = 0, ci = 0, deleting = false;
  function type() {
    const current = texts[ti];
    el.textContent = deleting ? current.substring(0, ci--) : current.substring(0, ci++);
    if (!deleting && ci > current.length) { setTimeout(() => { deleting = true; type(); }, 1800); return; }
    if (deleting && ci < 0) { deleting = false; ti = (ti + 1) % texts.length; setTimeout(type, 400); return; }
    setTimeout(type, deleting ? 40 : 80);
  }
  type();
}

/* ─── SCROLL EFFECTS ────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

/* ─── ANIMATED COUNTERS ─────────────────────────────────── */
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.counted) {
        e.target.dataset.counted = 'true';
        const target = +e.target.dataset.target;
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          e.target.textContent = Math.round(current);
        }, 25);
      }
    });
  }, { threshold: 0.5 });
  setTimeout(() => document.querySelectorAll('.counter').forEach(el => observer.observe(el)), 500);
}

/* ─── SKILL BARS ────────────────────────────────────────── */
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.style.width = e.target.dataset.level + '%';
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-bar-fill').forEach(el => { el.style.width = '0'; observer.observe(el); });
}
