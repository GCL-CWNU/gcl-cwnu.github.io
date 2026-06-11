// 연구/논문 데이터 렌더링 + 검색
(function () {
  const data = window.PUBS || {};

  function esc(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderJournal(items) {
    return items.map(function (it) {
      const link = it.url ? ' · <a href="' + esc(it.url) + '" target="_blank" rel="noopener">[원문]</a>' : '';
      return '<li>' +
        '<div class="pub-venue">' + esc(it.venue) + (it.date ? ' · ' + esc(it.date) : '') + '</div>' +
        '<div class="pub-title">' + esc(it.title) + '</div>' +
        '<div class="pub-authors">' + link.replace(/^ · /, '') + '</div>' +
      '</li>';
    }).join('');
  }

  function renderConf(items) {
    return items.map(function (it) {
      return '<li>' +
        '<div class="pub-venue">' + esc(it.venue) + (it.date ? ' · ' + esc(it.date) : '') + '</div>' +
        '<div class="pub-title">' + esc(it.title) + '</div>' +
      '</li>';
    }).join('');
  }

  function renderProject(items) {
    return items.map(function (it) {
      const meta = [it.agency, it.date].filter(Boolean).join(' · ');
      return '<li>' +
        (meta ? '<div class="pub-venue">' + esc(meta) + '</div>' : '') +
        '<div class="pub-title">' + esc(it.title) + '</div>' +
      '</li>';
    }).join('');
  }

  function renderPatent(items) {
    return items.map(function (it) {
      return '<li>' +
        '<div class="pub-venue">' + esc(it.no) + (it.date ? ' · ' + esc(it.date) : '') + '</div>' +
        '<div class="pub-title">' + esc(it.title) + '</div>' +
      '</li>';
    }).join('');
  }

  const renderers = {
    international: renderJournal,
    domestic: renderJournal,
    conference: renderConf,
    project: renderProject,
    patent: renderPatent,
  };

  // 최신순(원본이 이미 최신순) 유지하며 렌더
  document.querySelectorAll('[data-list]').forEach(function (ul) {
    const key = ul.dataset.list;
    const items = data[key] || [];
    ul.dataset.count = items.length;
    ul.innerHTML = renderers[key](items);
  });

  // 탭 버튼에 개수 뱃지 추가
  const counts = {
    'tab-intl': (data.international || []).length,
    'tab-dom': (data.domestic || []).length,
    'tab-conf': (data.conference || []).length,
    'tab-proj': (data.project || []).length,
    'tab-patent': (data.patent || []).length,
  };
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    const c = counts[btn.dataset.tab];
    if (c != null) btn.innerHTML = btn.textContent + ' <span class="badge">' + c + '</span>';
  });

  // 검색 (현재 활성 탭의 목록 필터)
  const search = document.getElementById('pubSearch');
  if (search) {
    search.addEventListener('input', function () {
      const q = search.value.trim().toLowerCase();
      const panel = document.querySelector('.tab-panel.is-active');
      if (!panel) return;
      panel.querySelectorAll('.pub-list li').forEach(function (li) {
        li.style.display = li.textContent.toLowerCase().indexOf(q) > -1 ? '' : 'none';
      });
    });
  }
  // 탭 전환 시 검색어 초기화
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (search) {
        search.value = '';
        document.querySelectorAll('.pub-list li').forEach(function (li) { li.style.display = ''; });
      }
    });
  });
})();
