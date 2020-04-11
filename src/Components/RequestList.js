import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {connect} from 'react-redux'
import {acceptRequest, rejectRequest, addMemberRequest} from '../Store/actions/postActions'




class RequestList extends Component {
  state = {
    title: '',
    content: '',
    group:''
  }

  rejectRequest = (e) => {
    console.log('hey');
    //this.props.removeMember(this.state)
    
    this.setState(
      {
        
      groupID:this.props.list.id,
      member: e.target.id

      },
      () => {
        this.props.rejectRequest(this.state)
      });
      
  }
  
  acceptRequest = (e) => {
    this.setState(
      {
        groupID:this.props.list.id,
        member: e.target.id
      },
      () => {
        this.props.acceptRequest(this.state)
        this.props.rejectRequest(this.state)
      });
  
  }
  
  render() {
      const reqs = this.props.list.requests;
console.log(this.props);
    return(
        <div class="requestList">
        
            { reqs.map(request =>{ return(
                
               <div className = "row reqList">

                <div className ="col-5">
                <h4>{request}</h4>
                </div>
                <div className ="col-1 text-green">
                <a id ={request} onClick={this.acceptRequest}> Accept</a>
                </div>
                <div className ="col-1 text-red">
                <a id ={request} onClick={this.rejectRequest}> Reject</a>
                </div>
                </div>
                
            )})}
        </div>
    )
  }
    
}

const mapDispatchToProps = (dispatch) => {
  return{
    acceptRequest: (group) => dispatch(acceptRequest(group)),
    rejectRequest: (group) => dispatch(rejectRequest(group))
  }
}

export default connect(null, mapDispatchToProps)(RequestList)