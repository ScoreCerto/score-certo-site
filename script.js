const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>28));

// Score animation
setTimeout(()=>{

  let n=0,t=41;const iv=setInterval(()=>{n=Math.min(n+1,t);document.getElementById('gauge-n').textContent=n;if(n>=t)clearInterval(iv);},35);
},500);

function fq(el){
  const it=el.parentElement,open=it.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!open)it.classList.add('open');
}

function submitCta(){
  const emailEl=document.getElementById('cta-email');
  const msg=document.getElementById('cta-msg');
  const email=emailEl.value.trim();
  if(!email||!email.includes('@')){
    msg.textContent='Por favor, insira um e-mail válido.';
    msg.style.color='var(--red)';return;
  }
  msg.textContent='Enviando...';
  msg.style.color='var(--ink3)';

  const FORMSPREE_URL_TEAM   = 'https://formspree.io/f/mgorjlqe'; 
  fetch(FORMSPREE_URL_TEAM, {
    method:'POST',
    headers:{'Content-Type':'application/json','Accept':'application/json'},
    body:JSON.stringify({
      _subject:'[ScoreCerto] Novo lead — Quer falar com especialista',
      _cc:'stefany@scorecerto.com.br, vitor@scorecerto.com.br, claudionor@scorecerto.com.br',
      email: email,
      origem: 'Landing Page — Falar com especialista',
      data: new Date().toLocaleString('pt-BR'),
    })
  })
  .then(r=>{
    if(r.ok){
      msg.textContent='✓ Recebemos! Um especialista entra em contato em breve.';
      msg.style.color='var(--green-d)';
      emailEl.value='';
    } else {
      msg.textContent='Erro ao enviar. Escreva para contato@scorecerto.com.br';
      msg.style.color='var(--red)';
    }
  })
  .catch(()=>{
    msg.textContent='Erro de conexão. Escreva para contato@scorecerto.com.br';
    msg.style.color='var(--red)';
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();scrollTo({top:t.offsetTop-66,behavior:'smooth'});}
  });
});

const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});},{threshold:.1});
document.querySelectorAll('.fade').forEach(el=>obs.observe(el));
