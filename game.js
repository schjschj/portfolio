/* =========================================================
   PORTFOLIO BOY — 송충종 경력 포트폴리오 (Game Boy style)
   ========================================================= */

// ---------------- DATA (경력기술서 기반) ----------------
const DATA = {
  name: '송충종',
  level: 13,
  career: '13년 4개월',
  email: 'schjschj@naver.com',
  region: '경기도 시흥시',
  cls: '생산·품질관리',
  intro: [
    '안녕하세요! 저는 송충종입니다.',
    '자동차 부품·2차전지 배터리 제조 현장에서 13년 4개월 동안 생산관리와 품질관리를 맡아 왔습니다. (헝가리 법인 근무 포함)',
    '프레스, 사출, 단조, 도금, 자동화설비 등 다양한 제조 공정을 운영했고, IATF16949·ISO·SQ·VDA6.3 QPA 인증 신규취득을 이끌었습니다.',
    '개발 → 양산 → 고객 대응까지 Full Process를 경험했습니다.',
    '좌우명: \"No pain, no gain. More pain, more achievement\"',
    '"끊임없는 개선과 실행력으로 고객 신뢰와 생산성 경쟁력을 높이겠습니다."',
  ],
  worlds: [
    {
      label: '대흥공업', sub: '2012.01~2019.12 · 8년',
      lines: [
        '㈜대흥공업 — 자동차 하네스 커넥터\n생산관리팀 · 과장 | 생산관리 (프레스)\n고객사: 한국단자(모회사), 경신, 유라',
        '▶ 생산계획 수립·실적관리, 고객납기·출하 대응\n▶ UPPH·OEE 등 생산 KPI 분석, 보고\n▶ 생산성 향상: 자동화 설비 도입, 가동율 개선',
        '▶ 신축 공장 확장·이전 프로젝트 PM\n  (공장 레이아웃·물류 동선 최적화)\n▶ MRP 수립, 원자재 발주 및 재고실사\n▶ 인적자원 Capa·투입 공수 분석, 현장 배치',
        '▶ 표준서·규정·매뉴얼 신규 작성\n▶ 원가절감 연구 및 보고\n▶ 현대모비스 SQ 인증 심사 전담\n  (IATF16949 / ISO 9001·14001 시스템관리)',
      ],
    },
    {
      label: '신명AT', sub: '2021.01~2023.05 · 2년 5개월',
      lines: [
        '㈜신명AT — 자동차 하네스 커넥터\n직무: 품질관리 (CNC)\n고객사: KET, 오토닉스',
        '▶ CS대응 (고객클레임, VOC, NCR 등\n  오프라인/온라인 대응)\n▶ 생산성 향상 활동\n  (비전 검사 자동화, 공정 최적화)',
        '▶ 시제품 개발 검증\n  (P1, P2, M-run 제작 샘플 검증)\n▶ 신규설비 종합효율(OEE) 분석',
        '▶ 완성품 시험검사 및 출하관리\n▶ 인증심사평가 전담 (SQ, IATF16949)',
      ],
    },
    {
      label: '비씨젠', sub: '2023.05~2023.11 · 헝가리',
      lines: [
        '㈜비씨젠(범천정밀) — 2차전지 배터리 CAP ASSY\n생산총괄팀 · 과장/팀장 | 생산관리\n고객사: 삼성SDI · 근무지: 헝가리',
        '▶ 고객 납기(RTF) 생산계획 수립 및 대응\n▶ 법인 월간 매출·재고평가 지표 산출\n▶ 경영진 대상 월간 손익/자산 보고',
        '▶ 고객 PO 관리, 출하 스케줄·물류업체 컨트롤\n▶ 완제품/반제품/자재 재고 실사·흐름 관리\n▶ 원소재/사출·가공부품/소모품 안전재고 최적화',
        '▶ MES 투입/소진 데이터 기반 로스율 분석\n▶ 헝가리 현지 SCM 최적화\n▶ ERP 완제품 출하 데이터 동기화\n▶ 고객사 담당자 소통 채널 전담',
      ],
    },
    {
      label: '상아프론테크', sub: '2024.03~재직중',
      lines: [
        '㈜상아프론테크 — 2차전지 각형 배터리 CAP Assy\n품질관리팀 · 파트장 | 품질관리\n고객사: 삼성SDI, SPE, GM · 헝가리/인천',
        '▶ 고객 이슈·VOC 접수→원인분석→대책 수립 주도\n▶ 신규개발 품질, CS업무 총괄\n▶ #1 자동화 라인 셋업·신규설비 검증',
        '▶ 신규 공장·자동화 설비 QPA, Run@Rate 합격\n▶ ESS 배터리 자동화 조립 3개 라인 MDT 참여\n▶ 고객사 VDA6.3 P1, QPA ONE PASS',
        '▶ IATF16949 기반 QMS 구축·운영·유지\n▶ PPAP 산출물 제출, 마일스톤·전부서 일정 조율\n▶ 협력사 심사·부적합 관리',
        '▶ SOP, CP, FMEA, MSA 등 표준문서 작성·개정\n▶ 딥러닝(세이지, 코그넥스)·룰베이스(옴론)\n  비전검사기 운용, 불량 검출력 개선\n▶ AI 업무자동화·교육 (SPC 분석 자동화)',
      ],
    },
  ],
  certs: [
    { label: '삼성전자서비스 인턴', sub: '삼성전자서비스 인재개발원', lines: ['[인턴] 삼성전자서비스 전문 엔지니어 양성 및 기술자격 검정 과정\n주관: 삼성전자서비스 인재개발원', '▶ PC/가전 제품군별 회로 분석, 증상 진단,\n  계측기 활용 고장 수리 실무 교육 이수\n▶ 삼성전자서비스 기술평가 합격을 통한\n  엔지니어 기술자격 취득'] },
    { label: 'MOS Master', sub: 'Microsoft', lines: ['[자격] MOS Master\nMicrosoft Office Specialist'] },
    { label: '워드프로세서 1급', sub: '2008.12 · 대한상공회의소', lines: ['[자격] 워드프로세서 1급\n2008.12 최종합격 · 대한상공회의소'] },
    { label: 'JLPT 3급', sub: '2010.06 · 일본어', lines: ['[어학] JLPT 3급 PASS\n2010.06'] },
    { label: '1종보통 운전면허', sub: '2005.01', lines: ['[자격] 1종보통 운전면허\n2005.01 · 경찰청'] },
    { label: '필리핀 어학연수', sub: '2008.03~2008.09', lines: ['[연수] 필리핀\n스피킹 6개월 커리큘럼 수료'] },
    { label: '일본 연수·어학원 근무', sub: '2010.05~2011.03', lines: ['[연수] 일본\n어학원 행정담당 근무'] },
    { label: '미국 어학연수', sub: '2018.11~2018.12', lines: ['[연수] 미국\nESL basic course 수료'] },
  ],
  skills: [
    { name: 'AI활용', lv: 80, desc: '업무자동화, 제조 DB 분석, AI 비전검사 구축, 바이브기획' },
    { name: 'OA(엑셀,PPT)', lv: 90, desc: '엑셀 VBA 활용, 파워포인트 보고서 작성, 오피스 전반' },
    { name: '데이터분석', lv: 90, desc: 'MES 가동율·부하율·수율·재고 등 경영 및 생산 핵심 KPI 지표 관리' },
    { name: '영어', lv: 70, desc: '미국/필리핀 어학연수, 고객 AUDIT 영어 대응, 헝가리 주재원' },
    { name: '일본어', lv: 80, desc: '인문계 일본어전공, 일본어학원 근무, 고객 AUDIT 일어 대응' },
    { name: '생산관리', lv: 90, desc: '생산계획·실적관리, MRP/SCM, 해외법인 맞춤 생산 프로세스 제정, ERP/MES 구축' },
    { name: '품질관리', lv: 90, desc: '품질인증심사(VDA6.3, SQ, IATF16949, ISO) 총괄, 고객 CS·AUDIT 대응, 협력사 심사' },
  ],
  badges: [
    { ico: '🛡', name: 'IATF16949', desc: '자동차 품질경영시스템 인증심사 대응·총괄' },
    { ico: '⚙', name: 'VDA6.3', desc: '독일자동차협회 공정 Audit 대응' },
    { ico: '★', name: 'SQ 인증', desc: 'SQ 인증 취득 및 유지 (대흥공업)' },
    { ico: '◆', name: 'ISO', desc: 'ISO 품질시스템 인증 및 유지' },
    { ico: '✉', name: 'APQP·PPAP', desc: '고객 대응: 심사평가, APQP, PPAP, 8D Report, VOC' },
    { ico: '✈', name: '해외법인', desc: '해외법인 맞춤 생산성 향상 프로젝트 수행 / 헝가리 주재원' },
  ],
  items: [
    { label: '자동화 조립설비', sub: '배터리 CAP', lines: ['[운영공정] 자동화 조립설비\n120공정 복합 Assembly line\n스카라 로봇 자동정렬기\nAI 학습 비전검사기\nFMS, MES 운용'] },
    { label: '고속프레스(비철)', sub: '커넥터', lines: ['[운영공정] 고속프레스 (비철)\n30~80톤 / 300~700SPM\n금형 130벌 / 제품 350종\n황동·인청동·석황동'] },
    { label: '성형프레스(고무)', sub: '커넥터', lines: ['[운영공정] 성형프레스 (고무)\n자동 진공, 인젝션 150~650톤'] },
    { label: '사출기(인서트)', sub: '커넥터', lines: ['[운영공정] 사출기 (인서트)\n배터리 팩 커버·탑·바텀 케이스 600톤\n전공정 생산 자동 사출 (스카라로봇)'] },
    { label: 'CNC 5축 밀링', sub: '전장부품', lines: ['[운영공정] CNC\n5축 가공 밀링머신'] },
    { label: 'NC 전용기', sub: '전장부품', lines: ['[운영공정] NC, 전용기\nMicropin, 로렛, 샤프트, 스프링'] },
    { label: '비전검사기', sub: '전장부품', lines: ['[운영공정] 비전검사기\nOMRON, COGNEX 설비 유지보수'] },
    { label: '정밀프레스(비철)', sub: '배터리 CAP', lines: ['[운영공정] 정밀프레스 (비철)\n200~800톤 / 30~80SPM\n금형 30벌 / 제품 50종\n알루미늄·황동'] },
  ],
  edu: [
    { label: '경기과학기술대학교', sub: '2005.03~2014.03', lines: ['[학력] 경기과학기술대학교 (경기도 시흥)\n전자통신과\n2005.03 ~ 2014.03'] },
    { label: '정왕고등학교', sub: '2002.02~2005.02', lines: ['[학력] 정왕고등학교 (경기도 시흥)\n인문계 (일본어전공)\n2002.02 ~ 2005.02'] },
    { label: '서해중학교', sub: '1999.02~2002.02', lines: ['[학력] 서해중학교 (경기도 시흥)\n1999.02 ~ 2002.02'] },
    { label: '서해초등학교', sub: '1995.02~1999.02', lines: ['[학력] 서해초등학교 (경기도 시흥)\n1995.02 ~ 1999.02'] },
  ],
};

const MENU = [
  { id: 'profile', label: '프로필' },
  { id: 'worlds', label: '경력' },
  { id: 'skills', label: '스킬' },
  { id: 'badges', label: '배지' },
  { id: 'items', label: '운영공정' },
  { id: 'edu', label: '학력' },
  { id: 'certs', label: '자격·연수' },
  { id: 'contact', label: '연락' },
];

// ---------------- SOUND (Web Audio 8-bit) ----------------
let muted = false, actx = null;
function beep(freq = 880, dur = 0.05, type = 'square', when = 0, vol = 0.06) {
  if (muted) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, actx.currentTime + when);
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + when + dur);
    o.connect(g).connect(actx.destination);
    o.start(actx.currentTime + when); o.stop(actx.currentTime + when + dur + 0.02);
  } catch (e) { /* ignore */ }
}
const SFX = {
  move: () => beep(660, 0.03),
  ok: () => { beep(880, 0.05); beep(1320, 0.07, 'square', 0.05); },
  back: () => beep(330, 0.06),
  type: () => beep(1200, 0.012, 'square', 0, 0.02),
  ding: () => { beep(1046, 0.08, 'square', 0, 0.08); beep(2093, 0.5, 'square', 0.09, 0.07); },
  sega: () => [[784,0],[988,.12],[1175,.24],[1568,.36]].forEach(([f,t]) => beep(f, t === .36 ? 0.6 : 0.12, 'square', t, 0.07)),
  clear: () => [523, 659, 784, 1046].forEach((f, i) => beep(f, 0.1, 'square', i * 0.1)),
};

// ---------------- AVATAR (pixel art, 16x16) ----------------
// 0=transparent 1=darkest 2=dark 3=light 4=lightest
const AVATAR = [
  '0000011111100000',
  '0000144444410000',
  '0001444444441000',
  '0011111111111100',
  '0001333333331000',
  '0001313333131000',
  '0001333333331000',
  '0001332222331000',
  '0000133333310000',
  '0000011111100000',
  '0001222442221000',
  '0012224444222100',
  '0122224114222210',
  '0133222442222310',
  '0011222222222100',
  '0001110000111000',
];
const PAL = [null, '#0f380f', '#306230', '#8bac0f', '#9bbc0f'];
function drawAvatar(cv) {
  const ctx = cv.getContext('2d');
  AVATAR.forEach((row, y) => [...row].forEach((c, x) => {
    if (c !== '0') { ctx.fillStyle = PAL[c]; ctx.fillRect(x, y, 1, 1); }
  }));
}

// ---------------- STATE ----------------
const screen = document.getElementById('screen');
const led = document.getElementById('powerLed');
const S = { scene: 'off', idx: 0, menuIdx: 0, dialog: null, booted: false };

const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const VISIBLE = 6;

function listHTML(items, idx, compact = false) {
  const vis = compact ? 8 : 3;
  const start = Math.max(0, Math.min(idx - 1, items.length - vis));
  return `<ul class="list${compact ? ' compact' : ''}">` + items.slice(start, start + vis).map((it, i) => {
    const n = start + i;
    const sub = it.sub ? (compact ? ` <small>· ${esc(it.sub)}</small>` : `<br><small>&nbsp;${esc(it.sub)}</small>`) : '';
    return `<li data-i="${n}" class="${n === idx ? 'sel' : ''}">${esc(it.label)}${sub}</li>`;
  }).join('') + '</ul>';
}

// ---------------- RENDER ----------------
function render() {
  let h = '';
  switch (S.scene) {
    case 'off':
      screen.classList.add('off');
      h = `<div class="view center" style="color:#3a4a2a">PRESS START<br><small>(전원 켜기)</small></div>`;
      break;
    case 'boot':
      screen.classList.remove('off');
      h = `<div class="view center sega-wrap"><div class="sega">${[...'SONG'].map((ch, i) => `<span style="--i:${i}">${ch}</span>`).join('')}</div><div class="sega-sub">CHOONGJONG</div></div>`;
      break;
    case 'title':
      h = `<div class="view center">
        <div class="title-sub">— PORTFOLIO QUEST —</div>
        <div class="title-name">송충종</div>
        <div class="title-sub">생산·품질관리 전문가<br>LV.${DATA.level} · EXP ${DATA.career}</div>
        <div class="blink">PRESS START</div>
        <div class="title-sub" style="margin-top:10px;font-size:.75em">© 2026 SONG CHOONGJONG</div>
      </div>`;
      break;
    case 'menu':
      h = `<div class="view">
        <div class="hdr">MENU <small>LV.${DATA.level} 송충종</small></div>
        <ul class="list menu-grid">${MENU.map((m, i) => `<li data-i="${i}" class="${i === S.menuIdx ? 'sel' : ''}">${m.label}</li>`).join('')}</ul>
        <div class="box" style="font-size:.85em">자동차 부품 · 2차전지 제조 현장 13년 4개월의 모험을 확인하세요!</div>
        <div class="hint">✚ 이동 · A 선택</div>
      </div>`;
      break;
    case 'profile':
      h = `<div class="view">
        <div class="hdr">PROFILE <small>No.001</small></div>
        <div class="profile">
          <canvas class="avatar" width="16" height="16"></canvas>
          <div class="stats">
            <div><span>NAME</span><b>${DATA.name}</b></div>
            <div><span>LV</span><b>${DATA.level}</b></div>
            <div><span>EXP</span><b>${DATA.career}</b></div>
            <div><span>CLASS</span><b>${DATA.cls}</b></div>
            <div><span>HOME</span><b>${DATA.region}</b></div>
          </div>
        </div>
        <div class="box" style="margin-top:8px;font-size:.85em">
          ★ 문제 해결 중심의 생산/공정 개선<br>★ 고객 신뢰를 위한 소통·협업<br>★ 개발→양산→고객대응 Full Process
        </div>
        <div class="hint">A 자기소개 · B 뒤로</div>
      </div>`;
      break;
    case 'worlds':
      h = `<div class="view"><div class="hdr">경력 <small>${S.idx + 1}/${DATA.worlds.length}</small></div>
        ${listHTML(DATA.worlds, S.idx)}<div class="hint">A 플레이 · B 뒤로</div></div>`;
      break;
    case 'items':
      h = `<div class="view"><div class="hdr">운영공정 <small>${S.idx + 1}/${DATA.items.length}</small></div>
        ${listHTML(DATA.items, S.idx, true)}<div class="hint">A 상세 · B 뒤로</div></div>`;
      break;
    case 'certs':
      h = `<div class="view"><div class="hdr">자격·연수 <small>${S.idx + 1}/${DATA.certs.length}</small></div>
        ${listHTML(DATA.certs, S.idx)}<div class="hint">A 상세 · B 뒤로</div></div>`;
      break;
    case 'edu':
      h = `<div class="view"><div class="hdr">학력 <small>${S.idx + 1}/${DATA.edu.length}</small></div>
        ${listHTML(DATA.edu, S.idx)}<div class="hint">A 상세 · B 뒤로</div></div>`;
      break;
    case 'skills': {
      const start = 0;
      h = `<div class="view"><div class="hdr">SKILLS <small>${S.idx + 1}/${DATA.skills.length}</small></div>
        <div style="flex:1">${DATA.skills.map((s, i) => {
          const n = start + i;
          return `<div class="skill-row" data-i="${n}"><b><span>${n === S.idx ? '▶' : '&nbsp;'} ${s.name}</span><span>LV.${Math.round(s.lv / 10)}</span></b>
            <div class="bar"><i data-w="${s.lv}"></i></div></div>`;
        }).join('')}</div>
        <div class="hint">A 상세 · B 뒤로</div></div>`;
      break;
    }
    case 'badges':
      h = `<div class="view"><div class="hdr">BADGES <small>${DATA.badges.length}개 획득</small></div>
        <div class="badges">${DATA.badges.map((b, i) => `<div data-i="${i}" class="badge ${i === S.idx ? 'sel' : ''}"><span class="ico">${b.ico}</span>${b.name}</div>`).join('')}</div>
        <div class="hint">✚ 이동 · A 상세 · B 뒤로</div></div>`;
      break;
    case 'contact':
      h = `<div class="view">
        <div class="hdr">CONTACT <small>통신 케이블 연결</small></div>
        <ul class="list">
          <li data-i="0" class="${S.idx === 0 ? 'sel' : ''}">✉ 이메일 보내기<br><small>&nbsp;${DATA.email}</small></li>
          <li data-i="1" class="${S.idx === 1 ? 'sel' : ''}">⌂ 지역<br><small>&nbsp;${DATA.region}</small></li>
        </ul>
        <div class="box" style="font-size:.85em">PLAYER 2 를 기다리고 있습니다...<br>함께 모험을 떠나요!</div>
        <div class="hint">A 선택 · B 뒤로</div>
      </div>`;
      break;
  }
  if (S.dialog) {
    h += `<div class="box dialog"><div class="txt">${esc(S.dialog.shown).replace(/\n/g, '<br>')}</div>${S.dialog.done ? '<span class="more">▼</span>' : ''}</div>`;
  }
  screen.innerHTML = h;
  fitDialog();
  const cv = screen.querySelector('canvas.avatar');
  if (cv) drawAvatar(cv);
  requestAnimationFrame(() => screen.querySelectorAll('.bar i').forEach((b) => (b.style.width = b.dataset.w + '%')));
}

// ---------------- DIALOG (typewriter) ----------------
// 대화창 글자 크기를 페이지 전체 텍스트 기준으로 자동 축소 (줄바꿈 방지)
function fitDialog() {
  const d = S.dialog, box = screen.querySelector('.dialog'), txt = box && box.querySelector('.txt');
  if (!d || !txt) return;
  if (d.fs == null) {
    const shown = txt.innerHTML;
    txt.innerHTML = esc(d.lines[d.page]).replace(/\n/g, '<br>');
    let fs = 100;
    txt.style.fontSize = fs + '%';
    while (fs > 85 && box.scrollHeight > box.clientHeight + 1) {
      fs -= 3; txt.style.fontSize = fs + '%';
    }
    d.fs = fs; txt.innerHTML = shown;
  }
  txt.style.fontSize = d.fs + '%';
}
function openDialog(lines, onEnd) {
  S.dialog = { lines, page: 0, shown: '', done: false, onEnd };
  typePage();
}
function typePage() {
  const d = S.dialog, full = d.lines[d.page];
  d.shown = ''; d.done = false; d.fs = null;
  clearInterval(d.timer);
  let i = 0;
  d.timer = setInterval(() => {
    d.shown = full.slice(0, ++i);
    if (i % 2 === 0 && full[i - 1] !== ' ') SFX.type();
    if (i >= full.length) { d.done = true; clearInterval(d.timer); }
    render();
  }, 28);
}
function advanceDialog() {
  const d = S.dialog;
  if (!d.done) { clearInterval(d.timer); d.shown = d.lines[d.page]; d.done = true; render(); return; }
  if (d.page < d.lines.length - 1) { d.page++; SFX.move(); typePage(); return; }
  const cb = d.onEnd; S.dialog = null; render(); cb && cb();
}

// ---------------- FLOW ----------------
function go(scene) { S.scene = scene; S.idx = 0; render(); }

function boot() {
  led.classList.add('on');
  go('boot');
  setTimeout(SFX.sega, 1500);
  setTimeout(() => go('title'), 4000);
}

function listLen() {
  return { worlds: DATA.worlds.length, certs: DATA.certs.length, items: DATA.items.length, edu: DATA.edu.length, skills: DATA.skills.length, badges: DATA.badges.length, contact: 2 }[S.scene] || 0;
}

function press(key) {
  if (key === 'mute') return toggleMute();
  if (S.scene === 'off') { if (key === 'start' || key === 'a') boot(); return; }
  if (S.scene === 'boot') return;

  // B = 언제든 메인 메뉴로
  if (key === 'b') {
    if (S.dialog) { clearInterval(S.dialog.timer); S.dialog = null; }
    SFX.back(); S.scene = 'menu'; S.idx = 0; render(); return;
  }

  if (S.dialog) {
    if (key === 'a' || key === 'start') advanceDialog();
    return;
  }

  if (S.scene === 'title') {
    if (key === 'start' || key === 'a') { SFX.ok(); go('menu'); }
    return;
  }

  if (S.scene === 'menu') {
    const n = MENU.length;
    if (key === 'up') S.menuIdx = (S.menuIdx - 2 + n) % n;
    else if (key === 'down') S.menuIdx = (S.menuIdx + 2) % n;
    else if (key === 'left' || key === 'right') { const t = S.menuIdx ^ 1; if (t < n) S.menuIdx = t; }
    else if (key === 'a' || key === 'start') {
      const id = MENU[S.menuIdx].id; SFX.ok();
      if (id === 'reset') { go('title'); return; }
      go(id);
      if (id === 'profile') openDialog(DATA.intro);
      return;
    } else return;
    SFX.move(); render(); return;
  }

  // sub pages

  const n = listLen();
  const step = S.scene === 'badges' ? { up: -2, down: 2, left: -1, right: 1 } : { up: -1, down: 1, left: -1, right: 1 };
  if (step[key] !== undefined && n) {
    S.idx = (S.idx + step[key] + n) % n; SFX.move(); render(); return;
  }
  if (key === 'a' || key === 'start') {
    SFX.ok();
    switch (S.scene) {
      case 'profile': openDialog(DATA.intro); break;
      case 'worlds': openDialog(DATA.worlds[S.idx].lines); break;
      case 'items': openDialog(DATA.items[S.idx].lines); break;
      case 'edu': openDialog(DATA.edu[S.idx].lines); break;
      case 'certs': openDialog(DATA.certs[S.idx].lines); break;
      case 'skills': { const s = DATA.skills[S.idx]; openDialog([`[${s.name}] LV.${Math.round(s.lv / 10)}\n${s.desc}`]); break; }
      case 'badges': { const b = DATA.badges[S.idx]; openDialog([`${b.ico} ${b.name} 배지\n${b.desc}`]); break; }
      case 'contact':
        if (S.idx === 0) openDialog([`이메일 앱을 엽니다...\n${DATA.email}`], () => (location.href = `mailto:${DATA.email}`));
        else openDialog([`${DATA.region}에서 활동 중입니다!`]);
        break;
    }
  }
}

function toggleMute() {
  muted = !muted;
  document.getElementById('muteBtn').textContent = muted ? '🔇 SOUND OFF' : '🔊 SOUND ON';
}

// ---------------- INPUT ----------------
const KEYMAP = {
  ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
  z: 'a', Z: 'a', Enter: 'a', x: 'b', X: 'b', Escape: 'b', Backspace: 'b',
  ' ': 'start', Shift: 'select', m: 'mute', M: 'mute',
};
document.addEventListener('keydown', (e) => {
  const k = KEYMAP[e.key];
  if (!k) return;
  e.preventDefault();
  const el = document.querySelector(`[data-key="${k}"]`);
  if (el) { el.classList.add('pressed'); setTimeout(() => el.classList.remove('pressed'), 120); }
  press(k);
});
document.querySelectorAll('[data-key]').forEach((el) => {
  el.addEventListener('pointerdown', (e) => { e.preventDefault(); press(el.dataset.key); });
});
document.getElementById('muteBtn').addEventListener('click', toggleMute);
screen.addEventListener('click', (e) => {
  if (S.scene === 'off') return press('start');
  const t = e.target.closest('[data-i]');
  if (t && !S.dialog) {
    const i = +t.dataset.i;
    if (S.scene === 'menu') S.menuIdx = i; else S.idx = i;
  }
  press('a');
});

render();
