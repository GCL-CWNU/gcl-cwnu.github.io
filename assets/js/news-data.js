// 공지/뉴스 데이터
// 새 소식 추가: 배열 맨 앞에 항목을 추가하세요. id는 겹치지 않는 새 숫자면 됩니다.
// body는 HTML 사용 가능 (<p>, <a>, <ul> 등). 작성 후 news.html과 상세 페이지에 자동 반영됩니다.
window.NEWS = [
  {
    id: 5,
    date: "2026.03",
    tag: "논문",
    title: "국내논문 게재: UAV 다중분광 영상과 머신러닝을 활용한 낙동강 수계의 chlorophyll-a 농도 추정",
    body: `
      <p>우리 연구실의 논문이 <strong>한국지리정보학회지</strong>에 게재되었습니다.</p>
      <ul>
        <li><strong>제목</strong>: UAV 다중분광 영상과 머신러닝을 활용한 낙동강 수계의 chlorophyll-a 농도 추정</li>
        <li><strong>학술지</strong>: 한국지리정보학회지 (2026.03)</li>
        <li><strong>DOI</strong>: <a href="https://doi.org/10.11108/kagis.2026.29.1.042" target="_blank" rel="noopener">10.11108/kagis.2026.29.1.042</a></li>
      </ul>
      <p>무인항공기(UAV) 다중분광 영상과 머신러닝 기법을 결합하여 낙동강 수계의
      클로로필-a 농도를 추정한 연구로, 하천 녹조의 효율적 모니터링 가능성을 제시했습니다.</p>`
  },
  {
    id: 4,
    date: "2025.11",
    tag: "학술대회",
    title: "ICEST 국제학술대회(일본) 참가 — 탄소중립 캠퍼스 등 3건 발표 및 우수포스터상 수상!!",
    body: `
      <p>2025년 11월 일본에서 열린 <strong>ICEST 국제학술대회</strong>에 참가하여 3건의 연구를 발표했습니다.</p>
      <ul>
        <li>A Case Study on Carbon-Neutral Campus Development: Greenhouse Gas Analysis at a University Site</li>
        <li>Analysis of Teachers and Students Perceptions and Needs Regarding School Environmental Education</li>
        <li>Integrated Assessment of Heatwave Risk in the Republic of Korea Using Hazard, Exposure, and Vulnerability Indicators</li>
      </ul>
      <p>Integrated Assessment of Heatwave Risk in the Republic of Korea Using Hazard, Exposure, and Vulnerability Indicators을 발표한
        김태경 박사과정 학생이 우수 포스터상을 수상하였습니다.</p>
      <p>학술대회 참가를 통해 탄소중립·환경교육 분야의 국제 연구 동향을 공유하고
      해외 연구자들과 교류하는 뜻깊은 시간을 가졌습니다.</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:24px;">
        <figure style="flex:1;min-width:240px;margin:0;">
          <img src="assets/img/news/ICEST_bestposteraward.jpg" alt="ICEST 우수 포스터상 수상"
            style="width:100%;border-radius:12px;border:1px solid var(--color-border);box-shadow:var(--shadow);" />
        </figure>
        <figure style="flex:1;min-width:240px;margin:0;">
          <img src="assets/img/news/ICEST_bestposteraward_1.jpg" alt="ICEST 우수 포스터상 시상식"
            style="width:100%;border-radius:12px;border:1px solid var(--color-border);box-shadow:var(--shadow);" />
        </figure>
      </div>
      <p style="color:var(--color-text-soft);font-size:0.88rem;margin-top:8px;">ICEST 2025 우수 포스터상(Best Poster Award) 수상 — 김태경 박사과정</p>`
  },
  {
    id: 3,
    date: "2025.05",
    tag: "특허",
    title: "특허 등록: 드론 및 인공지능을 활용한 도시 공간정보 매핑 방법 및 장치",
    body: `
      <p>우리 연구실의 기술이 특허로 등록되었습니다.</p>
      <ul>
        <li><strong>특허명</strong>: 드론 및 인공지능을 활용한 도시 공간정보 매핑 방법 및 장치</li>
        <li><strong>등록번호</strong>: 10-2805686</li>
        <li><strong>등록일</strong>: 2025.05.07</li>
      </ul>
      <p>드론(UAV) 영상과 인공지능을 결합해 도시 공간정보를 자동으로 구축하는
      기술로, 연구실이 보유한 8번째 등록 특허입니다.</p>`
  },
  {
    id: 1,
    date: "상시",
    tag: "기술창업",
    title: "공간정보융합연구실 졸업생 송봉근 박사님, (주)엔비랩스 창업으로 새로운 도전 시작!",
    body: `
      <p>공간정보융합연구실 졸업생 송봉근 박사님께서 <strong>ENVILABS를 창업하셨습니다.</strong></p>
      <p><strong>ENVILABS는 기후재난 및 탄소중립을 위한 첨단 솔루션을 개발하는 기후테크 전문기업입니다.</strong></p>
      <ul>
      </ul>
      <p><strong>홈페이지</strong>: <a href="https://envi-labs.com/" target="_blank" rel="noopener">https://envi-labs.com/</a></p>`
  },
  {
    id: 0,
    date: "상시",
    tag: "모집",
    title: "신입 연구원(대학원생·학부연구생) 모집",
    body: `
      <p>공간정보융합연구실에서 함께 연구할 <strong>대학원생(석사·박사과정)과 학부연구생</strong>을 상시 모집합니다.</p>
      <p><strong>이런 분을 환영합니다</strong></p>
      <ul>
        <li>드론(UAV)·GIS·원격탐사·GeoAI 분야에 관심 있는 분</li>
        <li>도시 열환경, 대기질, 수환경 등 환경 문제 해결에 관심 있는 분</li>
      </ul>
      <p><strong>지원 방법</strong>: 관심 분야와 간단한 자기소개를 담아 지도교수님 이메일
      (<a href="mailto:landpkh@changwon.ac.kr">landpkh@changwon.ac.kr</a>)로 문의해 주세요.</p>`
  }
];
