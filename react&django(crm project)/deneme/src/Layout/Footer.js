import React, { Component } from 'react'  
import Logo from "./oyak2.png";

export class Footer extends Component {  
    render() {  
        return (  
    
        <footer class="sticky-footer"  style={{backgroundColor:"#DADADA"}}>  
            <div class="row">  
        <div class="col-md-4 col-lg-4 col-sm-4 col-xl-4">

        </div>

  <div class="col-md-4 col-lg-4 col-sm-4 col-xl-4"  style={{textAlign:"center"}}>
  <img style={{height: "60px" , width: "110px"}} src={Logo}></img> <br></br>
  <a href="http://www.oyak.com.tr"><font size="3">www.oyak.com.tr</font></a>

        </div> 
        
         <div class="col-md-4 col-lg-4 col-sm-4 col-xl-4" style={{textAlign:"right", paddingRight:"45px", paddingTop:"20px"}}>
          
         <a href="#top"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></a>
          </div>
          </div>  
      </footer>  
  
        )  
    }  
}  
  

<a href="#top"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></a>
export default Footer