// Works Header Link Hover Effect
const headerLinks = document.querySelectorAll('#work .header-list-link');
const workHoverImage = document.querySelector('.work-hover-image');
const worksHeader = document.querySelector('#works-header');

const showBgImage = (e) => {
  workHoverImage.style.background = `url('./img/${e.target.dataset.image}') no-repeat center center/cover`;
  workHoverImage.style.opacity = '1';
  workHoverImage.style.visibility = 'visible';
  workHoverImage.style.transform = 'translate(-50%, -50%) scale(1)';
};

headerLinks.forEach((link) => {
  link.addEventListener('mouseover', showBgImage);
});

const hideBgImage = () => {
  workHoverImage.style.opacity = '0';
  workHoverImage.style.visibility = 'hidden';
  workHoverImage.style.transform = 'translate(-50%, -50%) scale(.5)';
};

headerLinks.forEach((link) => {
  link.addEventListener('mouseleave', hideBgImage);
});

// Get Mouse X and Y position
const updatePosition = (e) => {
  workHoverImage.style.top = `${e.clientY + window.scrollY}px`;
  workHoverImage.style.left = `${e.clientX}px`;
};

worksHeader.addEventListener('mousemove', updatePosition);
