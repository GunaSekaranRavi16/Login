// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import {initializeAuth,getReactNativePersistence,getAuth} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwmm4FO9I-zuk6AP0CA6VK3IaARPrSW0o",
  authDomain: "loginpage-auth-d1baa.firebaseapp.com",
  projectId: "loginpage-auth-d1baa",
  storageBucket: "loginpage-auth-d1baa.firebasestorage.app",
  messagingSenderId: "830397616518",
  appId: "1:830397616518:web:c64bc4ae61c44432b59c07"
};

let auth;
if(getApps().length==0){
// Initialize Firebase
const app = initializeApp(firebaseConfig);

auth=initializeAuth(app,{
persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})
}
else{
    auth=getAuth();
}
export default  auth;