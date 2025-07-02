const USER='Rancho', PWD_KEY='rz_pwd';
if (!localStorage[PWD_KEY]) localStorage[PWD_KEY] = 'apvan2024';

const loginForm = document.getElementById('loginForm'),
      dash = document.getElementById('dash'),
      u=document.getElementById('u'), p=document.getElementById('p'),
      logout=document.getElementById('logout'),
      np=document.getElementById('np'), setPwd=document.getElementById('setPwd'),
      apList=document.getElementById('apList'),
      arList=document.getElementById('arList'),
      addAp=document.getElementById('addAp'),
      addAr=document.getElementById('addAr'),
      fpm=document.getElementById('fpm'),
      fnlm=document.getElementById('fnlm'),
      up=document.getElementById('up');

let apData = JSON.parse(localStorage.ap || '[]'),
    arData = JSON.parse(localStorage.ar || '[]');

loginForm.onsubmit = e => {
  e.preventDefault();
  if (u.value===USER && p.value===localStorage[PWD_KEY]) {
    loginForm.style.display='none'; dash.style.display='block';
    renderList(apList, apData, 'ap');
    renderList(arList, arData, 'ar');
  } else alert('Invalid credentials');
};

logout.onclick = () => location.reload();
setPwd.onclick = () => {
  const v=np.value.trim();
  if (!v) return alert('Enter a new password');
  localStorage[PWD_KEY]=v;
  alert('Password updated');
};

addAp.onclick = e => { e.preventDefault(); apData.push({Name:'', Portfolio:'', Include:'', Exclude:''}); renderList(apList, apData, 'ap'); };
addAr.onclick = e => { e.preventDefault(); arData.push({Name:'', Portfolio:'', Include:'', Exclude:''}); renderList(arList, arData, 'ar'); };

function renderList(container, arr, type) {
  container.innerHTML='';
  arr.forEach((item,i) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <input placeholder="Name" data-field="Name" value="${item.Name}">
      <input placeholder="Portfolio (e.g. 5218-5337 or 5750+)" data-field="Portfolio" value="${item.Portfolio}">
      <input placeholder="Include (comma)" data-field="Include" value="${item.Include}">
      <input placeholder="Exclude (comma)" data-field="Exclude" value="${item.Exclude}">
      <button data-del="${i}">✖️</button>
    `;
    container.appendChild(div);

    div.querySelectorAll('input').forEach(inp => {
      inp.oninput = () => item[inp.dataset.field] = inp.value;
    });

    div.querySelector('button').onclick = () => {
      arr.splice(i,1);
      renderList(container, arr, type);
    };
  });
  localStorage[type] = JSON.stringify(arr);
}

up.onclick = async e => {
  e.preventDefault();
  saveJsonFile('ap', apData);
  saveJsonFile('ar', arData);

  if (fpm.files[0]) await saveCsvFile('pm', await fpm.files[0].text());
  if (fnlm.files[0]) await saveCsvFile('nlm', await fnlm.files[0].text());
  alert('AP/AR, PM, NLM saved');
};

async function saveJsonFile(type, arr) {
  localStorage[type] = JSON.stringify(arr);
  await fetch(`data/${type}.json`, {
    method:'PUT', body: JSON.stringify(arr)
  });
}

async function saveCsvFile(type, txt) {
  localStorage[type] = txt;
  await fetch(`data/${type}.csv`, {
    method:'PUT', body: txt
  });
}
