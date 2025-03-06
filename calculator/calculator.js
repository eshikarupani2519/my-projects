let per=document.querySelector('#per')
let CE=document.querySelector('#CE')
let AC=document.querySelector('#AC')
let back=document.querySelector('#back')
let inverse=document.querySelector('#inverse')
let sq=document.querySelector('#sq')
let sqroot=document.querySelector('#sq-root')
let divi=document.querySelector('#divi')
let sev=document.querySelector('#sev')
let eig=document.querySelector('#eig')
let nine=document.querySelector('#nine')
let four=document.querySelector('#four')
let five=document.querySelector('#five')
let six=document.querySelector('#six')
let minus=document.querySelector('#minus')
let one=document.querySelector('#one')
let two=document.querySelector('#two')
let thr=document.querySelector('#thr')
let plus=document.querySelector('#plus')
let plusormin=document.querySelector('#plusormin')
let zero=document.querySelector('#zero')
let point=document.querySelector('#point')
let equal=document.querySelector('#equal')
let ip=document.querySelector('#ip')
let answer=document.querySelector('.ans')
let ans=0
let base;
// per.addEventListener('click',()=>{
//     ans=(ans/f.value)*100
//  })
per.addEventListener('click',()=>{
        ip.value+='%'
     })
one.addEventListener('click',(event)=>{
    ip.value+=1
})
two.addEventListener('click',(event)=>{
    ip.value+=2
})
thr.addEventListener('click',(event)=>{
    ip.value+=3
})
four.addEventListener('click',(event)=>{
    ip.value+=4
})
five.addEventListener('click',(event)=>{
    ip.value+=5
})
six.addEventListener('click',(event)=>{
    ip.value+=6
})
sev.addEventListener('click',(event)=>{
    ip.value+=7
})
eig.addEventListener('click',(event)=>{
    ip.value+=8
})
nine.addEventListener('click',(event)=>{
   ip.value+=9
})
point.addEventListener('click',(event)=>{
   ip.value+='.'
})
zero.addEventListener('click',(event)=>{
    ip.value+='0'
 })
// plus.addEventListener('click',()=>{
//    ans+=+f.value + s.value
// })
plus.addEventListener('click',()=>{
    ip.value+='+'
   
})
// minus.addEventListener('click',()=>{
//     ans+=f.value - s.value
//  })
minus.addEventListener('click',()=>{
    ip.value+='-'
   
})
//  mul.addEventListener('click',()=>{
//     ans+=f.value * s.value
//  })
mul.addEventListener('click',()=>{
    ip.value+='*'
   
})
//  divi.addEventListener('click',()=>{
//     ans+=f.value / s.value
//  })
divi.addEventListener('click',()=>{
    ip.value+='/'
   
})
// inverse.addEventListener('click',()=>{
//     ans=1/ans
//  })
inverse.addEventListener('click',()=>{
    base =+ip.value
    ip.value+='^-1'
   
})
//  sq.addEventListener('click',()=>{
//     b.setAttribute('class','d-none')
//  b.textContent=''
//     ans=a.value*a.value
//  })
sq.addEventListener('click',()=>{
    base=+ip.value
    ip.value+='^2'
   
})
// sqroot.addEventListener('click',()=>{
//     b.setAttribute('class','d-none')
//     b.textContent=''
//     val=a.value
//     ans=Math.sqrt(val)
//  })
sqroot.addEventListener('click',()=>{
    base=+ip.value
     ip.value=`sqroot(${base})`
   
})
//  plusormin.addEventListener('click',(event)=>{
//     if(event.target.a)
//    a.value=-a.value
// else if(event.target.b)
//    b.value=-b.value
//  })
plusormin.addEventListener('click',()=>{
    base=+ip.value
    if(base.startsWith('-'))ip.value=`${base}`   
  else  ip.value=`-${base}`
   
})
 equal.addEventListener('click',()=>{
   
    if(ip.value.includes('^-1'))
    {
ans=Math.pow(base,-1)
    }
    else if(ip.value.includes('^2'))
    {
        ans=Math.pow(base,2)
    }
    else if(ip.value.includes('sqroot'))
        {
            ans=Math.sqrt(base)
        }
    else { ans=eval(ip.value)
    }
    console.log(ans)
 answer.textContent=ans
 })
AC.addEventListener('click',()=>{
    ip.value=''
    answer.textContent=''
})
CE.addEventListener('click',()=>{
    ip.value=''
    answer.textContent=''
})
back.addEventListener('click',()=>{
    ip.value=ip.value.slice(0,-1)
})
//+/-