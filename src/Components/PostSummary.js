import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {connect} from 'react-redux'
import {removeMember} from '../Store/actions/postActions'


import firebase from 'firebase'
const CipherJS = require('cipherjs');


class PostSummary extends Component {
  state = {
    title: '',
    content: '',
    group:''
  }

  removeMember = (e) => {
    console.log('hey');
    //this.props.removeMember(this.state)
    
    this.setState(
      {
        
      groupID: this.props.list.id,
      member: e.target.id

      },
      () => {
        this.props.removeMember(this.state)
      });
      
  }
  
  render() {
    console.log(this.props)
      var isMember = false;
      var cipherKey='k';
      const email = this.props.email
      console.log('email',email)

      for(var i =0;i<this.props.groups.length;i++){
         if(this.props.post.group == this.props.groups[i].groupName && this.props.groups[i].members.includes(email)){
            isMember=true;
            cipherKey=this.props.groups[i].groupKey;
         }
      }

      const decipher = CipherJS.Vigenere.decrypt(this.props.post.content,cipherKey);

console.log(this.props);
    return(
      <div className="card">
      <div class="card-body">
      <h4 class="card-subtitle mb-2 text-muted">{this.props.post.group}</h4>
        <h5 class="card-title">{this.props.post.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{this.props.post.authorFirstName}</h6>
    {isMember ? <p class="card-text">{decipher}</p> : <p class="card-text">{this.props.post.content}</p>}
      </div>
    </div>
    )
  }
    
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeMember: (group) => dispatch(removeMember(group))
  }
}

export default connect(null, mapDispatchToProps)(PostSummary)