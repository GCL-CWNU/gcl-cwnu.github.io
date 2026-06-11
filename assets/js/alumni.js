// 졸업생(Alumni) 데이터 + 렌더링
// degree: "phd" 또는 "ms" / thesis: 졸업논문 PDF가 assets/thesis/이름.pdf 로 있으면 true, 없으면 false
// 새 졸업생 추가 시 이 배열에 한 줄 추가하세요.
window.ALUMNI = [
  // ===== 박사 (Ph.D.) =====
  { degree: "phd", name: "김성현", en: "Seoung-Hyeon Kim", grad: "2024.02", thesis: true,  areas: "Urban thermal environment · Urban climate · GIS", email: "sh39660@gmail.com" },
  { degree: "phd", name: "박건웅", en: "Geon-Ung Park",     grad: "2024.02", thesis: true,  areas: "Non-point pollutants & Remote Sensing · GeoAI · GIS", email: "ubps0380@gmail.com" },
  { degree: "phd", name: "서경호", en: "Kyeong-Ho Seo",     grad: "2023.02", thesis: true,  areas: "PM2.5 · GIS", email: "seokh135@changwon.ac.kr" },
  { degree: "phd", name: "김경아", en: "Gyeong-Ah Kim",     grad: "2020.02", thesis: false, areas: "Cool Roof · GIS", email: "wing1128@naver.com" },
  { degree: "phd", name: "송봉근", en: "Bong-Geun Song",    grad: "2014.02", thesis: true,  areas: "Urban Climate · GIS", email: "envsong@changwon.ac.kr" },

  // ===== 석사 (M.S.) =====
  { degree: "ms", name: "정다은", en: "Da-Eun Jeong",   grad: "2025.02", thesis: true },
  { degree: "ms", name: "이호인", en: "Ho-In Lee",      grad: "2023.08", thesis: true },
  { degree: "ms", name: "이수아", en: "Su-Ah Lee",      grad: "2023.02", thesis: true },
  { degree: "ms", name: "조정욱", en: "Jung-Uk Jo",     grad: "2023.02", thesis: true },
  { degree: "ms", name: "문한솔", en: "Han-Sol Mun",    grad: "2021.02", thesis: true },
  { degree: "ms", name: "정현진", en: "Hyeon-Jin Jeong", grad: "2021.02", thesis: true },
  { degree: "ms", name: "이승원", en: "Seung-won Lee",  grad: "2019.02", thesis: true },
  { degree: "ms", name: "정다인", en: "Da-In Jeong",    grad: "2015.09", thesis: true },
  { degree: "ms", name: "최진환", en: "Jin-Hwan Choi",  grad: "2015.02", thesis: true },
  { degree: "ms", name: "이화영", en: "Hwa-Yeong Lee",  grad: "2014.02", thesis: true },
  { degree: "ms", name: "백수경", en: "Su-Kyung Baek",  grad: "2014.02", thesis: true },
  { degree: "ms", name: "김병훈", en: "Byeong-Hun Kim", grad: "2013.02", thesis: true },
  { degree: "ms", name: "변지혜", en: "Ji-Hye Byeon",   grad: "2012.02", thesis: true },
  { degree: "ms", name: "김호민", en: "Ho-Min Kim",     grad: "2012.06", thesis: true },
  { degree: "ms", name: "최상록", en: "Sang-Rok Choi",  grad: "2009.03", thesis: true }
];

(function () {
  function esc(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function row(a) {
    const file = (typeof a.thesis === 'string') ? a.thesis : a.name + '.pdf';
    const link = a.thesis
      ? '<a href="assets/thesis/' + encodeURIComponent(file) + '" target="_blank" rel="noopener">졸업논문 보기 (PDF)</a>'
      : '<span style="color:var(--color-text-soft);font-size:0.9rem;">졸업논문 미등록</span>';
    const meta = [
      a.en ? esc(a.en) : '',
      a.grad ? '졸업 ' + esc(a.grad) : '',
      a.areas ? esc(a.areas) : ''
    ].filter(Boolean).join(' · ');
    return '<li style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;">' +
      '<span style="flex:1;min-width:220px;">' +
        '<span class="pub-title">' + esc(a.name) + '</span>' +
        (meta ? '<div class="pub-authors">' + meta + '</div>' : '') +
      '</span>' +
      '<span style="white-space:nowrap;">' + link + '</span>' +
    '</li>';
  }
  function fill(id, degree) {
    const ul = document.getElementById(id);
    if (!ul) return;
    ul.innerHTML = (window.ALUMNI || []).filter(a => a.degree === degree).map(row).join('');
  }
  fill('alumni-phd', 'phd');
  fill('alumni-ms', 'ms');
})();
