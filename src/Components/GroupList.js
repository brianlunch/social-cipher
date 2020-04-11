import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {connect} from 'react-redux'
import {removeMember, addMember, addMemberRequest} from '../Store/actions/postActions'



class GroupList extends Component {
  state = {
    title: '',
    content: '',
    group:''
  }

  memberPressed = (e) => {
    console.log(this.state);
    //this.props.removeMember(this.state)
    this.setState(
      {
      groupID:e.target.id,
      member: this.props.email
      },
      () => {
        this.props.removeMember(this.state)
      });
  }
  
  nonMemberPressed = (e) => {
    this.setState(
      {
      groupID:e.target.id,
      member: this.props.email
      },
      () => {
        this.props.addMemberRequest(this.state)
      });
  
  }
  
  render() {
    return(
    <div>
            { this.props.groups && this.props.groups.map(group =>{ return(
               <div className = "row groupList">
                 <div className = "col-7">
                  <h5 class="card-title">{group.groupName}</h5>
                  </div>
                  <div className = "col-5">
                  {group.members && group.members.includes(this.props.email) ? <a id ={group.id} onClick={this.memberPressed}>Member</a> : group.requests && group.requests.includes(this.props.email) ? <a id ={group.id} onClick={this.nonMemberPressed}>Requested</a>:<a id ={group.id} onClick={this.nonMemberPressed}>Not Member</a>}
                  </div>
                </div>
                
            )})}
        </div>
    )
  }
    
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeMember: (group) => dispatch(removeMember(group)),
    addMemberRequest: (group) => dispatch(addMemberRequest(group))
  }
}

export default connect(null, mapDispatchToProps)(GroupList)