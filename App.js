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

// Home Intro Observer
// Change Nav Color To White
const homeLatest = document.querySelector('#home-latest');
const nav = document.querySelector('.nav');

const homeLatestOptions = {
  // root: document.querySelector('#home-works'),
  rootMargin: '0px',
  threshold: 0,
};

const homeLatestCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add('nav-white');
    } else {
      nav.classList.remove('nav-white');
    }
  });
};

const homeLatestObserver = new IntersectionObserver(
  homeLatestCallback,
  homeLatestOptions
);

homeLatestObserver.observe(homeLatest);
