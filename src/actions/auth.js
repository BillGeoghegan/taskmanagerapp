import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';
import database from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLoginGoogle = (uid) => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then(function(result){
      const username = result.user.displayName;
      const profilePicture = result.user.photoURL;
      database.ref(`users/${result.user.uid}/username`).set(username);      //Always access Username
      database.ref(`users/${result.user.uid}/profile`).set(profilePicture); //Always access Profile Picture
    });
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const getUserName = () => {
  var user = firebase.auth().currentUser.displayName;
  if(user){
    return user;
  }else{
    return 'Anonymous';
  }
};

export const getUserProfile = () => {
  var user = firebase.auth().currentUser.photoURL;
  if(user){
    return user;
  }else{
    return '/images/usericon.png';
  }
};