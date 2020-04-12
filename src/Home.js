import React, { Component } from "react";
import TitleContainer from './Components/TitleContainer';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

class Home extends Component {
  render() {
    return (
      <div className = "home">
        
        <div className = "row justify-content-center">
          <div className = "col-5">
        <TitleContainer
          title="Social Cipher"
          subtitle="A secure social media platform that encrypts all your posts and lets group members view them."
        ></TitleContainer>
        </div>
        <div className = "col-7">

        {/* Sign in page where users sign in using a email and password */}

        <SignIn></SignIn>
        

        </div>
        </div>

      </div>
    );
  }
}
 
export default Home;