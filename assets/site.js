// Home page motion: header background after scrolling, fade-in on scroll,
// and the "how it works" story (sticky phone whose screens slide with the steps).
(() => {
  const bar = document.querySelector('.bar');
  if (bar) {
    const onScroll = () => bar.classList.toggle('scrolled', scrollY > 8);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
  }

  // FAQ: open and close the answers smoothly instead of jumping.
  const calm = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.faq details').forEach(d => {
    const summary = d.querySelector('summary');
    const answer = d.querySelector('.a');
    let anim = null;
    d.addEventListener('toggle', () => { if (!anim) d.classList.toggle('is-open', d.open); });
    summary.addEventListener('click', e => {
      if (calm.matches || !d.animate) return;
      e.preventDefault();
      const closing = d.open && !d.classList.contains('closing');
      const from = d.offsetHeight;
      if (anim) anim.cancel();
      let to;
      if (closing) {
        d.classList.add('closing');
        d.classList.remove('is-open');
        to = summary.offsetHeight + (d.offsetHeight - d.clientHeight);
      } else {
        d.classList.remove('closing');
        d.open = true;
        d.classList.add('is-open');
        to = d.offsetHeight;
        if (answer) answer.animate({ opacity: [0, 1], translate: ['0 -6px', '0 0'] }, { duration: 450, easing: 'ease-out' });
      }
      d.style.overflow = 'hidden';
      anim = d.animate({ height: [from + 'px', to + 'px'] }, { duration: 450, easing: 'cubic-bezier(.2,.7,.2,1)' });
      anim.onfinish = () => {
        if (closing) { d.open = false; d.classList.remove('closing'); }
        d.style.overflow = '';
        anim = null;
      };
    });
  });

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
    const scr = document.createElement('div');
    scr.className = 'scr';
    scr.append(screen);
    step.querySelector('.inline').append(scr);
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
