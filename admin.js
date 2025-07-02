const USER='Rancho', PWD_KEY='rz_pwd';
if(!localStorage[PWD_KEY]) localStorage[PWD_KEY]='apvan2024';

document.getElementById('loginDiv').onsubmit = e=>{
  e.preventDefault();
  if(u.value===USER && p.value===localStorage[PWD_KEY]) {
    loginDiv.style.display='none'; dash.style.display='block';
  } else alert('Invalid');
};

logout.onclick = ()=>location.reload();
setPwd.onclick = ()=>{
  localStorage[PWD_KEY]=np.value.trim();
  alert('Password updated');
};

up.onclick = async e=>{
  e.preventDefault();
  await uploadFile('ap','fap', true);
  await uploadFile('ar','far', true);
  await uploadFile('pm','fpm', false);
  await uploadFile('nlm','fnlm', false);
  alert('Done!');
};

async function uploadFile(type, eltId, isJson) {
  const f = document.getElementById(eltId).files[0];
  if(!f) return;
  const txt = await f.text();
  if(isJson){
    localStorage[type]=txt;
    await fetch(`data/${type}.json`,{method:'PUT', body:txt});
  } else {
    await fetch(`data/${type}.csv`,{method:'PUT', body:txt});
  }
}
