(function () {
  var cfg = window.SITE_NAV_CONFIG || { current: '', base: '' };
  var base = cfg.base || '';

  // Subject registry — add a new entry here the day you add a new subject page.
  // status: "live" | "soon"
  var SUBJECTS = [
    { id: 'digital-logic',  label: 'Digital Logic',   href: base + 'subjects/digital-logic.html',  status: 'live' },
    { id: 'c-programming',  label: 'C Programming',   href: base + 'subjects/c-programming.html',  status: 'live' },
    { id: 'data-structures', label: 'Data Structures', href: base + 'subjects/data-structures.html', status: 'live' },
    { id: 'algorithms',     label: 'Algorithms',      href: base + 'subjects/algorithms.html',     status: 'live' },
    { id: 'operating-systems', label: 'Operating Systems', href: base + 'subjects/operating-systems.html', status: 'live' },
    { id: 'theory-of-computation', label: 'Theory of Computation', href: base + 'subjects/theory-of-computation.html', status: 'live' },
    { id: 'discrete-mathematics', label: 'Discrete Mathematics', href: base + 'subjects/discrete-mathematics.html', status: 'live' },
    { id: 'compiler-design', label: 'Compiler Design', href: base + 'subjects/compiler-design.html', status: 'live' },
    { id: 'dbms', label: 'DBMS', href: base + 'subjects/dbms.html', status: 'live' },
    { id: 'computer-organization', label: 'Computer Organization', href: base + 'subjects/computer-organization.html', status: 'live' },
    { id: 'linear-algebra', label: 'Linear Algebra',  href: base + 'subjects/linear-algebra.html', status: 'live' },
    { id: 'calculus',       label: 'Calculus',        href: base + 'subjects/calculus.html',       status: 'live' },
    { id: 'probability-statistics', label: 'Probability & Stats', href: base + 'subjects/probability-statistics.html', status: 'live' },
    { id: 'aptitude',       label: 'Aptitude',        href: base + 'subjects/aptitude.html',       status: 'live' },
    { id: 'computer-networks', label: 'Computer Networks', href: base + 'subjects/computer-networks.html', status: 'live' },
    { id: 'analysis',       label: 'Trend Analysis',  href: base + 'subjects/analysis.html',       status: 'live' }
  ];

  var style = document.createElement('style');
  style.textContent = [
    '.gnav{position:sticky;top:0;z-index:9999;height:48px;display:flex;align-items:center;',
    'gap:3px;padding:0 18px;background:rgba(6,7,8,0.85);backdrop-filter:blur(14px) saturate(140%);',
    '-webkit-backdrop-filter:blur(14px) saturate(140%);',
    'border-bottom:1px solid rgba(203,163,107,0.14);font-family:"Inter",sans-serif;overflow-x:auto;',
    'white-space:nowrap;box-shadow:0 1px 24px rgba(0,0,0,0.35);}',
    '.gnav::-webkit-scrollbar{height:0px;}',
    '.gnav a{color:#a39d92;text-decoration:none;font-size:12.5px;padding:7px 12px;border-radius:7px;',
    'transition:background .18s,color .18s;flex-shrink:0;letter-spacing:.01em;}',
    '.gnav a:hover{background:rgba(255,255,255,0.045);color:#f2ede4;}',
    '.gnav a.gnav-active{color:#e6c58e;background:rgba(203,163,107,0.1);}',
    '.gnav a.gnav-soon{opacity:.35;pointer-events:none;}',
    '.gnav .gnav-brand{font-family:"Fraunces",serif;font-weight:600;font-size:13.5px;',
    'color:#cba36b;letter-spacing:.01em;margin-right:12px;flex-shrink:0;text-decoration:none;}',
    '.gnav .gnav-sep{width:1px;height:20px;background:#26272e;margin:0 8px;flex-shrink:0;}'
  ].join('');
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.className = 'gnav';

  var brand = document.createElement('a');
  brand.className = 'gnav-brand';
  brand.href = base + 'index.html';
  brand.textContent = 'GATE CSE 2027 ▸';
  bar.appendChild(brand);

  var sep = document.createElement('div');
  sep.className = 'gnav-sep';
  bar.appendChild(sep);

  var home = document.createElement('a');
  home.href = base + 'index.html';
  home.textContent = 'Home';
  if (cfg.current === 'home') home.className = 'gnav-active';
  bar.appendChild(home);

  SUBJECTS.forEach(function (s) {
    var a = document.createElement('a');
    a.href = s.status === 'live' ? s.href : '#';
    a.textContent = s.status === 'live' ? s.label : s.label + ' (soon)';
    if (s.id === cfg.current) a.className = 'gnav-active';
    if (s.status !== 'live') a.className = (a.className + ' gnav-soon').trim();
    bar.appendChild(a);
  });

  document.body.insertBefore(bar, document.body.firstChild);
})();
