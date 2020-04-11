import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {connect} from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {signIn} from '../Store/actions/authActions'
import {Redirect} from 'react-router-dom'


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const {authError} = this.props;
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
 
  <button type="submit" className="btn btn-primary">Sign In</button>
   
  <div className = "text-red">
    {authError ? <p>{authError}</p> : null}
  </div>
</form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('jsbasa');
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps),
)(SignIn);