import React, { Component } from 'react'
import Logo from "./oyak.png";


export class Leftside extends Component {  

    render() {  
        return (  
            <div>  
                <ul class="navbar-nav sidebar sidebar-dark accordion" 
                style={{backgroundColor:"#ED1B2E", height: "100%"}} id="accordionSidebar">  
                    
                    
                    
                   
                    <div class="text-center d-none d-md-inline">
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/" style={{paddingTop:"50px"}}>
                        <img style={{height: "81px" , width: "158px"}} src={Logo}></img></a>
                    </div>
                
                    
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/" style={{paddingTop:"55px", }}>  
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0
   .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
</svg>
                    <div class="sidebar-brand-text mx-2" ><font size="4">Ana sayfa</font></div>  
                    </a>  
  
                    <hr class="sidebar-divider my-0" />  

                    <li class="nav-item active">  
                        <a class="nav-link" href="/CustomerRepresentative" onClick={this.handleClick}>  
                        <i class="fas fa-fw fa-folder"></i> 
                            <span>Müşteri Temsilcileri</span></a>  
                    </li>
                    <li class="nav-item active">  
                        <a class="nav-link" href="/Customers" onClick={this.handleClick}>  
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg> 
                            <span> Müşteri Listesi</span></a>  
                    </li>  

                    <hr class="sidebar-divider" />  
  
                    <div class="sidebar-heading">  
                        KİŞİSEL BİLGİLER
</div>  
                    <li class="nav-item active">  
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">  
                            <i class="fas fa-fw fa-folder"></i>  
                            <span>Üyelik işlemleri</span>  
                        </a>  
                        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">  
                            <div class="bg-white py-2 collapse-inner rounded">  
                                <h6 class="collapse-header">ÜYELİĞİM</h6>  
                                <a class="collapse-item" href="SignIn">Giriş yap</a>  
                                <a class="collapse-item" href="SignUp">Üye ol</a>  
                                <div class="collapse-divider"></div>  
                                <h6 class="collapse-header">DİĞER</h6>  
                                <a class="collapse-item" href="/">Bana Özel</a>  
                                <a class="collapse-item" href="SignIn">Çıkış yap</a>  
                            </div>  
                        </div>  
                    </li>  
                    
                    <hr class="sidebar-divider d-none d-md-block" />  
                    <li class="nav-item active">  
                        <a class="nav-link" href="Chatbox">  
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
</svg>
                            <span> Akıllı Asistan</span></a>  
                    </li>  
  
                </ul>  
            </div>  
        )  
    }  
}  
  
export default Leftside