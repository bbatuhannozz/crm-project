import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Leftside from './Leftside';  
import Header from './Header'  
import Footer from './Footer'
import axios from 'axios';
import FillCustomerTable from './FillCustomerTable';
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function ClearFields() {
    
    document.getElementById("nameBox").value = "";
    document.getElementById("customeridBox").value = "";
    document.getElementById("accessBox").value = "";
    document.getElementById("ageBox").value = "";
    document.getElementById("dateBox").value = "";
    document.getElementById("tcnoBox").value = "";
    document.getElementById("customernoBox").value = "";
}


export class  Customers extends Component {  

    constructor(props) {
        super(props)
        this.state = {

            name : '',
            customerId : '',
            access : '',
            age : '',
            date : '',
            tcNo : '',
            customerNo : ''
        }
    }

    

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(e)
        axios.post("http://127.0.0.1:8000/create/",  this.state, {headers: {"Accept": "application/json"}}) 
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {  
        const {name, customerId, access, age, date, tcNo,customerNo } = this.state;
        return (
            <div>  
                <div id="wrapper">  
                    <Leftside></Leftside>  
                    <div id="content-wrapper" class="d-flex flex-column">  
                        <div id="content" >  
                            <Header />  
                        </div> 
                        <div class="container-fluid" >
        <div class="row" style={{lineHeight:"75%"}} >
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    {/* first table */}
                    <div class="card shadow mb-3" >
                    <div class="card-header py-3" >
                        <h6 class="m-0 font-weight-bold" style={{color:"#ED1B2E", textAlign:'center'}}><font size="+3">Müşteri Listesi</font></h6></div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4" >

                                <div class="row" >  
                                    
                                    <div class="dataTables_length" id="dataTable_length" >
                                    <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="col-md-1"></div>
                                <div class="col-sm-12 col-md-4">
                                    <div class="dataTables_length" id="dataTable_length">
                                  <label >Her sayfada </label>  <label >       
                                        <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-md form-control form-control-md">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> 
                                        </label> sonuç göster
                                        </div>
                                        </div>

                                        <div class="col-sm-12 col-md-4">
                                            <td ><br></br>
                                            <Button type="button" className="btn btn-sm" style={{backgroundColor:"#ED1B2E", borderColor:"#ED1B2E"}} data-toggle="modal" data-target="#üye" > Müşteri Ekle </Button>

                                            <div class="modal fade" id="üye" >
                                                <div class="modal-dialog modal-dialog-centered ">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                    <div class="container h-100">
                                                    <div class="d-flex justify-content-center h-10">
                                                        <div class="user_card">
                                                            <div class="d-flex justify-content-center">
                                                                <div class="brand_logo_container"></div></div>
                                                            <div class="d-flex justify-content-center form_container">
                                                                <form onSubmit={this.submitHandler}>
                                                                    <div class="input-group mb-3">
                                                                        <div class="input-group-append">
                                                                            <form class="d-none d-sm-inline-block form-inline mr-auto m0-md-0 my-0 my-md-0 mw-100 ">
                                                                                <div class="input-group">


                                                <div id="dataTable_filter" class="dataTables_filter" 
                                            style={{ textAlign:'right', paddingRight:"50px"}}>
                                            <label style={{ textAlign:'center', paddingLeft:"75px"}}> <span>İsim</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                            <input type="text" name="name" value={name} onChange={this.changeHandler} id="nameBox"
                                            class="form-control form-control-sm" aria-controls="dataTable"/>
                                            </label><br></br>
                                            </div><div class="input-group-append"><div><button type="button" class="close" data-dismiss="modal">&times;</button></div></div>
                                                    

                                                    <div id="dataTable_filter" class="dataTables_filter" 
                                            style={{ textAlign:'right', paddingRight:"50px"}}>
                                            <label style={{ textAlign:'center', paddingLeft:"75px"}}> &nbsp; &nbsp; <span>ID</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                            <input type="text" name="customerId" value={customerId} onChange={this.changeHandler} id="customeridBox"
                                            class="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                                </label><br></br>
                                                    </div>


                                                    <div id="dataTable_filter" class="dataTables_filter" 
                                            style={{ textAlign:'right', paddingRight:"50px"}}>
                                            <label style={{ textAlign:'center', paddingLeft:"55px"}}> <span>İletişim</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="text" name="access" value={access} onChange={this.changeHandler} id="accessBox"
                                            class="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                                </label><br></br>
                                                    </div>


                                                    <div id="dataTable_filter" class="dataTables_filter" 
                                            style={{ textAlign:'right', paddingRight:"50px"}}>
                                            <label style={{ textAlign:'center', paddingLeft:"55px"}}> <span>Yaş</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;
                                            <input type="text" name="age" value={age} onChange={this.changeHandler} id="ageBox"
                                            class="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                                </label><br></br>
                                                    </div>


                                                    <div id="dataTable_filter" class="dataTables_filter" 
                                            style={{ textAlign:'right', paddingRight:"50px"}}>
                                            <label style={{ textAlign:'center', paddingLeft:"55px"}}> <span>Son Tarih</span>&nbsp;&nbsp;&nbsp; 
                                            <input type="text" name="date" value={date} onChange={this.changeHandler} id="dateBox"
                                            class="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                                </label> <br></br>
                                                    </div>


                                                    <div id="dataTable_filter" class="dataTables_filter" 
                                            style={{ textAlign:'right', paddingRight:"50px"}}>
                                            <label style={{ textAlign:'center', paddingLeft:"55px"}}> <span>TC no</span>&nbsp;&emsp;&emsp;
                                            <input type="text" name="tcNo" value={tcNo} onChange={this.changeHandler} id="tcnoBox"
                                            class="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                                </label><br></br>
                                                    </div>

                                                    <div id="dataTable_filter" class="dataTables_filter" 
                                            style={{ textAlign:'right', paddingRight:"50px"}}>
                                            <label style={{ textAlign:'center', paddingLeft:"55px"}}> <span>Müşteri No</span>&nbsp;
                                            <input type="text" name="customerNo" value={customerNo} onChange={this.changeHandler} id="customernoBox"
                                            class="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                                </label><br></br>
                                                    </div>
                                                
                                                
                                                </div></form></div></div> 
                                                                    
                                                                    <div class="form-group">
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" class="custom-control-input" id="customControlInline"/>
                                                                            </div></div>
                                                                        <div class="row">
                                                                <div class="col-md-6 text-center" >
                                                                    <button type="submit" class="btn" style={{color: "white", backgroundColor:"#ED1B2E", borderColor:"#ED1B2E"}} onClick={ClearFields}>Müşteri Ekle</button>
                                                                </div>

                                                                <div class="col-md-6 text-center">
                                                                    <button class="btn btn-danger" data-dismiss="modal" style={{ backgroundColor:"#ED1B2E", borderColor:"#ED1B2E"}}>Geri</button>
                                                                </div>
                                                                    
                                                                    </div>
                                                                    
                                                                    

                                                                    </form></div> </div></div></div></div></div></div></div> </td></div>


                                        <div class= "col-sm-12 col-md-3">
                                        <div class="input-group">
                                            <input type="text" class="bg-light border-0 small" placeholder="Arama..." aria-label="Search" aria-describedby="basic-addon2" />
                                            <div class="input-group-append">
                                                <button class="btn btn-danger" type="button">
                                                    <i class="fas fa-search fa-sm"></i></button>
                                                    </div></div></div>
                                                    </div></div></div>
                                                   

                                                    <div class="row">
                                                        <div class="col-sm-12">
                            <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info">
                                <thead>
                                    <tr role="row" style={{ textAlign:'center'}}>
                                    <th class="sorting sorting_asc" tabindex="0" aria-controls="dataTable" 
                                    rowspan="1" colspan="1" aria-sort="ascending">İsim</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable">ID</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable">İrtibat</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable">Yaş</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable">Son Tarih</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable">Düzenle</th>
                                    </tr>
                                </thead>
                                <FillCustomerTable />
                                </table> </div> </div>

                            <div class="row" >
                                <div class="col-sm-12 col-md-5">
                                <div class="dataTables_danger" id="dataTable_info" role="status" aria-live="polite"> <font size="2"> Toplam 57 müşteri içerisinde 1 ve 10 arasını görmektesiniz.</font></div>
                                </div>
                            <div class="col-sm-12 col-md-5">
                            <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                <ul class="pagination pagination-sm">
                                    <li class="paginate_button page-item previous disabled" id="dataTable_previous">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">Önceki</a>
                                    </li>
                                    <li class="paginate_button page-item active">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" class="page-link">4</a>
                                    </li><li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" class="page-link">5</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" class="page-link">6</a>
                                    </li><li class="paginate_button page-item next" id="dataTable_next">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" class="page-link">Sonraki</a>
                                    </li>
                                </ul></div> </div>


                                <div class="col-sm-12 col-md-2" style={{paddingLeft:"5.3%"}}>
                                <ReactHTMLTableToExcel 
                                className = "btn" 
                                table = "dataTable"
                                filename = "excelFile"
                                sheet = "Sheet"
                                buttonText = {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                              </svg>}/></div>
                            </div></div></div></div></div>
                    {/* end of first table */}
            </div></div>
        {/* end of first row */}</div>
                        <Footer />  
                    </div>  
                </div>  
            </div>  
        )  
    }  
}  
  
export default Customers