import React, { Component } from 'react';
import './App.css';  
import Layout  from './Layout/Layout'
import Customers from './Layout/Customers';
import { Route, Switch , BrowserRouter as Router} from 'react-router-dom';
import CustomersPage from "./Layout/Customers";
import CustomerRepresentativePage from "./Layout/CustomerRepresentative"
import LeftsidePage from "./Layout/Leftside";
import SignInPage from "./Layout/SignIn";
import SignUpPage from "./Layout/SignUp";
import ForgetPasswordPage from "./Layout/ForgetPassword";
import NewPasswordPage from "./Layout/NewPassword";
import ChatboxPage from "./Layout/Chatbox";




class App extends Component
{
  render()
  {
    return (

      

      //<h2>Home</h2>
       <Router>
         <Switch>
           <Route exact path='/' component={Layout}></Route>
           {/* <Route path='/customers' component={<h2>Home</h2>}></Route> */}
           <Route exact path='/Customers' component={CustomersPage}></Route>
           <Route exact path='/CustomerRepresentative' component={CustomerRepresentativePage}></Route>
           <Route exact path='/SignIn' component={SignInPage}></Route>
           <Route exact path='/SignUp' component={SignUpPage}></Route>
           <Route exact path='/ForgetPassword' component={ForgetPasswordPage}></Route>
           <Route exact path='/NewPassword' component={NewPasswordPage}></Route>
           <Route exact path='/Chatbox' component={ChatboxPage}></Route>
           


         </Switch>
       </Router>
    );
  }
}

// function App() {  
//   return (  
//      <div className="App">
//       <Layout/>   
//      </div>  
//   );  
// }  
// function Customer() {  
//   return (  
//       <Customer/>   
//   );  
// }  


  
export default App; 