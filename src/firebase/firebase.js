import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: "AIzaSyANLaSrBXS1NcqThvLxbaVexLUb1pksHZw",
	authDomain: "expense-tracker-697c2.firebaseapp.com",
	projectId: "expense-tracker-697c2",
	storageBucket: "expense-tracker-697c2.appspot.com",
	messagingSenderId: "209655173705",
	appId: "1:209655173705:web:14b1ede35ce5aea632e598"
  };


  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const google = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export {auth, google, facebookAuthProvider};