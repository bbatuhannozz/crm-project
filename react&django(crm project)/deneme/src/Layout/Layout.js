import React, { Component, Suspense } from 'react';  
import Leftside from './Leftside';  
import Header from './Header'  
import Footer from './Footer'
import Customers from './Customers'
import Table from './Table'
import CustomerRepresentative from './CustomerRepresentative';
import Login from './SignIn'

export class Layout extends Component {  
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
    render() {  
        return (  
            <div>  
                <div id="wrapper">  
                    <Leftside></Leftside>  
                    <div id="content-wrapper" class="d-flex flex-column">  
                        <div id="content">  
                            <Header />  
                        </div>
                        {<Table/>}
                        {/* {<CustomerRepresentative/>}
                        {<Customers/>} */}
                        
                        <Footer />  
                    </div>  
                </div>  
            </div>  
        )  
    }  
}  
  
export default Layout  