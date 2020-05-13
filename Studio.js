// Slide In Intersection Observer
const slideIn = document.querySelectorAll('.slide-in');

const slideInOptions = {
  // root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0,
};

const slideInCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('slide-in-animate');
    }
  });
};

const slideInObserver = new IntersectionObserver(
  slideInCallback,
  slideInOptions
);

slideIn.forEach((slide) => {
  slideInObserver.observe(slide);
});

// Fade In Observer
fadeIn = document.querySelectorAll('.fade-in');

const fadeInOptions = {
  // root: document.querySelector('#home-works'),
  rootMargin: '0px',
  threshold: 0,
};

const fadeInCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('fade-in-animate');
    }
  });
};

const fadeInObserver = new IntersectionObserver(fadeInCallback, fadeInOptions);

fadeIn.forEach((fade) => {
  fadeInObserver.observe(fade);
});

// Manifesto Animation
scrollDescBox = document.querySelector('.scroll-desc-box');

const scrollPath = {
  curviness: 0,
  autoRotate: false,
  path: [
    { x: 0, y: 0 },
    { x: -scrollDescBox.scrollWidth + window.innerWidth / 2, y: 0 },
  ],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to('.scroll-desc-box', {
    duration: 1,
    motionPath: scrollPath,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.manifesto',
  duration: 5000,
  triggerHook: 0,
})
  .setTween(tween)
  // .addIndicators()
  .setPin('.manifesto')
  .addTo(controller);

// Manifesto Observer
const manifesto = document.querySelector('.manifesto');
const nav = document.querySelector('.nav');

const manifestoOptions = {
  // root: document.querySelector('#scrollArea'),
  rootMargin: `-50%`,
  threshold: [0],
};

const manifestoCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('bg-black');
      nav.classList.remove('nav-white');
    } else {
      entry.target.classList.add('bg-black');
      nav.classList.add('nav-white');
    }
  });
};

const manifestoObserver = new IntersectionObserver(
  manifestoCallback,
  manifestoOptions
);

manifestoObserver.observe(manifesto);

// Awards Intersection Observer
const awards = document.querySelector('.awards');

const awardsOptions = {
  // root: document.querySelector('.studio'),
  rootMargin: `-50%`,
  threshold: [0],
};

const awardsCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      console.log('not intersecting');
      nav.classList.remove('nav-white');
    } else {
      console.log('intersecting');
      nav.classList.add('nav-white');
    }
  });
};

const awardsObserver = new IntersectionObserver(awardsCallback, awardsOptions);

awardsObserver.observe(awards);
