// Home page motion: header background after scrolling, fade-in on scroll,
// and the "how it works" story (sticky phone whose screens slide with the steps).
(() => {
  const bar = document.querySelector('.bar');
  if (bar) {
    const onScroll = () => bar.classList.toggle('scrolled', scrollY > 8);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
  }

  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('in'));
    return;
  }
  const revealer = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); }
  }), { rootMargin: '0px 0px -10% 0px' });
  reveals.forEach(el => revealer.observe(el));

  const reel = document.querySelector('.reel');
  const steps = [...document.querySelectorAll('.step')];
  if (!reel || !steps.length) return;
  const dots = document.querySelectorAll('.dots i');
  const box = document.querySelector('.steps');
  const fill = box.querySelector('.fill');

  // Narrow screens hide the sticky phone; give each step its own copy of its screen.
  steps.forEach(step => {
    const screen = reel.querySelector('.screen[data-s="' + step.dataset.s + '"]').cloneNode(true);
    const slot = step.querySelector('.inline');
    slot.setAttribute('role', 'img');
    slot.setAttribute('aria-label', reel.closest('[aria-label]').getAttribute('aria-label'));
    slot.append(screen);
  });

  const mid = el => el.offsetTop + el.offsetHeight / 2;
  let current = 1;
  const show = n => {
    current = n;
    reel.style.translate = (-(n - 1) * 100) + '% 0';
    dots.forEach((d, i) => d.classList.toggle('on', i === n - 1));
    steps.forEach((s, i) => { s.classList.toggle('on', i === n - 1); s.classList.toggle('past', i < n - 1); });
    const top = mid(steps[0]);
    box.style.setProperty('--r0', top + 'px');
    box.style.setProperty('--rh', (mid(steps[steps.length - 1]) - top) + 'px');
    fill.style.height = (mid(steps[n - 1]) - top) + 'px';
  };
  const stepper = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) show(+e.target.dataset.s);
  }), { rootMargin: '-45% 0px -45% 0px' });
  steps.forEach(s => stepper.observe(s));
  addEventListener('resize', () => show(current), { passive: true });
  show(1);
})();
