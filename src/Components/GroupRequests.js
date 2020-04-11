import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {connect} from 'react-redux'
import {removeMember, addMember, addMemberRequest} from '../Store/actions/postActions'

import RequestList from './RequestList'



class GroupRequests extends Component {
  state = {
    title: '',
    content: '',
    group:''
  }

 
  render() {
    return(
    <div class="groupReqs">
        <h2>Group Requests</h2> <br></br>
            { this.props.groups && this.props.groups.map(group =>{ return(
                
               <div>
                 {group.requests && group.groupOwner == this.props.email ? <RequestList list={group}></RequestList> : null}
              </div>
                
            )})}
            <br></br>
        </div>
    )
  }
    
}

export default GroupRequests