/* ============================================================
   VISHAKHA POTPHODE PORTFOLIO — SCRIPT
   ============================================================ */

/* ---------- Project Data ---------- */
const PROJECTS = {
  1: {
    index: '01',
    title: 'Master Bedroom',
    subtitle: 'Hardik Residence, Palghar',
    hero: 'assets/mb1_hero_wide.jpg',
    concept: 'A modern and serene master bedroom design that blends minimal elegance with warm neutral tones and subtle gold accents. The space is crafted to offer comfort, functionality, and a luxurious yet calming ambiance.',
    ambiance: ['Modern','Elegant','Warm','Serene','Luxurious'],
    moodPhoto: 'assets/m1_room_photo.jpg',
    palette: [
      {hex:'#0d111d', name:'Navy'},
      {hex:'#57483a', name:'Taupe'},
      {hex:'#a5917d', name:'Greige'},
      {hex:'#d6c5b1', name:'Cream'},
      {hex:'#ae8749', name:'Gold'}
    ],
    materials: [
      {img:'assets/m1_marble.jpg', name:'Marble Flooring', lines:['Finish: Polished','Colour: Beige & Cream','Size: 1200 × 1200 mm','Thickness: 16–18 mm']},
      {img:'assets/m1_paint.jpg', name:'Paint — Matte Finish', lines:['Colour: Off White','Brand: Asian Paints','Shade: 8291']},
      {img:'assets/m1_flutedpu.jpg', name:'Fluted PU Panel', lines:['Finish: Natural Wood','Brand: Greenlam / Merino','Material: MDF with PU Coating']},
      {img:'assets/m1_laminate.jpg', name:'Laminate — Light Wood', lines:['Finish: Natural Wood','Brand: Greenlam / Merino','Shade: Light Oak','Thickness: 1.0 mm']},
      {img:'assets/m1_upholstery.jpg', name:'Upholstery Fabric', lines:['Application: Headboard, Bed Base, Cushions','Colour: Beige','Material: Linen Blend']},
      {img:'assets/m1_wallart.jpg', name:'Wall Art — Painting', lines:['Frame: Black Metal','Style: Abstract','Colours: Blue, White, Gold']},
      {img:'assets/m1_curtain.jpg', name:'Curtain Fabric', lines:['Colour: Beige','Material: Blackout Fabric','Brand: D\u2019Decor / Vista','Style: Pleated']},
      {img:'assets/m1_bedlinen.jpg', name:'Bed Linen', lines:['Colour: Beige, Grey & Navy','Material: Cotton / Linen','Set: Bedsheet, Quilt, Cushions, Pillow Covers']}
    ],
    drawings: [
      {img:'assets/rcp1_elec.jpg', label:'Electrical Layout'},
      {img:'assets/rcp1_ceiling.jpg', label:'Reflected Ceiling Layout'},
      {img:'assets/e1_AA.jpg', label:"Sectional Elevation A–A'"},
      {img:'assets/e1_BB.jpg', label:"Sectional Elevation B–B'"},
      {img:'assets/e1_CC.jpg', label:"Sectional Elevation C–C'"},
      {img:'assets/e1_DD.jpg', label:"Sectional Elevation D–D'"}
    ]
  },
  2: {
    index: '02',
    title: 'Master Bedroom',
    subtitle: 'Design Concept II',
    hero: 'assets/mb2_hero_wide.jpg',
    concept: 'The design follows a modern, elegant, and serene luxury concept, combining warm neutral tones with navy blue, walnut wood, charcoal, and subtle gold accents. The overall intention is to create a bedroom that feels sophisticated and calming while remaining highly functional.',
    ambiance: ['Modern','Elegant','Warm','Serene','Luxurious'],
    moodPhoto: 'assets/m2_room_photo.jpg',
    palette: [
      {hex:'#0d111d', name:'Navy'},
      {hex:'#57483a', name:'Taupe'},
      {hex:'#a5917d', name:'Greige'},
      {hex:'#d6c5b1', name:'Cream'},
      {hex:'#ae8749', name:'Gold'}
    ],
    materials: [
      {img:'assets/m1_marble.jpg', name:'Marble Flooring', lines:['Finish: Polished','Colour: Beige & Cream','Size: 1200 × 1200 mm','Thickness: 16–18 mm']},
      {img:'assets/m1_paint.jpg', name:'Paint — Matte Finish', lines:['Colour: Off White','Brand: Asian Paints','Shade: 8291']},
      {img:'assets/m1_flutedpu.jpg', name:'Fluted PU Panel', lines:['Finish: Natural Wood','Brand: Greenlam / Merino','Material: MDF with PU Coating']},
      {img:'assets/m1_laminate.jpg', name:'Laminate — Light Wood', lines:['Finish: Natural Wood','Brand: Greenlam / Merino','Shade: Light Oak','Thickness: 1.0 mm']},
      {img:'assets/m1_upholstery.jpg', name:'Upholstery Fabric', lines:['Application: Headboard, Bed Base, Cushions','Colour: Beige','Material: Linen Blend']},
      {img:'assets/m2_knob.jpg', name:'Knob', lines:['Colour: Golden','Material: Metallic']},
      {img:'assets/m2_curtain.jpg', name:'Curtain Fabric', lines:['Colour: Beige','Material: Blackout Fabric','Brand: D\u2019Decor / Vista','Style: Pleated']},
      {img:'assets/m2_bedlinen.jpg', name:'Bed Linen', lines:['Colour: Beige, Grey & Navy','Material: Cotton / Linen','Set: Bedsheet, Quilt, Cushions, Pillow Covers']}
    ],
    drawings: [
      {img:'assets/rcp2_elec.jpg', label:'Electrical Layout'},
      {img:'assets/rcp2_ceiling.jpg', label:'Reflected Ceiling Layout'},
      {img:'assets/e2_AA.jpg', label:"Sectional Elevation A–A'"},
      {img:'assets/e2_BB.jpg', label:"Sectional Elevation B–B'"}
    ]
  }
};

const GALLERY_IMAGES = [
  {img:'assets/mb1_hero_wide.jpg', caption:'Master Bedroom — Hardik Residence, Palghar'},
  {img:'assets/mb2_hero_wide.jpg', caption:'Master Bedroom — Design Concept II'},
  {img:'assets/mb1_bed_closeup.jpg', caption:'Headboard detail — Concept I'},
  {img:'assets/m2_room_photo.jpg', caption:'Walnut wood feature wall — Concept II'},
  {img:'assets/mb1_floorplan.jpg', caption:'Top view — Concept I'},
  {img:'assets/mb2_bed_closeup.jpg', caption:'Bed detail — Concept II'},
  {img:'assets/m1_room_photo.jpg', caption:'Vanity nook — Concept I'},
  {img:'assets/mb2_floorplan.jpg', caption:'Top view — Concept II'},
  {img:'assets/e1_AA.jpg', caption:"Sectional Elevation A–A' — Concept I"}
];

/* ============================================================
   PRELOADER
   ============================================================ */
window.addEventListener('load', () => {
  const tl = gsap.timeline({
    onComplete: () => {
      document.body.classList.add('loaded');
      initPageAnimations();
    }
  });
  tl.to('.preloader-bar-fill', { width: '100%', duration: 1.0, ease: 'power2.inOut' })
    .to('.preloader-name span', { y: '0%', duration: 0.8, ease: 'power3.out', stagger: 0.1 }, 0.1)
    .to('.preloader-role', { opacity: 1, duration: 0.6 }, 0.5)
    .to('.preloader-inner', { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' }, '+=0.3');
});

/* Fallback in case load event is delayed */
setTimeout(() => {
  if (!document.body.classList.contains('loaded')) {
    document.body.classList.add('loaded');
    initPageAnimations();
  }
}, 4000);

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
const cursorDot = document.getElementById('cursorDot');
if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power2.out' });
  });
  document.querySelectorAll('a, button, .masonry-item, .material-card, .drawing-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorDot.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursorDot.classList.remove('grow'));
  });
}

/* ============================================================
   NAVIGATION
   ============================================================ */
const siteNav = document.getElementById('siteNav');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

const lightSections = ['about','skills','work','gallery'];
function updateNavTheme() {
  const scrollY = window.scrollY || window.pageYOffset;
  siteNav.classList.toggle('scrolled', scrollY > 60);

  // Determine if current viewport center is over a light section
  const probeY = 90;
  let onLight = false;
  lightSections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top <= probeY && r.bottom >= probeY) onLight = true;
  });
  siteNav.classList.toggle('on-light', onLight);
}
window.addEventListener('scroll', updateNavTheme, { passive: true });

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* Active link on scroll */
const navSections = ['home','about','experience','skills','work','contact'];
function updateActiveNav() {
  const probeY = 140;
  let current = 'home';
  navSections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top <= probeY) current = id;
  });
  document.querySelectorAll('[data-nav]').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === current);
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

/* ============================================================
   LENIS SMOOTH SCROLL
   ============================================================ */
let lenis;
function initLenis() {
  if (typeof Lenis === 'undefined') return;
  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
}
initLenis();

/* Smooth anchor navigation */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -10, duration: 1.3 });
      else target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ============================================================
   PAGE ANIMATIONS (run after preloader completes)
   ============================================================ */
function initPageAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  /* --- Hero entrance --- */
  const heroTl = gsap.timeline({ delay: 0.1 });
  heroTl
    .to('.hero-content .eyebrow', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0)
    .to('.hero-title .word', { y: '0%', duration: 1.0, ease: 'power4.out', stagger: 0.12 }, 0.15)
    .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.55)
    .to('.hero-meta', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.75);

  gsap.to('.hero-bg img', { scale: 1, duration: 2.2, ease: 'power2.out', delay: 0.1 });

  /* Hero parallax on scroll */
  gsap.to('.hero-bg img', {
    yPercent: 18,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });
  gsap.to('.hero-content', {
    yPercent: -25,
    opacity: 0.4,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* --- Generic reveal-up / reveal-scale / reveal-clip --- */
  gsap.utils.toArray('.reveal-up').forEach((el) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 1.0, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });
  gsap.utils.toArray('.reveal-scale').forEach((el) => {
    gsap.to(el, {
      opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });
  gsap.utils.toArray('.reveal-clip').forEach((el) => {
    gsap.to(el, {
      clipPath: 'inset(0 0 0% 0)', duration: 1.2, ease: 'power4.inOut',
      scrollTrigger: { trigger: el, start: 'top 82%' }
    });
  });

  /* Stagger children within grids for a nicer cascade */
  ['.about-strengths', '.achieve-cards', '.expo-list', '.skills-grid',
   '.philosophy-grid', '.timeline'].forEach(sel => {
    const container = document.querySelector(sel);
    if (!container) return;
    const items = container.children;
    gsap.set(items, { opacity: 0, y: 24 });
    ScrollTrigger.create({
      trigger: container, start: 'top 85%',
      onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' })
    });
  });

  /* Section headings subtle rise handled by .reveal-up already applied via class in HTML if present */

  refreshScrollTrigger();
}

function refreshScrollTrigger() {
  setTimeout(() => ScrollTrigger.refresh(), 300);
}

/* ============================================================
   MAGNETIC BUTTON
   ============================================================ */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    gsap.to(btn, { x: x * 0.3, y: y * 0.4, duration: 0.4, ease: 'power2.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
  });
});

/* ============================================================
   CONTACT FORM (static — no backend)
   ============================================================ */
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    formNote.textContent = `Thank you${name ? ', ' + name : ''} — your message has been noted. Vishakha will get back to you soon.`;
    contactForm.reset();
  });
}

/* ============================================================
   GALLERY MASONRY + LIGHTBOX
   ============================================================ */
const masonryGrid = document.getElementById('masonryGrid');
let lightboxItems = [];
let lightboxIndex = 0;

function buildMasonry() {
  lightboxItems = GALLERY_IMAGES;
  masonryGrid.innerHTML = GALLERY_IMAGES.map((item, i) => `
    <div class="masonry-item" data-index="${i}">
      <img src="${item.img}" alt="${item.caption}" loading="lazy">
    </div>
  `).join('');
  masonryGrid.querySelectorAll('.masonry-item').forEach(el => {
    el.addEventListener('click', () => openLightbox(lightboxItems, parseInt(el.dataset.index, 10)));
  });
}
buildMasonry();

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

function openLightbox(items, index) {
  lightboxItems = items;
  lightboxIndex = index;
  renderLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function renderLightbox() {
  const item = lightboxItems[lightboxIndex];
  lightboxImg.src = item.img;
  lightboxImg.alt = item.caption || item.label || '';
  lightboxCaption.textContent = item.caption || item.label || '';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxNext').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
  renderLightbox();
});
document.getElementById('lightboxPrev').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
  renderLightbox();
});
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
});

/* ============================================================
   PROJECT DETAIL OVERLAY
   ============================================================ */
const projectOverlay = document.getElementById('projectOverlay');
const overlayScroll = document.getElementById('overlayScroll');
const overlayClose = document.getElementById('overlayClose');

function buildOverlayHTML(p) {
  const materialsHTML = p.materials.map(m => `
    <div class="material-card" data-lb-img="${m.img}" data-lb-caption="${m.name}">
      <div class="material-card-img"><img src="${m.img}" alt="${m.name}" loading="lazy"></div>
      <div class="material-card-body">
        <h4>${m.name}</h4>
        <p>${m.lines.map(l => {
          const [k, v] = l.split(':');
          return v ? `<b>${k.trim()}:</b>${v}` : l;
        }).join('<br>')}</p>
      </div>
    </div>
  `).join('');

  const drawingsHTML = p.drawings.map(d => `
    <div class="drawing-card" data-lb-img="${d.img}" data-lb-caption="${d.label}">
      <img src="${d.img}" alt="${d.label}" loading="lazy">
      <div class="drawing-card-label"><span>${d.label}</span><span class="zoom-hint">&#8599;</span></div>
    </div>
  `).join('');

  const paletteHTML = p.palette.map(c => `
    <div class="od-swatch">
      <div class="od-swatch-dot" style="background:${c.hex}"></div>
      <span>${c.name}</span>
    </div>
  `).join('');

  const ambianceHTML = p.ambiance.map(a => `<span>${a}</span>`).join('');

  return `
    <div class="od-hero">
      <img src="${p.hero}" alt="${p.title} — ${p.subtitle}">
      <div class="od-hero-scrim"></div>
      <div class="od-hero-content">
        <span class="od-index">${p.index}</span>
        <h2 class="od-title">${p.title}</h2>
        <p class="od-subtitle">${p.subtitle}</p>
      </div>
    </div>

    <div class="od-section">
      <p class="od-section-label">Design Concept</p>
      <p class="od-concept-text">${p.concept}</p>
      <div class="od-ambiance">${ambianceHTML}</div>
    </div>

    <div class="od-moodboard">
      <div class="od-mood-grid">
        <div class="od-mood-photo"><img src="${p.moodPhoto}" alt="${p.title} mood board photo" loading="lazy"></div>
        <div>
          <p class="od-section-label" style="color:var(--gold-light)">Colour Palette</p>
          <div class="od-palette">${paletteHTML}</div>
        </div>
      </div>
    </div>

    <div class="od-materials">
      <p class="od-section-label">Material Palette</p>
      <div class="od-material-grid">${materialsHTML}</div>
    </div>

    <div class="od-drawings">
      <p class="od-section-label">Drawings &amp; Technical Details</p>
      <div class="od-drawing-grid">${drawingsHTML}</div>
    </div>
  `;
}

function openProject(id) {
  const p = PROJECTS[id];
  if (!p) return;
  overlayScroll.innerHTML = buildOverlayHTML(p);
  overlayScroll.scrollTop = 0;
  projectOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (lenis) lenis.stop();

  /* Wire up lightbox triggers within overlay */
  const lbItems = [
    ...p.materials.map(m => ({ img: m.img, caption: m.name })),
    ...p.drawings.map(d => ({ img: d.img, caption: d.label }))
  ];
  overlayScroll.querySelectorAll('[data-lb-img]').forEach((el, i) => {
    el.addEventListener('click', () => {
      const img = el.dataset.lbImg;
      const idx = lbItems.findIndex(it => it.img === img);
      openLightbox(lbItems, idx >= 0 ? idx : 0);
    });
  });

  /* Fade in overlay content sections as user scrolls within overlay */
  gsap.utils.toArray(overlayScroll.querySelectorAll('.od-section, .od-moodboard, .od-materials, .od-drawings')).forEach(sec => {
    gsap.fromTo(sec, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sec, scroller: overlayScroll, start: 'top 92%' }
    });
  });
  setTimeout(() => ScrollTrigger.refresh(), 200);
}

function closeProject() {
  projectOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (lenis) lenis.start();
}

document.querySelectorAll('[data-open-project]').forEach(btn => {
  btn.addEventListener('click', () => openProject(btn.dataset.openProject));
});
overlayClose.addEventListener('click', closeProject);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectOverlay.classList.contains('open') && !lightbox.classList.contains('open')) {
    closeProject();
  }
});
