let number=document.querySelector('.number');
let more=document.querySelector('.more');
let cbox=document.querySelectorAll('.c-box')
let typedo=document.querySelectorAll('.type-do')
let no=0,todocbox=[...cbox],todotype=[...typedo]
number.textContent=no+' '
more.addEventListener('click',()=>{
todocbox[no].setAttribute('class','d-view')
todotype[no].setAttribute('class','d-view')
no++
number.textContent=no+' '
})
