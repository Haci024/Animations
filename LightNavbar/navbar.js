let marker=document.querySelector('#marker');
let list=document.querySelectorAll('ul li');

function ChangeMove(e){
    marker.style.left=e.offsetLeft+'px';
    marker.style.width=e.offsetWidth+'px';

}
list.forEach(link=>{
    link.addEventListener('mousemove',(e)=>{
        ChangeMove(e.target);
    })
})
function activeLink(){
    list.forEach((active)=>
     active.classList.remove('active'));
     this.classList.add('active');
}
list.forEach((item)=>item.addEventListener('mouseover',activeLink));