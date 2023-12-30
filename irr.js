window.onload=()=>{
   
   
   
   /*
IRR FORMULA 
 Ra + (NPVa/NPVa-NPVb ) * (Ra - Rb)
 where
Ra = lower Disc Rate 
Rb = higher Disc Rate
NPVa = NPV at Ra
NPVb = NPV at Rb

*/

   let btn = document.querySelector("button") 
   let npvH = document.querySelector(".npvH")
  let npvL = document.querySelector(".npvL")
  let hR = document.querySelector(".highR")
  let lR = document.querySelector(".lowR")
  let display = document.querySelector(".display")
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
 //    console.log(irr(hR,lR,highNpv,lowNpv))
     console.log(add(highNpv,lowInt,lowNpv,highInt ))
    })
    
    // console.log(irr(0.15,0.1,-28160,45358))
    
    
    //Input Variables 
    let highNpv = npvH.value
    let lowNpv = npvL.value
    let highInt = hR.value
    let lowInt = lR.value
    
    function add(a,b,c,d){
       return a+b+c+d 
        
    }
    
    
    function irr(rH,rL,netH,netL){
   let npvRatio = (netL *(rH - rL)/(netL-netH))
    console.log(typeof(rH))
    
    return rL + npvRatio 
        
        
    }
    
    
    
    
    
    
    
    
}
