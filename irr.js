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
  let oldInt = document.querySelector(".oInt")
  let newInt = document.querySelector("n.Int")
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
    })
    
    function irr(rH,rL,netH,netL){
   let npvRatio = (netL *(rH - rL)/(netL-netH))
    
    
    return rL + npvRatio 
        
        
    }
    
    console.log(irr(0.15,0.1,-28160,45358))
    
    
    
    
    
    
}
