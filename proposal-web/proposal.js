let no=document.querySelector('.no')
let yes=document.querySelector('.yes')
content=document.querySelector('.content-img')
message=document.querySelector('.message')
count=0
i=0
let arrimg=['https://www.bing.com/th/id/OGC.e052b7bf8d604a5a5c26f01cb7f1874b?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f1f%2fa6%2f36%2f1fa636e1b8bcfd5d7f03924218a9977a.gif&ehk=lFZpFaHbRNdsPXJT%2bdo98w1crtF6qJM1fHAh%2bCBuYKM%3d','https://th.bing.com/th/id/OIP.hgqyaLHN3oDfHapnA32YyQHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7','https://www.bing.com/th/id/OGC.1129406c98905f44f32a26223a96bb56?pid=1.7&rurl=https%3a%2f%2fc.tenor.com%2fKJJzFHcN7f0AAAAC%2ftkthao219-bubududu.gif&ehk=iMWHMrisblsxY842eF4B%2fzpeTQS3cQ%2f6fTKHkATAnBw%3d','https://www.bing.com/th/id/OGC.7f364d8beb03488ab42ceac55b5f62bf?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fhUhVNaecIiQAAAAC%2flaughing-bear.gif&ehk=Hb9dGVuH4Q8fA38dh7lPxl2dyXU4v2I34LrFcNZq%2b9c%3d','https://www.bing.com/th/id/OGC.48850e2d2837d0ebb445f0d9f98bdea0?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fm%2fdOT5Ko2qYjMAAAAC%2fdudu-bubu-bubu-dudu.gif&ehk=6KMDn%2bBqdRMaTZBj6i49A4uDGg8oM18292o%2b9Mx7Noc%3d']
let arrtext=['Maan jao na','Please haan boldo gabbu!','Pleeaaasseeee','bhav khane se aur patla hoyega','haan bol warna maar khayega']
function change()
{
    no.textContent='No'
    no.style.position=`absolute`
    if(count%2==0){
    no.style.top=`${Math.floor(Math.random()*100)}px`
    no.style.left=`${Math.floor(Math.random()*1000)}px`}
    else{
    no.style.right=`${Math.floor(Math.random()*1000)}px`
    no.style.bottom=`${Math.floor(Math.random()*100)}px`}
    content.setAttribute('src',`${arrimg[i%arrimg.length]}`)
    message.textContent =`${arrtext[i%arrtext.length]}`
    count++
    i++
}
function changemore(){
     no.textContent='No'
    no.style.left=`${Math.floor(Math.random()*1000)}px`
    no.style.bottom=`${Math.floor(Math.random()*100)}px` 
     
}
function masti(){
    no.textContent='Definitely yes!'
}
yes.addEventListener('click',()=>{
    content.setAttribute('src',`https://www.bing.com/th/id/OGC.a4f93d9413da0269dd8816adae5fa63f?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2f8trqa66_h6MAAAAC%2fdudu-bubu-bear-and-panda.gif&ehk=hKPSts8ouzfon%2fFeYxbi%2bZ2r%2b0ShH0PTwRptvEs4Cok%3d`)
    message.textContent =`Yippie I love You Too!`
    no.style.display='none'
})