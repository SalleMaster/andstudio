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

console.log(fadeIn);

const fadeInOptions = {
  // root: document.querySelector('#home-works'),
  rootMargin: '0px',
  threshold: 0,
};

const fadeInCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      console.log('not intersecting');
      return;
    } else {
      console.log('intersecting');
      entry.target.classList.add('fade-in-animate');
    }
  });
};

const fadeInObserver = new IntersectionObserver(fadeInCallback, fadeInOptions);

fadeIn.forEach((fade) => {
  fadeInObserver.observe(fade);
});
