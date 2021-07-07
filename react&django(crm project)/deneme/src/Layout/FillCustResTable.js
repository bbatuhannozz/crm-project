import React, {useState} from 'react'
import axios from 'axios'
import { Button, Modal, ModalBody, ModalFooter} from 'react-bootstrap';
/* import {ModalView} from './Customers' */


export default class FillCustResTable extends React.Component {

    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/Urahs/React-Django/main/dummyData.json').then(res => {
            console.log(res);
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

            

                <tbody style={{textAlign:'center'}} >
                    {this.state.customers.map(customer => <tr style={{lineHeight:"70%"}}>
                    <td>{customer.name}</td>
                    <td>{customer.id}</td>
                    <td>{customer.access}</td>
                    <td>{customer.age}</td>
                    <td>{customer.date}</td>

                    <td>
                        <a role="button" class="btn-outline-danger" onClick={() => this.handleModal()}  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                    </svg></a></td> 
                   

                </tr>)}
                
                <Modal show={this.state.show} onHide={() => this.handleModal()} size="md">
                        <Modal.Header closeButton class="modal-header text-center">
                            <h2 class="font-weight-bold modal-title w-100" style = {{textAlign:"center", color:"#ED1B2E"}}>Müşteri Ata</h2>
                        </Modal.Header>
                        <ModalBody>
                            <div class="input-group-append" style = {{textAlign:"center"}} >
                               
                            <div class="col-md-12" >
                                    
                                    <form class="d-none d-sm-inline-block form-inline mr-auto m0-md-0 my-0 my-md-0 mw-100 navbar-search" >
                                        
                                        <div class="input-group">
                                        <span class="input-group-text" >
                                    <i class="fas fa-user"></i>
                                    </span>
                                            <input type="text" class="form-control bg-light small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                                            <div class="input-group-append"><button class="btn btn-danger" type="button">
                                                <i class="fas fa-search fa-sm"></i></button>
                                                </div></div></form></div></div>
                        </ModalBody>
                        <ModalFooter>
                        <Button class="btn btn-danger" onClick={() => this.handleModal()} style={{backgroundColor:"#ED1B2E", borderColor:"#ED1B2E"}}>Geri</Button>
                        </ModalFooter>
                </Modal>
                              

                
                
                </tbody>
            

        )
    }



}