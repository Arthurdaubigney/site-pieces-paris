/* Interactions du site : navigation, entrées au défilement, vérificateur, FAQ, Tally.
   Tout est progressif : sans JavaScript, le contenu reste visible et les liens fonctionnent. */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];

/* Boucles vidéo : à l'arrêt si l'utilisateur réduit les animations */
if (reduced) $$<HTMLVideoElement>('video[data-loop]').forEach((v) => { v.removeAttribute('autoplay'); v.pause(); });

/* Menu mobile */
const menuBtn = $<HTMLButtonElement>('.menu-btn');
const nav = $('#nav');
if (menuBtn && nav) {
  const set = (open: boolean) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
    menuBtn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Menu');
  };
  menuBtn.addEventListener('click', () => set(menuBtn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
  nav.addEventListener('click', (e) => (e.target as HTMLElement).closest('a') && set(false));
}

/* Entrées au défilement : titre, texte, image, décalés de 70 ms */
$$('.prose-main > *, .slip > *, .sheet__group, .steps li, ul.dots li').forEach((el, i) => {
  if (!el.hasAttribute('data-reveal')) {
    el.setAttribute('data-reveal', '');
    el.style.setProperty('--i', String(i % 5));
  }
});
const reveals = $$('[data-reveal]');
if (reduced || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  reveals.forEach((el) => io.observe(el));
}

/* Héros : fondu enchaîné lent entre les pièces */
const coins = $$('.stage__coin');
if (coins.length > 1 && !reduced) {
  let i = 0;
  const label = $('[data-stage-label]');
  const show = (n: number) => {
    coins.forEach((c, k) => (c.dataset.on = String(k === n)));
    if (label) label.textContent = coins[n].dataset.caption ?? '';
  };
  show(0);
  let timer = window.setInterval(() => show((i = (i + 1) % coins.length)), 5200);
  document.addEventListener('visibilitychange', () => {
    clearInterval(timer);
    if (!document.hidden) timer = window.setInterval(() => show((i = (i + 1) % coins.length)), 5200);
  });
}

/* FAQ : une fiche ouverte à la fois */
$$('[data-faq]').forEach((list) => {
  const btns = $$<HTMLButtonElement>('.card__q', list);
  btns.forEach((b) =>
    b.addEventListener('click', () => {
      const willOpen = b.getAttribute('aria-expanded') !== 'true';
      btns.forEach((o) => {
        const open = o === b && willOpen;
        o.setAttribute('aria-expanded', String(open));
        const panel = document.getElementById(o.getAttribute('aria-controls')!);
        if (panel) panel.dataset.open = String(open);
      });
    }),
  );
});

/* Relief au survol des tuiles */
if (!reduced && window.matchMedia('(hover: hover)').matches) {
  $$('.tilt').forEach((el) => {
    el.addEventListener('pointermove', (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`);
      el.classList.add('is-tilting');
    });
    el.addEventListener('pointerleave', () => {
      el.classList.remove('is-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });
}

/* Vérificateur : verdict indicatif selon le pays et le type de pièce */
const checker = $('[data-checker]');
if (checker) {
  const select = $<HTMLSelectElement>('select', checker)!;
  const seg = $('[data-seg]', checker)!;
  const radios = $$<HTMLInputElement>('input[type=radio]', seg);
  const body = $('[data-verdict-body]', checker)!;
  const verdict = $('[data-verdict]', checker)!;
  const formPath = checker.dataset.formPath ?? '/estimation-gratuite/';

  const copy = {
    priority: {
      t: 'À faire expertiser en priorité',
      p: 'Les micro-États émettent très peu de pièces : celles de ce pays sont parmi les plus recherchées des collectionneurs. L’année, le tirage et l’état font ensuite toute la différence.',
    },
    notable: {
      t: 'Mérite un coup d’œil attentif',
      p: 'Selon l’année, le tirage et le type d’émission, certaines pièces de ce pays sont recherchées. Envoyez-nous des photos : nous vérifions pour vous.',
    },
    common: {
      t: 'Probablement courante, mais vérifiable',
      p: 'La plupart des pièces courantes de ce pays valent leur valeur faciale. Une commémorative à faible tirage, une variante ou un défaut de frappe peut pourtant changer la donne.',
    },
  } as const;
  const kindNote: Record<string, string> = {
    commemorative: ' Pour une commémorative, le sujet et le millésime sont déterminants.',
    courante: '',
    coffret: ' Gardez l’écrin et le certificat : un coffret complet se valorise davantage.',
  };

  const update = () => {
    const opt = select.selectedOptions[0];
    const checked = radios.find((r) => r.checked)!;

    if (!select.value) return;
    const tier = (opt.dataset.tier ?? 'common') as keyof typeof copy;
    const c = copy[tier];
    const q = new URLSearchParams({ pays: select.value, type: checked.value }).toString();
    const render = () => {
      body.innerHTML = `
        <p class="verdict__title">${c.t}</p>
        <p>${c.p}${kindNote[checked.dataset.kind ?? ''] ?? ''}</p>
        <a class="btn" href="${formPath}?${q}#formulaire">Obtenir mon estimation gratuite
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg></a>
        <p class="verdict__fine">Indication générale, pas une estimation : seule l’analyse de vos photos permet de chiffrer une pièce.</p>`;
    };
    if (reduced) return render();
    verdict.dataset.swap = 'out';
    setTimeout(() => {
      render();
      verdict.dataset.swap = 'in';
    }, 150);
  };
  select.addEventListener('change', update);
  radios.forEach((r) => r.addEventListener('change', update));
}

/* Formulaire Tally : chargé à l'approche de l'écran, avec transmission des paramètres d'URL */
$$('[data-tally-form]').forEach((box) => {
  const frame = $<HTMLIFrameElement>('iframe[data-tally-src]', box);
  if (!frame) return;
  const load = () => {
    const url = new URL(frame.dataset.tallySrc!);
    new URLSearchParams(location.search).forEach((v, k) => url.searchParams.set(k, v));
    frame.src = url.href;
    frame.addEventListener('load', () => (box.dataset.ready = 'true'), { once: true });
    const s = document.createElement('script');
    s.src = 'https://tally.so/widgets/embed.js';
    s.async = true;
    s.onload = () => (window as any).Tally?.loadEmbeds?.();
    document.body.appendChild(s);
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) {
        io.disconnect();
        load();
      }
    }, { rootMargin: '600px' });
    io.observe(box);
  } else load();
});
