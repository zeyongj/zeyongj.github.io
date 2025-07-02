let ap = [], ar = [], pm = [], nlm = [];

async function loadData() {
  const base = 'https://raw.githubusercontent.com/zeyongj/zeyongj.github.io/main/data/';

  // Load AP and AR JSON
  ap = await fetch(base + 'ap.json').then(r => r.json());
  ar = await fetch(base + 'ar.json').then(r => r.json());

  // Load PM CSV
  pm = await fetch(base + 'pm.csv')
    .then(r => r.text())
    .then(txt => {
      const data = Papa.parse(txt, { header: true }).data;
      return data.map(r => {
          const rawProj = r['Proj#'] || '';
          const rawPM = r['PM'] || '';
          return { p: rawProj.trim().slice(0,4), pm: rawPM.trim() };
        })
        .filter(r => r.p);
    });

  // Load NLM CSV
  nlm = await fetch(base + 'nlm.csv')
    .then(r => r.text())
    .then(txt => {
      const data = Papa.parse(txt, { header: true }).data;
      return data
        .map(r => (r['Proj#'] || '').trim().slice(0,4))
        .filter(p => p);
    });
}

function findPerson(k, data) {
  const num = +k;
  for (let e of data) {
    const ps = (e.Portfolio || '').trim();
    const inc = (e.Include || '').split(',').map(s => s.trim()).filter(Boolean);
    const exc = (e.Exclude || '').split(',').map(s => s.trim()).filter(Boolean);

    if (ps.endsWith('+')) {
      const start = +ps.slice(0, -1);
      if (num >= start) {
        if (exc.includes(k)) continue;
        return e.Name;
      }
    } else if (ps.includes('-')) {
      const [a, b] = ps.split('-').map(Number);
      if (num >= a && num <= b) {
        if (inc.length && !inc.includes(k)) continue;
        if (exc.includes(k)) continue;
        return e.Name;
      }
    }
  }
  return null;
}

// Setup search handler
document.getElementById('btn').onclick = async () => {
  const key = document.getElementById('q').value.trim().slice(0,4);
  const resEl = document.getElementById('res');
  resEl.textContent = ''; // clear previous output

  if (!key) return;

  await loadData();

  // NLM check
  if (nlm.includes(key)) {
    return resEl.textContent = `Project ${key} is NLM.`;
  }

  // PM lookup
  const pmRow = pm.find(r => r.p === key);
  if (!pmRow) return resEl.textContent = 'No result';

  const apn = findPerson(key, ap) || '–';
  const arn = findPerson(key, ar) || '–';

  resEl.innerHTML = `
    <p>Project number: ${key}</p>
    <p>AP name: ${apn}</p>
    <p>AR name: ${arn}</p>
    <p>PM name: ${pmRow.pm}</p>`;
};
