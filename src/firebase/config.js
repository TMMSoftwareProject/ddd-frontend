import * as firebase from "firebase";
import Config from 'react-native-config'

const firebaseConfig ={
  apiKey: "AIzaSyBlM5bKPePKf_y1uV0ImqBiGLkCP4oy7PY",
  authDomain: "doyurur-mu.firebaseapp.com",
  projectId: "doyurur-mu",
  storageBucket: "doyurur-mu.appspot.com",
  messagingSenderId: "779643784588",
  appId: "1:779643784588:android:f5ec050e09f3fcd9571aa9"
};
let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth, app }