import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {connect} from 'react-redux'
import {signUp, signUpGroup} from '../Store/actions/authActions'
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    groupName:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
    this.props.signUpGroup(this.state)

  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password"  onChange={this.handleChange} className="form-control" id="password" placeholder="Password"/>
  </div>    
  <div className="form-group">
    <label htmlFor="firstName">First Name</label>
    <input type="text" onChange={this.handleChange} className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="lastName">Last Name</label>
    <input type="text" onChange={this.handleChange} className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="groupName">Group Name</label>
    <input type="text" onChange={this.handleChange} className="form-control" id="groupName" aria-describedby="emailHelp" placeholder="Enter Your Groups Name"/>
  </div>

  <button type="submit" className="btn btn-primary">Sign Up</button>
  <div className="text-red">
  {this.props.authError ? <p>{this.props.authError}</p>:null}
  </div>
</form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    auth: state.firebase.auth,  
    authError: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: (newUser, firebase) => dispatch(signUp(newUser, firebase)),
  signUpGroup: (newUser,firebase) => dispatch(signUpGroup(newUser,firebase))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps),
)(SignUp);