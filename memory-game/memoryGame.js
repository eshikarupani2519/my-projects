
restart=document.querySelector('.restart')
pointspart=document.querySelector('.points')
container=document.querySelector('.container')
card=document.querySelectorAll('.card')
back=document.querySelectorAll('.back')
front=document.querySelectorAll('.flip')
strip=document.querySelector('.strip')
let arrlink=[{link:'https://th.bing.com/th?id=OIP.kLkh99lOuAu0A_HlvudqcwHaGf&w=267&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',id:1},{link:'https://th.bing.com/th?id=OIP.4XbsRevgA_9svqnQC1_ldQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',id:2},{link:'https://th.bing.com/th?id=OIP.0vFElmx6Eqfb_6TlmLSlEwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',id:3},{link:'https://th.bing.com/th/id/OIP.ijDZ3jEX6BiIKKPxhUoNlgHaEK?w=302&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',id:4},{link:'https://th.bing.com/th/id/OIP.ijDZ3jEX6BiIKKPxhUoNlgHaEK?w=302&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',id:5},{link:'https://th.bing.com/th?id=OIP.0vFElmx6Eqfb_6TlmLSlEwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',id:6},{link:'https://th.bing.com/th?id=OIP.4XbsRevgA_9svqnQC1_ldQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',id:7},{link:'https://th.bing.com/th?id=OIP.kLkh99lOuAu0A_HlvudqcwHaGf&w=267&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',id:8}]
let j=0,temp,points=0
 function timeout(){
  setTimeout(()=>{
    back.forEach((elem)=>{ elem.style.transform="rotateY(180deg)"
       elem.style.visibility="visible"
       console.log('back')
    })
  card.forEach((elem)=>elem.style.transform="rotateY(180deg)")
    console.log('card')
  },4000)
}
let first,second ,count=0 ,val1,val2,firstsrc,secondsrc
card.forEach((elem)=>{
elem.addEventListener('click',(event)=>{
if(count%2==0){
  first=elem.getAttribute('id')
  console.log(first)
}
else{
  second=elem.getAttribute('id')
  console.log(second)
}
count++
console.log(count);
arrlink.forEach((elem)=>{
  if(elem.id==first)
  {
    firstsrc=elem.link;
    console.log(firstsrc)
  }
 if(elem.id==second)
  {
    secondsrc=elem.link
    console.log(secondsrc)
  }
})
if(firstsrc.includes(secondsrc))
{
  points++
  console.log(points)
  pointspart.innerText=`points:${points}`
console.log('match done');
let pic1=document.getElementById(first)
let pic2=document.getElementById(second)
pic1.style.transform="rotateY(0deg)"
pic2.style.transform="rotateY(0deg)"
}
if(points==4)
  {
      strip.innerText="Yaayyyy you wonnnn!!"
      strip.style.color="green"
      //why isn't background color changing?
  }
})
})
let k=0,i=0;
restart.addEventListener('click',()=>{
  j=0
  arrcount=[0,0,0,0,0,0,0,0]
  for(k=0;k<arrlink.length;k++){
    i=(Math.floor(Math.random()*300))%arrlink.length
   // console.log(arrlink[k].link)
   // console.log(arrlink[i].link)
    if(arrcount[i]==0){
    temp=arrlink[k].link
    arrlink[k].link=arrlink[i].link
    arrlink[i].link=temp
   // console.log(arrlink[k].link)
   // console.log(arrlink[i].link)
  arrcount[i]=1

  }
i++;
  }
  front.forEach((elem) => {
    console.log(arrlink[j].link)
   elem.setAttribute('src',`${arrlink[j].link}`)
   j++
  });
  console.log('restarted')
})
//timeout()