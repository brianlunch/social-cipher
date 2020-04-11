import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {connect} from 'react-redux'
import {createPost} from '../Store/actions/postActions'


const CipherJS = require('cipherjs');

class Post extends Component {
  state = {
    title: '',
    content: '',
    group:''
  }
  handleChange = (e) => {
    
    this.setState({
      [e.target.id]: e.target.value
    })
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
      var cipherKey;
      for(var i =0; i<this.props.groups.length;i++){
        if(this.state.group == this.props.groups[i].groupName)
        {cipherKey = this.props.groups[i].groupKey}
      }
      const cipher = CipherJS.Vigenere.encrypt(this.state.content, cipherKey)
      
      this.setState({
        content: cipher
      },() => {
        this.props.createPost(this.state)
      });
  }
  
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label htmlFor="title">Post Title</label>
    <input type="text" onChange={this.handleChange} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title"/>
  </div>
  <div className="form-group">
    <label htmlFor="content">Post Content</label>
    <input type="text"  onChange={this.handleChange} className="form-control" id="content" placeholder="Write post..."/>
  </div>
  

  <div class="form-group">
  <label htmlFor="group">Group</label>
      <select onChange={this.handleChange} id="group" class="form-control">
            <option selected>Choose Group</option>
            
            { this.props.groups && this.props.groups.map(group =>{ return(
            
            group.members && group.members.includes(this.props.email) ? <option>{group.groupName}</option>: null
            
            )})}
            </select>
      
    </div> 
    
  <button type="submit" className="btn btn-primary">Post</button>
</form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(null, mapDispatchToProps)(Post)