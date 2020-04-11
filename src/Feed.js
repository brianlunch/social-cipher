import React, { Component } from "react";
import PostForm from './Components/PostForm'
import PostList from './Components/PostList'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import './style.css'
 
class Feed extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className = "row">
        <div className ="col-5">
        <h2>Feed Page</h2>
        {/* The form to submit a new post - on submit it adds the post to the feed and DB */}
        <PostForm groups={this.props.groups} email={this.props.email}></PostForm>
        </div>
        <div className ="col-7">
          <div className = "containsPostList">
            {/* Lists all the posts in the DB, will appear as cipher text if user is not a member of the group */}
        <PostList groups={this.props.groups} posts={this.props.posts} email={this.props.email}></PostList>
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
    email: state.firebase.auth.email
  }
} 
export default compose(firestoreConnect(['Posts','Groups']),connect(mapStateToProps))(Feed)