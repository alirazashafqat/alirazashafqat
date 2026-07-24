const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=toggle.getAttribute('aria-expanded')==='true';
    toggle.setAttribute('aria-expanded',String(!open));
    nav.classList.toggle('open',!open);
  });
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
document.querySelectorAll('.nav a').forEach(link=>{
  if((link.getAttribute('href')||'').toLowerCase()===current)link.setAttribute('aria-current','page');
});
document.querySelectorAll('[data-filter]').forEach(button=>{
  button.addEventListener('click',()=>{
    const value=button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===button));
    document.querySelectorAll('[data-publication]').forEach(item=>{
      item.hidden=value!=='all'&&item.dataset.publication!==value;
    });
  });
});
