let nlm=[], pm=[], ap=[], ar=[];
function load() {
  Papa.parse('data/nlm.csv', { download:true, header:true,
    complete: r=>nlm = r.data.map(row=>row['Proj#'].trim().slice(0,4)) });
  Papa.parse('data/pm.csv', { download:true, header:true,
    complete: r=>pm = r.data.map(rw=>({p:rw['Proj#'].trim().slice(0,4), pm:rw['PM'].trim()})) });
  fetch('data/ap.json').then(r=>r.json()).then(d=>ap=d);
  fetch('data/ar.json').then(r=>r.json()).then(d=>ar=d);
}
document.addEventListener('DOMContentLoaded', load);

document.getElementById('btn').onclick = ()=>{
  const k = document.getElementById('q').value.trim().slice(0,4),
        out = document.getElementById('res');
  if(!k) return out.textContent = '';
  if(nlm.includes(k)) return out.textContent = `Project ${k} is NLM.`;
  const pmRow = pm.find(r=>r.p===k);
  if(!pmRow) return out.textContent = 'No result';
  const apn = findPerson(k, ap), arn = findPerson(k, ar);
  out.innerHTML = `
    <p>Project number: ${k}</p>
    <p>AP name: ${apn||'–'}</p>
    <p>AR name: ${arn||'–'}</p>
    <p>PM name: ${pmRow.pm}</p>`;
};

function findPerson(k, arr) {
  const num = +k;
  for(let e of arr){
    const ps=e.Portfolio.trim(), inc=e.Include||[], exc=e.Exclude||[];
    if(ps.endsWith('+') && num>=+ps.slice(0,-1)) return e.Name;
    if(ps.includes('-')){
      const [a,b]=ps.split('-').map(Number);
      if(num>=a&&num<=b){
        if(inc.length && !inc.includes(k)) continue;
        if(exc.includes(k)) continue;
        return e.Name;
      }
    }
  }
  return null;
}
