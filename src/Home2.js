import React, { Component } from "react";
import TitleContainer from './Components/TitleContainer';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

class Home2 extends Component {
  render() {
    return (
      <div className = "home">
        <div className = "row">
          <div className = "col-5">
        <TitleContainer
          title="Social Cipher"
          subtitle="A secure social media platform that encrypts all your posts and lets group members view them."
        ></TitleContainer>
        </div>
        <div className = "col-7">

        {/* Users sign up using first name, last name, group name, email and password */}
        <SignUp></SignUp>
        
        </div>
        </div>

      </div>
    );
  }
}
 
export default Home2;