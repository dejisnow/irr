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
 console.log(irr())
    // console.log(add())
    })
    
    // console.log(irr(0.15,0.1,-28160,45358))
    
    
    //Input Variables 
    
    
    function add(){
    
    
   return highNpv + lowNpv + highInt + lowInt 
        
    }
    
    
    function irr(){
    let highNpv =parseInt(npvH.value)
    let lowNpv = parseInt(npvL.value)
    let highInt =parseInt(hR.value)
    let lowInt =parseInt(lR.value)
    
   let npvRatio = lowNpv /(lowNpv - (highNpv))
   //we are getting zero when we deduct
   let npvR =(highInt - lowInt ) 
   

    return  npvR
        
        
    }
    
    
    
    
    
    
    
    
   }
