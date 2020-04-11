import firebase from 'firebase'

//This function signs user in using built in firebase command
export const signIn = (credentials) => {
  return ( dispatch, getState) => {
    
    //const firebase = getFirebase();
    console.log(credentials);
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err})
    })

  }
}
//Sign out function
export const signOut = () =>{
  return(dispatch,getState) => {
    firebase.auth().signOut().then(() => {
      dispatch({type:'SIGN_OUT_SUCCESS'});
    });
  } 
}

//This signs a user up and stores them in the DB
export const signUp = (newUser) => {
  return (dispatch,getState, {getFirestore}) => {
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp)=>
    {
      return firestore.collection('Users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
        groupName: newUser.groupName
      })
    }).then(() =>{
      dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch(err => {
        dispatch({type: 'SIGNUP_FAILED',err})
    })
  }
}
//This creates a new group when a user signs up
export const signUpGroup = (newUser) =>{
  return (dispatch, getState, {getFirestore}) => {
    //async call
    const randomKey = Math.random().toString(36).slice(2);
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const ownerID = getState().firebase.auth.uid;
    firestore.collection('Groups').add({
      groupOwner: newUser.email,
      members:[newUser.email],
      requests:[],
      groupKey: randomKey,
      groupName: newUser.groupName
    }).then( () => {
        dispatch({type: 'CREATE_GROUP' });
    }).catch((err)=>{
        dispatch({type: 'CREATE_GROUP_ERROR', err });
    })
    
}
};
