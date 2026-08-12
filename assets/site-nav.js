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
    { id: 'linear-algebra', label: 'Linear Algebra',  href: base + 'subjects/linear-algebra.html', status: 'live' },
    { id: 'calculus',       label: 'Calculus',        href: base + 'subjects/calculus.html',       status: 'live' },
    { id: 'probability-statistics', label: 'Probability & Stats', href: base + 'subjects/probability-statistics.html', status: 'live' },
    { id: 'aptitude',       label: 'Aptitude',        href: base + 'subjects/aptitude.html',       status: 'live' },
    { id: 'analysis',       label: 'Trend Analysis',  href: base + 'subjects/analysis.html',       status: 'live' }
  ];

  var style = document.createElement('style');
  style.textContent = [
    '.gnav{position:sticky;top:0;z-index:9999;height:48px;display:flex;align-items:center;',
    'gap:4px;padding:0 16px;background:rgba(7,21,35,0.92);backdrop-filter:blur(8px);',
    'border-bottom:1px solid #1a3c56;font-family:"IBM Plex Sans",sans-serif;overflow-x:auto;',
    'white-space:nowrap;}',
    '.gnav::-webkit-scrollbar{height:0px;}',
    '.gnav a{color:#8fadc0;text-decoration:none;font-size:12.5px;padding:6px 10px;border-radius:5px;',
    'transition:background .15s,color .15s;flex-shrink:0;}',
    '.gnav a:hover{background:#153351;color:#e7f1f5;}',
    '.gnav a.gnav-active{color:#5ad1e6;background:#153351;}',
    '.gnav a.gnav-soon{opacity:.4;pointer-events:none;}',
    '.gnav .gnav-brand{font-family:"Space Grotesk",sans-serif;font-weight:600;font-size:13px;',
    'color:#f2a65a;letter-spacing:.02em;margin-right:10px;flex-shrink:0;text-decoration:none;}',
    '.gnav .gnav-sep{width:1px;height:20px;background:#22516f;margin:0 6px;flex-shrink:0;}'
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
