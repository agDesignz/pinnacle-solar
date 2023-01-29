(function() {
  'use strict';

const headerTop = document.querySelector('.header__top');
const header = document.querySelector('.header');
const headerTopHeight = headerTop.getBoundingClientRect().height;
const headerHeight = header.getBoundingClientRect().height;
console.log(headerHeight);

console.log(`-${headerHeight - headerTopHeight}px`);

const stickyNav = function(entries) {
  const [entry] = entries;
  console.log(entry)
  headerTop.classList.toggle('sticky', !entry.isIntersecting);
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight - (headerTopHeight * 2)}px 0px 0px 0px`
});

headerObserver.observe(header);

}());
