const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
const closeNavigation=()=>{
  if(!toggle||!nav)return;
  toggle.setAttribute('aria-expanded','false');
  nav.classList.remove('open');
};

if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const willOpen=toggle.getAttribute('aria-expanded')!=='true';
    toggle.setAttribute('aria-expanded',String(willOpen));
    nav.classList.toggle('open',willOpen);
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeNavigation));
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){
      closeNavigation();
      toggle.focus();
    }
  });
  window.addEventListener('resize',()=>{
    if(window.innerWidth>1050)closeNavigation();
  });
}

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
document.querySelectorAll('.nav a').forEach(link=>{
  if((link.getAttribute('href')||'').toLowerCase()===current)link.setAttribute('aria-current','page');
});

const filters=[...document.querySelectorAll('[data-filter]')];
filters.forEach(button=>{
  button.setAttribute('aria-pressed',String(button.classList.contains('active')));
  button.addEventListener('click',()=>{
    const value=button.dataset.filter;
    filters.forEach(item=>{
      const selected=item===button;
      item.classList.toggle('active',selected);
      item.setAttribute('aria-pressed',String(selected));
    });
    document.querySelectorAll('[data-publication]').forEach(item=>{
      item.hidden=value!=='all'&&item.dataset.publication!==value;
    });
  });
});
