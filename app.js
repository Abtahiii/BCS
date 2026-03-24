// ── shared utilities ─────────────────────────
function showToast(msg,dur=2600){
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}
  t.textContent=msg;t.classList.add('show');
  clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),dur);
}

const Progress={
  get:()=>JSON.parse(localStorage.getItem('bcs_prog')||'{}'),
  set:d=>localStorage.setItem('bcs_prog',JSON.stringify(d)),
  mark:(id,st)=>{const d=Progress.get();d[id]={status:st,ts:Date.now()};Progress.set(d);},
  status:id=>(Progress.get()[id]||{}).status||'unseen'
};

const Notes={
  get:id=>(JSON.parse(localStorage.getItem('bcs_notes')||'{}'))[id]||'',
  set:(id,v)=>{const d=JSON.parse(localStorage.getItem('bcs_notes')||'{}');d[id]=v;localStorage.setItem('bcs_notes',JSON.stringify(d));}
};

// topic tag color helper
function topicTag(topicId, topicLabel){
  return `<span class="tag tag-${topicId}">${topicLabel}</span>`;
}
