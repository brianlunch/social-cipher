import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import {connect} from 'react-redux'
import {removeMember} from '../Store/actions/postActions'




class MemberList extends Component {
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
      const reqs = this.props.list.members;
console.log(this.props);
    return(
        <div>
        
            { reqs.map(member =>{ return(
                
               <div className = "row groupList">
                  <div className ="col-5">
                <h4>{member}</h4>
                </div>
                <div className ="col-1">
                {member != this.props.list.groupOwner ? <a className="text-red" id ={member} onClick={this.removeMember}> Remove</a> : <p>Owner</p>}
                </div>
                </div>
                
            )})}
        </div>
    )
  }
    
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeMember: (group) => dispatch(removeMember(group))
  }
}

export default connect(null, mapDispatchToProps)(MemberList)