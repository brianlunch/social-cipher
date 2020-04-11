import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Home2 from "./Home2";
import Feed from "./Feed";
import Groups from "./Groups";
import {connect} from 'react-redux'

 
class App extends Component {
  render() {
    
    return (
       <HashRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="header navbar-nav mr-auto">
            <li className="nav-item"><NavLink className="nav-link" exact to="/">Sign In</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/signUp">Sign Up</NavLink></li>
            <li className="nav-item"><NavLink  className="nav-link" to="/feed">Feed</NavLink></li>
            <li className="nav-item"><NavLink  className="nav-link" to="/groups">Groups</NavLink></li>
            
          </ul>
          <h3>{this.props.email}</h3>
		  </nav>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/signUp" component={Home2}/>
            <Route path="/feed" component={Feed}/>
            <Route path="/groups" component={Groups}/>
          </div>
		  
        </div>
      </HashRouter>
    );
  }
}
 
 const mapStateToProps = (state) => {
   console.log(state);
   return{
      email: state.firebase.auth.email
   }
 }
export default connect(mapStateToProps)(App);