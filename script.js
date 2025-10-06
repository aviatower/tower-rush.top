
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  document.getElementById('year') && (document.getElementById('year').textContent = y);
  document.getElementById('year2') && (document.getElementById('year2').textContent = y);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // floating houses
  const bg = document.querySelector('.money-bg');
  for(let i=0;i<12;i++){
    const img = document.createElement('img');
    img.src = 'images/house.svg';
    img.className = 'house';
    img.style.left = (Math.random()*100) + 'vw';
    img.style.top = (80 + Math.random()*20) + 'vh';
    const dur = 6 + Math.random()*8;
    img.style.animation = `float${i} ${dur}s linear infinite`;
    bg.appendChild(img);
    const tx = (Math.random()*160 - 80);
    const keyframes = `@keyframes float${i}{
      0%{transform:translateY(0) translateX(0) rotate(0deg);opacity:1}
      100%{transform:translateY(-130vh) translateX(${tx}px) rotate(360deg);opacity:0}
    }`;
    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);
  }

  // player counter
  let count = 2174;
  const elCount = document.getElementById('playerCount');
  elCount && (elCount.textContent = count.toLocaleString('ru-RU'));
  setInterval(()=>{
    const delta = Math.floor(Math.random()*7) - 3;
    count = Math.max(1200, Math.min(9200, count + delta));
    elCount && (elCount.textContent = count.toLocaleString('ru-RU'));
  }, 3500);

  // copy promo
  document.getElementById('copyPromo') && document.getElementById('copyPromo').addEventListener('click', async ()=>{
    const promo = document.getElementById('promo').textContent.trim();
    try{
      await navigator.clipboard.writeText(promo);
      showCopyMsg('Промокод скопирован!');
    }catch{
      showCopyMsg('Скопируйте вручную: ' + promo);
    }
  });

  function showCopyMsg(text){
    const m = document.getElementById('copyMsg');
    if(!m) return;
    m.textContent = text;
    m.style.opacity = '1';
    setTimeout(()=> m.style.opacity = '0', 2500);
  }

  document.getElementById('btn-bonus') && document.getElementById('btn-bonus').addEventListener('click', ()=>{
    window.location.href = 'bonus.html';
  });

  const activate = document.getElementById('activateBtn');
  if(activate){
    activate.addEventListener('click', (e)=>{
      const target = '#'; // placeholder - replace with your link
      if(target === '#'){
        activate.classList.add('pulsate');
        setTimeout(()=> activate.classList.remove('pulsate'), 900);
      } else {
        window.open(target, '_blank');
      }
    });
  }
});
