# Project Demo
[Github Pages website](https://brianlunch.github.io/social-cipher/#/) <br />
[Youtube Demo](https://www.youtube.com/watch?v=CvSDZIRmINw&t=9s)

# Components Used
![alt text](https://github.com/brianlunch/social-cipher/blob/master/Blank%20Diagram%20(1).svg "Logo Title Text 1")

# File descriptions

### App.js
This File contains the ReactRouter component which allows the navigation bar to route to the correct pages when used.

### Home.js
This File contains the all components used to create the sign in page including SignIn.js and TitleContainer.js. It positions those two components accordingly to create the sign in page.

### Home2.js
This File contains the all components used to create the sign up page including SignUp.js and TitleContainer.js. It positions those two components accordingly to create the sign up page.


### Feed.js
This File contains the all components used to create the feed page including PostForm.js and PostList.js. It positions those two components accordingly to create the feed page.

### Group.js
This File contains the all components used to create the group page including GroupMembers.js GroupRequests.js and GroupList.js. It positions these three components accordingly to create the feed page.
<br />

### Config
This Folder contains the configuration file firebaseConfiguration.js which contains all details necessary to connect to the firebase database.

### Store
This folder contains all redux related folders: 
#### Actions 
This folder contains authActions.js which has methods for signing in users, signing out users, signing up users and create user groups. It also contains postActions.js which has methods for posting messages, removing group members, rejecting member requests, accepting member requests and adding group members.

#### Reducers 
This folder contains authReducer.js, postReducer.js and rootReducer.js. AuthReducer keeps track of the application state when the user is using methods in authActions.js and postReducer keeps track of application state when the user is using methods in postActions.js. RootReducer simply combines the other two reducers. 
<br />
### Components 
This folder contains all of the components used to create the various pages, they are:

#### GroupList.js 
Displays all groups and states whether the logged in user is a member of them groups or not. It also provides functionality to request to be part of a group and leave a group by calling methods from postActions.js

#### GroupMembers.js 
Finds the logged in users group and passes the group to MemberList.js

#### MemberList.js 
Displays all users of a group passed into it and provides functionality to remove these members from the group by calling methods from postActions.js

#### GroupRequests.js 
Finds the logged in users group and passes the group to RequestList.js

#### RequestList.js 
Displays all requests of a group passed into it and provides functionality to accept/reject these requests by calling methods from postActions.js

#### PostForm.js 
This component creates the form in which users create a post, it has fields such as: title, content and the group in which the post is intended for. The content of the post is encrypted in this component.

#### PostList.js 
This component passes an array of all posts to postSummary.js

#### PostSummary.js 
Displays all the posts as bootstrap cards and also decrypts the content of the post if the logged in user is a member of the group


#### SignIn.js 
Creates the form for signing in a user and calls on authActions.js to sign the user in

#### SignUp.js 
Creates the form for signing up a user and calls on authActions.js to sign the user up

#### TitleContainer.js 
Displays the app title along with a description of the web app.
<br /><br />
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

