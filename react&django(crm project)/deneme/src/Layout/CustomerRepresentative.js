import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Leftside from './Leftside';  
import Header from './Header'  
import Footer from './Footer'
import FillCustResTable from './FillCustResTable'
import ReactHTMLTableToExcel from "react-html-table-to-excel";


export class  CustomerRepresentative extends Component {  
    render() {  
        return (

            <div>  
                <div id="wrapper">  
                    <Leftside></Leftside>
                    <div id="content-wrapper" class="d-flex flex-column">  
                        <div id="content">  
                            <Header />  
                        </div>
                        <div class="container-fluid">
        

        <div class="row" style={{lineHeight:"80%"}}>

            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">

                    {/* first table */}
                    <div class="card shadow mb-3">
                    <div class="card-header py-3" >
                        <h6 class="m-0 font-weight-bold " style={{color:"#ED1B2E", textAlign:'center'}}><font size="+3" >Müşteri Temsilcileri</font></h6>
                    </div>
                    
                    <div class="card-body">
                        <div class="table-responsive">
                            <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4"><div class="row">
                                
                                <div class="col-sm-6 col-md-8">
                                    <div class="dataTables_length" id="dataTable_length">
                                    <label style={{ textAlign:'left', paddingLeft:"175px"}}>Her sayfada
                                        <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> sonuç göster
                                        </label>
                                        
                                        </div>
                                        </div>
                                        <div class= "col-sm-12 col-md-3" >
                                        <div class="input-group">
                                            <input type="text" class="bg-light border-0 small" placeholder="Arama..." aria-label="Search" aria-describedby="basic-addon2" />
                                            <div class="input-group-append" >
                                                <button class="btn btn-danger" type="button" >
                                                    <i class="fas fa-search fa-sm"></i></button>
                                                    </div></div></div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                        <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="1" role="grid" aria-describedby="dataTable_info" >
                                <thead>
                                    <tr role="row" style={{textAlign:'center'}}>
                                    <th class="sorting sorting_asc" tabindex="0" aria-controls="dataTable" aria-sort="ascending">İsim</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" >ID</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" >İrtibat</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" >Yaş</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" >Son Tarih</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" >Atama</th></tr>
                                </thead>
                               < FillCustResTable />
                            </table>
                            </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-5">
                                <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite"><font size="2">Toplam 57 bekleyen görevden 1 ve 10 arasını görmektesiniz.</font></div>
                                </div>
                            <div class="col-sm-12 col-md-5">
                            <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                <ul class="pagination pagination-sm" >
                                    <li class="paginate_button page-item previous disabled" id="dataTable_previous">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">Önceki</a>
                                    </li>
                                    <li class="paginate_button page-item active" >
                                        <a href="#" aria-controls="dataTable" style={{backgroundColor:"red", borderColor:"red"}} data-dt-idx="1" tabindex="0" class="page-link">1</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" style={{color:"red"}} class="page-link">2</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" style={{color:"red"}} class="page-link">3</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" style={{color:"red"}} class="page-link">4</a>
                                    </li><li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" style={{color:"red"}} class="page-link">5</a>
                                    </li>
                                    <li class="paginate_button page-item ">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0"style={{color:"red"}} class="page-link">6</a>
                                    </li><li class="paginate_button page-item next" id="dataTable_next">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" style={{color:"red"}} class="page-link">Sonraki</a>
                                    </li>
                                </ul>
                                </div>
                                </div>
                                <div class="col-sm-12 col-md-2" style={{paddingLeft:"6.4%"}}>
                                <ReactHTMLTableToExcel 
                                className = "btn" 
                                table = "dataTable"
                                filename = "excelFile"
                                sheet = "Sheet"
                                buttonText = {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                              </svg>}
                            />
                                </div>
                                </div> 
                               
                        </div>
                                </div>
                               
                    </div>
                </div>
     {/* end of first table */}
            </div>
        </div>
    {/* end of first row */}
    </div>
                        <Footer />  
                    </div>  
                </div>  
            </div>
        )  
    }  
}  
  
export default CustomerRepresentative