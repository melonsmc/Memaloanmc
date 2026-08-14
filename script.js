const glow=document.querySelector('.cursor-glow');
let last=0;
function move(x,y){
 if(glow){glow.style.left=x+'px';glow.style.top=y+'px';}
 const now=Date.now();
 if(now-last>35){last=now;const t=document.createElement('i');t.className='trail';t.style.left=x+'px';t.style.top=y+'px';document.body.appendChild(t);setTimeout(()=>t.remove(),600);}
}
addEventListener('pointermove',e=>move(e.clientX,e.clientY),{passive:true});
addEventListener('pointerdown',e=>{for(let i=0;i<5;i++)setTimeout(()=>move(e.clientX+(Math.random()-.5)*35,e.clientY+(Math.random()-.5)*35),i*35)},{passive:true});
