(function () {
  'use strict';

  const headerTop = document.querySelector('.header__top');
  const header = document.querySelector('.header');
  const headerHeight = header.getBoundingClientRect().height;

  const stickyNav = function (entries) {
    const [entry] = entries;
    headerTop.classList.toggle('sticky', !entry.isIntersecting);
  }

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `${headerHeight}px`
  });
  headerObserver.observe(header);

}());


(function () {
  'use strict';

  ///////////////////// DROPDOWN MENU & NO SCROLLING

  const body = document.querySelector("body");
  const navBox = document.querySelector('#nav-toggle')
  const nav = document.querySelector('.nav');

  const dropMenu = function() {
    if (this.checked) {
      nav.classList.add("reveal");
      body.classList.add('u-overflow-hidden');
    } else {
      nav.classList.remove("reveal");
      body.classList.remove('u-overflow-hidden');
    }
  }

  navBox.addEventListener('change', dropMenu);

  window.onload = function() {
    navBox.checked = false;
    if (body.classList.contains('u-overflow-hidden')) body.classList.remove('u-overflow-hidden');
    if (nav.classList.contains('reveal')) nav.classList.remove('reveal');
  }


// FROM CSS TRICKS
// https://css-tricks.com/stop-animations-during-window-resizing/

let resizeTimer;
window.addEventListener("resize", () => {
  console.log('resized');
  document.body.classList.add("u-resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("u-resize-animation-stopper");
  }, 400);
});

}());
