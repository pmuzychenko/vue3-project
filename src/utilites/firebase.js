import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCZGbaUHNie_8WKLwSUK75HZJQRLpaPFgM",
   authDomain: "vue3-project-bca03.firebaseapp.com",
   projectId: "vue3-project-bca03",
   storageBucket: "vue3-project-bca03.appspot.com",
   messagingSenderId: "438970177817",
   appId: "1:438970177817:web:b21494743b093ae11b0d88"
};

firebase.initializeApp(firebaseConfig);
export default firebase;