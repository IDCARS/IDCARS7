
function toggleMenu(){
  const m = document.getElementById('mobileMenu');
  if(!m) return;
  m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}
(function highlight(){
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === page || (page==='index.html' && href==='index.html')) a.classList.add('active');
  });
})();

function sendMail(e){
  if(e) e.preventDefault();
  const f = document.getElementById('contactForm');
  if(!f) return;
  const data = new FormData(f);
  const subject = encodeURIComponent('Contact IDCARS - ' + (data.get('nom')||''));
  const body = encodeURIComponent(
    'Nom: ' + (data.get('nom')||'') + '\n' +
    'Email: ' + (data.get('email')||'') + '\n' +
    'Téléphone: ' + (data.get('tel')||'') + '\n\n' +
    (data.get('message')||'')
  );
  window.location.href = 'mailto:ydrix07@icloud.com?subject=' + subject + '&body=' + body;
}
