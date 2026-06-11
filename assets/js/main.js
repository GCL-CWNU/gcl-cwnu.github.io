// 모바일 메뉴 토글 + 공통 인터랙션
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });
  }

  // 현재 페이지 메뉴 활성화 표시
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('is-active');
  });
  // 멤버 하위 페이지면 상위 "멤버" 메뉴도 활성화
  if (['professor.html', 'members.html', 'alumni.html'].indexOf(current) > -1) {
    const parent = document.querySelector('.nav__dropdown > a');
    if (parent) parent.classList.add('is-active');
  }

  // 연구/논문 페이지 탭 전환
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('is-active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('is-active'));
      btn.classList.add('is-active');
      document.getElementById(target).classList.add('is-active');
    });
  });

  // ---------- 스크롤 리빌 애니메이션 ----------
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    // 대상 자동 태깅 — 긴 목록(.pub-list 등)은 화면보다 훨씬 길어
    // 교차 비율 임계값을 못 채워 영영 안 보일 수 있으므로 제외한다.
    const targets = document.querySelectorAll(
      'section h2, .section-sub, .card, ' +
      '.prof-hero, .contact-grid, .tabs, .hero__eyebrow, .hero h1, .hero p, .hero__actions, .hero__media'
    );
    targets.forEach(function (el) { el.classList.add('reveal'); });

    // 같은 그리드 안의 카드는 순차(스태거) 등장
    document.querySelectorAll('.grid').forEach(function (grid) {
      [...grid.querySelectorAll(':scope > .card')].forEach(function (card, i) {
        card.style.transitionDelay = Math.min(i * 70, 420) + 'ms';
      });
    });

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  // ---------- 성과 숫자 카운트업 ----------
  const nums = document.querySelectorAll('.stat-num[data-count]');
  if (nums.length) {
    function animate(el) {
      const end = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || '';
      if (reduceMotion) { el.textContent = end + suffix; return; }
      const dur = 1200;
      const start = performance.now();
      function tick(now) {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        el.textContent = Math.round(end * eased) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    if ('IntersectionObserver' in window) {
      const cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animate(entry.target);
            cio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      nums.forEach(function (el) { cio.observe(el); });
    } else {
      nums.forEach(animate);
    }
  }
});
