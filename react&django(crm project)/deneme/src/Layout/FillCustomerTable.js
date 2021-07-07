import React, {useState} from 'react'
import axios from 'axios'
import { Button, Modal, ModalBody, ModalFooter} from 'react-bootstrap';
/* import {ModalView} from './Customers' */


export default class FillCustomerTable extends React.Component {

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/create/?format=json').then(res => {
            this.setState({customers: res.data})
        })
    }

    constructor(){
        super()
        this.state = {
            show: false,
            customers: []
        }
    }

    handleModal(){
        this.setState({show: !this.state.show})
    }


    render(){


        return (


                <tbody style={{ textAlign:'center', verticalAlign:'center'}} >

                

                    {this.state.customers.map(customer => 
                <tr style={{lineHeight:"75%"}}>
                    <td>{customer.name}</td>
                    <td>{customer.customerId}</td>
                    <td>{customer.access}</td>
                    <td>{customer.age}</td>
                    <td>{customer.date}</td>

                    <td class="align-middle">
                    <a role="button" class="btn-outline-danger" onClick={() => this.handleModal()} >
                    <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                            </svg>       
                    </a>
                    </td>

                </tr>)}


                <Modal show={this.state.show} onHide={() => this.handleModal()} size="xl">
                <Modal.Header closeButton class="modal-header text-center">
                            <h2 class="font-weight-bold modal-title w-100" style = {{textAlign:"center", color:"#ED1B2E"}}>Müşteri Bilgileri</h2>
                        </Modal.Header>
                        <ModalBody>
                            <div>
                           

            <div class="row">
                        <div class="col-md-12"  >
                            <div class="card mb-6">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg> &nbsp; İsim Soyisim</h6>
                                            </div><div class="col-sm-7 text-secondary"> İsmail Batuhan ÖZÜNALAN</div>
                                            </div><hr></hr>
                                    <div class="row">
                                                <div class="col-sm-5">
                                                    <h6 class="mb-0"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
</svg> &nbsp; E posta</h6></div>
                                                    <div class="col-sm-7 text-secondary"> fip@jukmuh.al</div></div><hr></hr>
                                                   
                                                    <div class="row">
                                                        <div class="col-sm-5">
                                                            <h6 class="mb-0" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> &nbsp; Cep Telefonu</h6></div>
                                                            <div class="col-sm-7 text-secondary"> (239) 816-9029</div></div><hr></hr>
                                    <div class="row">
                                                                <div class="col-sm-5">
                                                                    <h6 class="mb-0">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
</svg>
               &nbsp;&nbsp; Adres</h6></div>
              <div class="col-sm-7 text-secondary"> Bay Area, San Francisco, CA</div></div><hr></hr>
                                    <div class="row">
                                        <div class="col-sm-12"> <a class="btn" target="__blank" style={{backgroundColor:"#ED1B2E", color:"white", borderColor:"#ED1B2E"}} href="/">Edit</a>
                        </div></div></div></div></div></div>
                        <br></br>
                        <div>
                                         <div class="card md-12" >
                                         <ul class="list-group list-group-flush">
                                         <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                         <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                         class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle>
                                         <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>Website</h6> <span class="text-secondary">https://bootdey.com</span>
                                    </li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 class="mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" s
                                            troke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                            class="feather feather-github mr-2 icon-inline">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                                                </svg>Github</h6>
                                                <span class="text-secondary">bootdey</span>
                                                </li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 class="mb-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                                                        stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                            </svg>Twitter</h6> 
                                                            <span class="text-secondary">@bootdey</span>
                                                            </li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                                <h6 class="mb-0">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger">
                                                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6> <span class="text-secondary">bootdey</span>
                                                                        </li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap"><h6 class="mb-0">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary">
                                                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                                                                <span class="text-secondary">bootdey</span></li></ul>
                                                                               </div> </div></div>
                        </ModalBody>
                        <ModalFooter>
                        <Button class="btn btn-danger" onClick={() => this.handleModal()} style={{backgroundColor:"#ED1B2E", borderColor:"#ED1B2E"}}>Geri</Button>
                        </ModalFooter>
                </Modal>
                </tbody>
            

        )
    }



}