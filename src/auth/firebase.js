import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";

//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



export const createUser = async (email, password, navigate, displayName) => {
  try {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential);
} catch (error) {
  alert(error.message);
}


};



export const signIn= async(email, password, navigate)=>{
try {

  //mevcut kullanici girisi icin  fireabaase metodu
  signInWithEmailAndPassword(auth, email, password)
  navigate("/");
} catch (error) {
  alert(error.message)
  
}



}
