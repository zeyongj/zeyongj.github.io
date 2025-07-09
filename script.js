let ap = [], ar = [], pm = [], fa = [], nlm = [];

async function loadData() {
  const base = 'https://raw.githubusercontent.com/zeyongj/zeyongj.github.io/main/data/';

  ap = await fetch(base + 'ap.json').then(r => r.json());
  ar = await fetch(base + 'ar.json').then(r => r.json());

  pm = await fetch(base + 'pm.csv').then(r => r.text()).then(txt => {
    const fix = txt.replace(/"([^"]*)\n([^"]*)"/g, (_, a, b) => `"${a} ${b}"`);
    return Papa.parse(fix, { header: true, skipEmptyLines: true, quoteChar: '"' }).data
      .map(r => ({
        p: ((r['PROJ #'] || r['Proj#'] || '').replace(/"/g,'').trim().slice(0,4)),
        pm: (r['PM'] || '').split('\n')[0].trim()
      })).filter(r => r.p);
  });

  fa = await fetch(base + 'fa.csv').then(r => r.text()).then(txt =>
    Papa.parse(txt, { header: true, skipEmptyLines: true }).data
      .map(r => ({
        p: (r['Proj#'] || '').trim().slice(0,4),
        fa: (r['FA'] || '').trim()
      })).filter(r => r.p)
  );

  nlm = await fetch(base + 'nlm.csv').then(r => r.text()).then(txt =>
    Papa.parse(txt, { header: true }).data
      .map(r => (r['Proj#'] || '').trim().slice(0,4)).filter(p => p)
  );
}

function findPerson(k, data) {
  const num = +k;
  for (const e of data) {
    const ps = (e.Portfolio || '').trim();
    const inc = (e.Include || '').split(',').map(s => s.trim()).filter(Boolean);
    const exc = (e.Exclude || '').split(',').map(s => s.trim()).filter(Boolean);

    if (inc.includes(k)) return e.Name;

    if (ps.endsWith('+')) {
      const start = +ps.slice(0, -1);
      if (num >= start && !exc.includes(k)) return e.Name;
    } else if (ps.includes('-')) {
      const [a, b] = ps.split('-').map(Number);
      if (num >= a && num <= b && !exc.includes(k)) return e.Name;
    }
  }
  return null;
}

// Show last modified timestamp
(() => {
  const el = document.getElementById('last-modified');
  if (el) {
    const dt = new Date(document.lastModified);
    el.textContent = 'Site last updated: ' + dt.toLocaleString();
  }
})();

document.getElementById('btn').onclick = async () => {
  const key = document.getElementById('q').value.trim().slice(0,4);
  const resEl = document.getElementById('res');
  resEl.textContent = '';
  if (!key) return;
  await loadData();
  if (nlm.includes(key)) return resEl.textContent = `Project ${key} is NLM.`;

  const pmRow = pm.find(r => r.p === key);
  if (!pmRow) return resEl.textContent = 'No result';

  const faRow = fa.find(r => r.p === key);
  const apn = findPerson(key, ap) || '–';
  const arn = findPerson(key, ar) || '–';
  const fan = faRow ? faRow.fa : '–';

  resEl.innerHTML = `
    <p>Project number: ${key}</p>
    <p>AP name: ${apn}</p>
    <p>AR name: ${arn}</p>
    <p>FA name: ${fan}</p>
    <p>PM name: ${pmRow.pm}</p>`;
};
