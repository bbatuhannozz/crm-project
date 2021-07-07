import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {Doughnut} from 'react-chartjs-2';


const state = {
    labels: ['Olumsuz Sonuç' /* ,'February' */, 'Olumlu Sonuç'
             /* ,'April' */, 'Bekleyen Görevler'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          /* '#C9DE00', */
          '#2FDE00',
          /* '#00A6B4', */
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        /* '#4B5000', */
        '#175000',
        /* '#003350', */
        '#35014F'
        ],
        data: [70, 70, 70]
      }
    ]
}

export class Table extends Component {  
    render() {  
        return (
            <div style={{position:"relative"}}>
    <div class="container-fluid" >
        
        

        <div class="row"  style={{lineHeight:"75%"}} >

            <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8" >

                    {/* first table */}
                    <div class="card shadow mb-4">
                    <div class="card-header py-2" >
                        <h6 class="m-0 font-weight-bold" style={{color:"#ED1B2E", textAlign:'center'}}><font size="+2">Bekleyen Görevler</font></h6>
                    </div>
                    
                    <div class="card-body">
                        <div class="table-responsive">

                            <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                <div class="row">
                                
                                <div class="col-sm-12 col-md-6">
                                    <div class="dataTables_length" id="dataTable_length">
                                    <label style={{ textAlign:'left', paddingLeft:"75px"}}>Her sayfada
                                        <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> sonuç göster
                                        </label>
                                        </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div id="dataTable_filter" class="dataTables_filter" style={{ textAlign:'right', paddingRight:"50px"}}>
                                            <label style={{ textAlign:'center'}}>Arama<input type="search"  class="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                                </label>
                                                    </div>
                                                    </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style={{float : 'middle', paddingRight : '0px'}}>
                                <thead>
                                    <tr role="row" style={{ textAlign:'center'}}><th class="sorting sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{float : 'middle', paddingRight : '0px'}}>İsim</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>ID</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>İrtibat</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>Yaş</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>Son Tarih</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>Sonuçlandır</th></tr>
                                </thead>
                                <tbody style={{ textAlign:'center'}}>
                                <tr class="odd">
                                        <td class="sorting_1">Airi Satou</td>
                                        <td>456235</td>
                                        <td>Arama</td>
                                        <td>33</td>
                                        <td>2008/11/28</td>
                                        <td><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></a>{' '}</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="sorting_1">Angelica Ramos</td>
                                        <td>861204</td>
                                        <td>Arama</td>
                                        <td>47</td>
                                        <td>2009/10/09</td>
                                        <td><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></a>{' '}</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="sorting_1">Ashton Cox</td>
                                        <td>964521</td>
                                        <td>Ziyaret</td>
                                        <td>66</td>
                                        <td>2009/01/12</td>
                                        <td><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></a>{' '}</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="sorting_1">Bradley Greer</td>
                                        <td>364632</td>
                                        <td>Arama</td>
                                        <td>41</td>
                                        <td>2012/10/13</td>
                                        <td><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></a>{' '}</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="sorting_1">Brenden Wagner</td>
                                        <td>964572</td>
                                        <td>Mail</td>
                                        <td>28</td>
                                        <td>2011/06/07</td>
                                        <td><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></a>{' '}</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="sorting_1">Brielle Williamson</td>
                                        <td>785857</td>
                                        <td>Mail</td>
                                        <td>61</td>
                                        <td>2012/12/02</td>
                                        <td><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></a>{' '}</td>
                                    </tr><tr class="odd">
                                        <td class="sorting_1">Bruno Nash</td>
                                        <td>364521</td>
                                        <td>Arama</td>
                                        <td>38</td>
                                        <td>2011/05/03</td>
                                        <td><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></a>{' '}</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="sorting_1">Caesar Vance</td>
                                        <td>364564</td>
                                        <td>Mail</td>
                                        <td>21</td>
                                        <td>2011/12/12</td>
                                        <td><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></a>{' '}</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="sorting_1">Cara Stevens</td>
                                        <td>363601</td>
                                        <td>Arama</td>
                                        <td>46</td>
                                        <td>2011/12/06</td>
                                        <td><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></a>{' '}</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="sorting_1">Cedric Kelly</td>
                                        <td>9964525</td>
                                        <td>Arama</td>
                                        <td>22</td>
                                        <td>2012/03/29</td>
                                        <td><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></a>{' '}</td>
                                    </tr></tbody>
                            </table>





                            </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-5">
                                <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite"><font size="2">Toplam 57 bekleyen görevden 1 ve 10 arasını görmektesiniz.</font> </div>
                                </div>
                            <div class="col-sm-12 col-md-7">
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
                                </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    {/* end of first table */}

            </div>


                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">

                    <div class="card shadow mb-4">
                    <div class="card-header py-2">
                                    <h6 class="m-0 font-weight-bold" style={{color:"#ED1B2E", textAlign:'center'}}><font size="+2">Dairesel Grafik</font></h6>
                                
                                </div>
                                    <br></br>    
                                        
                                        <Doughnut
                                        data={state}
                                        options={{
                                            title:{
                                            display:true,
                                            fontSize:20
                                            },
                                            legend:{
                                            display:true,
                                            position:'right'
                                            }
                                        }}
                                        />
                                    <br></br>
                    </div>
                </div>

        </div>
        
        {/* end of first row */}


        <div class="row" style={{lineHeight:"75%"}}>
            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                {/* second table */}
                <div class="card shadow mb-4">
                <div class="card-header py-2">
                    <h6 class="m-0 font-weight-bold" style={{color:"#ED1B2E", textAlign:'center'}}><font size="+2">Bitmiş Görevler</font></h6>
                </div>
                <div class="card-body">
                    
                    <div class="table-responsive"> 
                        <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4"><div class="row">
                            <div class="col-sm-12 col-md-6"><div class="dataTables_length" id="dataTable_length">
                            <label style={{ textAlign:'left', paddingLeft:"75px"}}>Her sayfada
                                        <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> sonuç göster
                                        </label>
                                        </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div id="dataTable_filter" class="dataTables_filter" style={{ textAlign:'right', paddingRight:"50px"}}>
                                            <label style={{ textAlign:'center'}}>Arama<input type="search"  class="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                                </label>
                                                </div></div></div>
                                                <div class="row"><div class="col-sm-12"><table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style={{float : 'middle', paddingRight : '0px'}}>
                            <thead>
                                <tr role="row" style={{ textAlign:'center'}}><th class="sorting sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{float : 'middle', paddingRight : '0px'}}>İsim</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>ID</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>Sonuç</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>Yaş</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>Son Tarih</th></tr>
                            </thead>
                            <tfoot>
                                
                            </tfoot>
                            <tbody style={{ textAlign:'center'}}>
                            <tr class="odd">
                                    <td class="sorting_1">Airi Satou</td>
                                    <td>456235</td>
                                    <td>Olumlu</td>
                                    <td>33</td>
                                    <td>2008/11/28</td>
                                </tr><tr class="even">
                                    <td class="sorting_1">Angelica Ramos</td>
                                    <td>861204</td>
                                    <td>Olumlu</td>
                                    <td>47</td>
                                    <td>2009/10/09</td>
                                </tr><tr class="odd">
                                    <td class="sorting_1">Ashton Cox</td>
                                    <td>964521</td>
                                    <td>Olumsuz</td>
                                    <td>66</td>
                                    <td>2009/01/12</td>
                                </tr><tr class="even">
                                    <td class="sorting_1">Bradley Greer</td>
                                    <td>364632</td>
                                    <td>Olumsuz</td>
                                    <td>41</td>
                                    <td>2012/10/13</td>
                                </tr><tr class="odd">
                                    <td class="sorting_1">Brenden Wagner</td>
                                    <td>964572</td>
                                    <td>Olumlu</td>
                                    <td>28</td>
                                    <td>2011/06/07</td>
                                </tr><tr class="even">
                                    <td class="sorting_1">Brielle Williamson</td>
                                    <td>785857</td>
                                    <td>Olumlu</td>
                                    <td>61</td>
                                    <td>2012/12/02</td>
                                </tr><tr class="odd">
                                    <td class="sorting_1">Bruno Nash</td>
                                    <td>364521</td>
                                    <td>Olumsuz</td>
                                    <td>38</td>
                                    <td>2011/05/03</td>
                                </tr><tr class="even">
                                    <td class="sorting_1">Caesar Vance</td>
                                    <td>364564</td>
                                    <td>Olumsuz</td>
                                    <td>21</td>
                                    <td>2011/12/12</td>
                                </tr><tr class="odd">
                                    <td class="sorting_1">Cara Stevens</td>
                                    <td>363601</td>
                                    <td>Olumlu</td>
                                    <td>46</td>
                                    <td>2011/12/06</td>
                                </tr><tr class="even">
                                    <td class="sorting_1">Cedric Kelly</td>
                                    <td>9964525</td>
                                    <td>Olumsuz</td>
                                    <td>22</td>
                                    <td>2012/03/29</td>
                                </tr></tbody>
                        </table>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-5">
                                <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">
                                    <font size="2">Toplam 57 bitmiş görevden 1 ve 10 arasını görmektesiniz.</font>
                                </div>
                            </div>
                        <div class="col-sm-12 col-md-7">
                        <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                            <ul class="pagination pagination-sm">
                                <li class="paginate_button page-item previous disabled" id="dataTable_previous">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">Önceki</a>
                                </li>
                                <li class="paginate_button page-item active">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" style={{backgroundColor:"red", borderColor:"red"}} class="page-link">1</a>
                                </li>
                                <li class="paginate_button page-item ">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" style={{color:"red"}} class="page-link">2</a>
                                </li>
                                <li class="paginate_button page-item ">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" style={{color:"red"}}class="page-link">3</a>
                                </li>
                                <li class="paginate_button page-item ">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" style={{color:"red"}} class="page-link">4</a>
                                </li><li class="paginate_button page-item ">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" style={{color:"red"}} class="page-link">5</a>
                                </li>
                                <li class="paginate_button page-item ">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" style={{color:"red"}} class="page-link">6</a>
                                </li><li class="paginate_button page-item next" id="dataTable_next">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" style={{color:"red"}} class="page-link">Sonraki</a>
                                </li>
                            </ul>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of second table */}
            </div>


            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                {/* third table */}
                <div class="card shadow mb-4">
                <div class="card-header py-2">
                    <h6 class="m-0 font-weight-bold" style={{color:"#ED1B2E", textAlign:'center'}}><font size="+2">Müşterilerin Puan Tablosu</font></h6>
                </div>
                <div class="card-body">
                    <div  class="table-responsive"> 
                        <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4"><div class="row">
                            <div class="col-sm-12 col-md-6"><div class="dataTables_length" id="dataTable_length">
                            <label style={{ textAlign:'left', paddingLeft:"75px"}}>Her sayfada
                                        <select name="dataTable_length" aria-controls="dataTable"  class="custom-select custom-select-sm form-control form-control-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> sonuç göster
                                        </label>
                                        </div>
                                        </div>
                                        
                                        <div class="col-sm-12 col-md-6">
                                            <div id="dataTable_filter" class="dataTables_filter" style={{ textAlign:'right', paddingRight:"50px"}}>
                                            <label style={{ textAlign:'center'}}>Arama<input type="search"  class="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                                </label>
                                                </div></div>
                                                
                                                </div><div class="row"><div class="col-sm-12"><table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style={{float : 'middle', paddingRight : '0px'}}>
                            <thead>
                                <tr role="row" style={{ textAlign:'center'}}>
                                    <th class="sorting sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{float : 'middle', paddingRight : '0px'}}>İsim</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>ID</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style={{float : 'middle', paddingRight : '0px'}}>Puan</th>
                                    
                                </tr>
                            </thead>
                            <tfoot>
                                
                            </tfoot>
                            <tbody style={{ textAlign:'center'}}>
                            <tr class="odd">
                                    <td class="sorting_1">Airi Satou</td>
                                    <td>456235</td>
                                    <td>4.5</td>
                                </tr><tr class="even">
                                    <td class="sorting_1">Angelica Ramos</td>
                                    <td>861204</td>
                                    <td>4</td>
                                </tr><tr class="odd">
                                    <td class="sorting_1">Ashton Cox</td>
                                    <td>964521</td>
                                    <td>5</td>
                                </tr><tr class="even">
                                    <td class="sorting_1">Bradley Greer</td>
                                    <td>364632</td>
                                    <td>4</td>
                                </tr><tr class="odd">
                                    <td class="sorting_1">Brenden Wagner</td>
                                    <td>964572</td>
                                    <td>2</td>
                                </tr><tr class="even">
                                    <td class="sorting_1">Brielle Williamson</td>
                                    <td>785857</td>
                                    <td>4.4</td>
                                </tr><tr class="odd">
                                    <td class="sorting_1">Bruno Nash</td>
                                    <td>364521</td>
                                    <td>4</td>
                                </tr><tr class="even">
                                    <td class="sorting_1">Caesar Vance</td>
                                    <td>364564</td>
                                    <td>3</td>
                                </tr><tr class="odd">
                                    <td class="sorting_1">Cara Stevens</td>
                                    <td>363601</td>
                                    <td>4.5</td>
                                </tr><tr class="even">
                                    <td class="sorting_1">Cedric Kelly</td>
                                    <td>996455</td>
                                    <td>2</td>
                                </tr>
                                
                                
                                </tbody>
                        </table>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-5">
                                <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">
                                <font size="2">Toplam 57 müşteri puanından 1 ve 10 arasını görmektesiniz.</font>
                                </div>
                                
                            </div>
                        <div class="col-sm-12 col-md-7">
                        <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                            <ul class="pagination pagination-sm">
                                <li class="paginate_button page-item previous disabled" id="dataTable_previous">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0"  class="page-link">Önceki</a>
                                </li>
                                <li class="paginate_button page-item active">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" style={{backgroundColor:"red", borderColor:"red"}} class="page-link">1</a>
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
                                    <a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" style={{color:"red"}} class="page-link">6</a>
                                </li><li class="paginate_button page-item next" id="dataTable_next">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" style={{color:"red"}} class="page-link">Sonraki</a>
                                </li>
                            </ul>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* end of third table */}
            </div>




        </div>
        {/* end of second row */}

        



    </div>
    </div>
        )  
    }  
}  
  
export default Table