document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.getElementById('nav');
  const toggle=document.getElementById('navToggle');
  toggle.addEventListener('click',()=>{
    const isOpen=nav.style.display==='flex';
    nav.style.display = isOpen? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '0.6rem';
  });

  // year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
  
  // contact form handling (client-side only)
  const form=document.getElementById('contactForm');
  const alertBox=document.getElementById('formAlert');
  if(form){
    form.addEventListener('submit',async (e)=>{
      e.preventDefault();
      // simple UI feedback - in a real site you'd POST to an API
      if(alertBox){
        alertBox.hidden=false;
      }
      form.querySelectorAll('input, textarea, button').forEach(n=>n.disabled=true);
      setTimeout(()=>{
        if(alertBox) alertBox.textContent='Message sent — thanks!';
        form.reset();
        form.querySelectorAll('input, textarea, button').forEach(n=>n.disabled=false);
        setTimeout(()=>{ if(alertBox) alertBox.hidden=true; }, 4000);
      }, 750);
    });
  }
});
