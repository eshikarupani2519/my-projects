price=document.querySelectorAll('.price')
add=document.querySelectorAll('.add')
remove=document.querySelectorAll('.cross')
show=document.querySelector('.show-cart')
cart=[]
total=0
show.addEventListener('click',()=>{

})
add.forEach((elem) => {
    elem.addEventListener('click',()=>{
        console.log(price.value)
        p=+price.value
        console.log(p)
        total+=p
        console.log(total)
    })
});