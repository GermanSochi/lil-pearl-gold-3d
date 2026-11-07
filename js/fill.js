const N = 12, counts = { type1: 48, type3: 48, type6: 21 };
const img = i => `img/p${String((i % N) + 1).padStart(2, '0')}.jpg`;
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
document.querySelectorAll('.grid').forEach(g => {
  const n = counts[g.dataset.type] || 24, wrap = g.querySelector('.grid-wrap');
  let order = []; while (order.length < n) order = order.concat(shuffle([...Array(N).keys()]));
  wrap.innerHTML = order.slice(0, n).map(i => `<div class="grid__item"><div class="grid__item-inner" style="background-image:url(${img(i)})"></div></div>`).join('');
});
gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll('.sec').forEach(s => {
  gsap.from(s.querySelectorAll(':scope > *, .facts > div'), { y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', stagger: .12, scrollTrigger: { trigger: s, start: 'top 70%' } });
});
gsap.from('.intro__title > *', { y: 80, opacity: 0, duration: 1.4, ease: 'power3.out', stagger: .25, delay: .4 });
