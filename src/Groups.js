import React, { Component } from "react";
import PostForm from './Components/PostForm'
import PostList from './Components/PostList'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import './style.css'
import GroupList from './Components/GroupList'
import GroupRequests from "./Components/GroupRequests";
import GroupMembers from './Components/GroupMembers';

 
class Groups extends Component {
  render() {
    //console.log(this.props)
    return (
      <div className="groupPage">
        <div className = "row">
        <div className ="col-4">
        <div className = "allGroupsContainer">
        <h2>All Groups</h2>
        {/* A list of all groups in the database and wether the logged in user is a member of that group or not */}
        <GroupList groups= {this.props.groups} email={this.props.email}></GroupList>
        </div>
        {/* <h2>All Users</h2>
        <UserList groups= {this.props.groups}  users={this.props.users} email={this.props.email}></UserList> */}
        </div>
        <div className ="col-8 req">
        <div className = "reqContainer">
          <br></br>
          {/* A list of all requests from other users wanting to join the logged in users group */}
        <GroupRequests groups ={this.props.groups} email={this.props.email}></GroupRequests>
        </div>
        <div className = "reqContainer">
        <br></br>
        {/* A list of all members of the logged in users group - they can remove people from here */}
        <GroupMembers groups ={this.props.groups} email={this.props.email}></GroupMembers>
        </div>
        </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  console.log(state);
  return{
    posts: state.firestore.ordered.Posts,
    groups: state.firestore.ordered.Groups,
    users: state.firestore.ordered.Users,
    email: state.firebase.auth.email
  }
} 
export default compose(firestoreConnect(['Posts','Groups','Users']),connect(mapStateToProps))(Groups)