const h1 = document.querySelector('h1');
const p = document.querySelector('p');

addEventListener('keydown',(e)=>{
    h1.innerText = e.key === " "?`You Have Prassed Space`:`You Have Prassed ${e.key}`
    p.innerText = e.keyCode;
    console.log(e);
    
});