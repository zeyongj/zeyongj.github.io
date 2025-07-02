let ap = [], ar = [], pm = [], nlm = [];

async function loadData() {
  ap = await fetch('https://raw.githubusercontent.com/zeyongj/zeyongj.github.io/main/data/ap.json')
    .then(r => r.json());
  ar = await fetch('https://raw.githubusercontent.com/zeyongj/zeyongj.github.io/main/data/ar.json')
    .then(r => r.json());
  pm = await fetch('https://raw.githubusercontent.com/zeyongj/zeyongj.github.io/main/data/pm.csv')
    .then(r => r.text())
    .then(txt => Papa.parse(txt, { header: true }).data
      .map(r => ({ p: r['Proj#'].trim().slice(0,4), pm: r['PM'].trim() }))
    );
  nlm = await fetch('https://raw.githubusercontent.com/zeyongj/zeyongj.github.io/main/data/nlm.csv')
    .then(r => r.text())
    .then(txt => Papa.parse(txt, { header: true }).data
      .map(r => r['Proj#'].trim().slice(0,4))
    );
}

function findPerson(k, data) {
  const num = +k;
  for (let e of data) {
    const ps = e.Portfolio.trim(), inc = (e.Include||'').split(',').filter(Boolean), exc = (e.Exclude||'').split(',').filter(Boolean);
    if (ps.endsWith('+') && num >= +ps.slice(0, -1)) {
      if (exc.includes(k)) continue;
      return e.Name;
    } else if (ps.includes('-')) {
      const [a,b] = ps.split('-').map(Number);
      if (num >= a && num <= b) {
        if (inc.length && !inc.includes(k)) continue;
        if (exc.includes(k)) continue;
        return e.Name;
      }
    }
  }
  return null;
}

document.getElementById('btn').onclick = async () => {
  const key = document.getElementById('q').value.trim().slice(0,4);
  const res = document.getElementById('res');
  if (!key) return res.textContent = '';

  await loadData();

  if (nlm.includes(key)) return res.textContent = `Project ${key} is NLM.`;

  const pmRow = pm.find(r => r.p === key);
  if (!pmRow) return res.textContent = 'No result';

  const apn = findPerson(key, ap) || '–';
  const arn = findPerson(key, ar) || '–';

  res.innerHTML = `
    <p>Project number: ${key}</p>
    <p>AP name: ${apn}</p>
    <p>AR name: ${arn}</p>
    <p>PM name: ${pmRow.pm}</p>`;
};

loadData();
