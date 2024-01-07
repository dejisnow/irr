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
  let displayDiv = document.querySelector(".displayDiv")
  let irrValue = document.querySelector(".irrValue")
  
    btn.addEventListener("click",(e)=>{
   
        e.preventDefault()
        display.style.display = "block"
         let result = irr()
       irrValue.innerHTML = `${result.toFixed(2) * 100}% `
 
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
    let highInt =parseInt(hR.value)/100
    let lowInt =parseInt(lR.value)/100
    
   let npvRatio = lowNpv /(lowNpv - (highNpv))
   
   let npvR =(highInt - lowInt) 
   let result = npvRatio * npvR
   

    return lowInt + result 
        
        
    }
    
    
    
    
    
    
    
    
}
