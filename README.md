# 공간정보융합연구실 (Geo-Information Convergence Lab.) 홈페이지

국립창원대학교 스마트그린공학부 환경에너지공학전공 공간정보융합연구실 홈페이지입니다.
순수 HTML/CSS/JavaScript로 만든 정적 사이트이며, 별도 설치 없이 브라우저에서 바로 열립니다.

소개 PPT와 논문/학술대회/특허 docx 파일에서 내용을 추출해 채웠습니다.

## 📁 파일 구조

```
.
├── index.html        # 메인 / 소개
├── professor.html    # 멤버 > 지도교수
├── members.html      # 멤버 > 연구원 (박사/석사/학부연구생)
├── alumni.html       # 멤버 > 졸업생 (박사/석사 구분)
├── research.html     # 연구/논문 (연구분야·논문·학술대회·프로젝트·특허 탭)
├── equipment.html    # 장비보유현황 (사진 카드)
├── news.html         # 공지/뉴스
├── contact.html      # 연락처 / 오시는 길
└── assets/
    ├── css/style.css     # 공통 디자인 (색상·폰트 한 곳에서 관리)
    ├── js/main.js        # 모바일 메뉴, 탭 기능
    ├── js/pubs-data.js   # 논문/학술대회/특허/프로젝트 데이터 (★ 실적 추가·수정은 여기서)
    ├── js/research.js    # 연구/논문 페이지 렌더링 + 검색
    ├── js/alumni.js      # 졸업생 명단 + 졸업논문 링크 (★ 졸업생 추가는 여기서)
    ├── img/members/      # 멤버 사진 (professor/phd/ms/undergrad)
    ├── img/equipment/    # 장비 사진
    └── thesis/           # 졸업논문 PDF (파일명 = 졸업생 이름.pdf)
```

> 메뉴의 **멤버**는 드롭다운으로 지도교수 / 연구원 / 졸업생 3개 페이지로 나뉩니다.

## 📊 연구 실적 수정 방법 (중요)

논문·학술대회·특허는 `assets/js/pubs-data.js` 파일 한 곳에서 관리합니다.
HTML을 건드릴 필요 없이 이 파일의 목록에 항목을 추가/수정하면 연구/논문 페이지에 자동 반영됩니다.

- 국제·국내논문: `{ "title": "...", "venue": "학술지명", "date": "'26.03", "url": "https://..." }`
- 학술대회: `{ "title": "...", "date": "2025.11.23", "venue": "학회명" }`
- 프로젝트: `{ "title": "...", "agency": "지원기관", "date": "'26.03.~ present" }`
- 특허: `{ "no": "10-..." , "title": "...", "date": "2025.05.07" }`

각 목록의 맨 위가 최신 항목입니다. 새 실적은 목록 맨 앞에 추가하세요.

## 📰 공지/뉴스 추가·수정

`assets/js/news-data.js` 파일을 직접 편집합니다. 배열 맨 앞에 새 항목을 추가하면
목록과 상세 페이지에 자동 반영됩니다 (`id`는 겹치지 않는 새 숫자, `body`는 HTML 사용 가능).

## 🎓 졸업생 추가 방법

`assets/js/alumni.js`의 배열에 추가합니다. `degree`로 박사("phd")·석사("ms")를 구분합니다.
- 졸업논문이 있으면: PDF를 `assets/thesis/홍길동.pdf`로 넣고 `{ degree:"ms", name:"홍길동", en:"Gil-Dong Hong", grad:"2025.02", thesis:true }`
- 졸업논문이 없으면: `thesis:false` (이름만 표시, "졸업논문 미등록")
- 박사는 `areas`, `email` 항목도 표시됩니다.

## 🖼️ 멤버 사진 추가 방법

`assets/img/members/` 아래 해당 폴더(professor/phd/ms/undergrad)에 `이름.png`로 넣고,
`members.html`의 해당 `<img src="...">` 경로를 맞춰주면 됩니다.

## 🖥️ 미리보기 방법

탐색기에서 `index.html`을 더블클릭하면 브라우저에서 바로 열립니다.

## ✏️ 수정 가이드

- **연구실 이름**: 각 HTML 파일의 `○○ 연구실`, `□□학과` 등을 찾아 바꾸세요.
- **색상 변경**: `assets/css/style.css` 맨 위 `:root`의 `--color-primary` 값을 학교/연구실 상징색으로 바꾸면 전체 색이 한 번에 바뀝니다.
- **사진 추가**: `assets/img/` 폴더에 사진을 넣고, HTML의 `src="assets/img/placeholder.svg"`를 실제 파일명으로 바꾸세요.
- **내용 채우기**: `○○`, `□□`, `△△`, `홍길동`, `예시` 등으로 표시된 부분이 채워야 할 자리입니다.

## 🚀 나중에 배포할 때

정적 사이트이므로 아래 어디든 폴더째 올리면 됩니다.
- **GitHub Pages** (무료)
- 학과/대학 웹 서버 (FTP 업로드)
- Netlify, Vercel 등 무료 호스팅

배포 방법이 필요하면 알려주세요.
