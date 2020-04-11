import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import MemberList from './MemberList'


class GroupRequests extends Component {
  state = {
    title: '',
    content: '',
    group:''
  }

 
  render() {
    return(
    <div>
  <h2>Group Members</h2>
  <br></br>
            { this.props.groups && this.props.groups.map(group =>{ return(
                
               <div>
                 {group.members && group.groupOwner == this.props.email ? <MemberList list={group}></MemberList> : null}
              </div>
                
            )})}
            <br></br>
        </div>
    )
  }
    
}

export default GroupRequests