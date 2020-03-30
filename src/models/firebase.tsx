import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBu6q89TKR-6yKMERfiyY-waTlWG8mOax4",
    authDomain: "gufakto-project.firebaseapp.com",
    databaseURL: "https://gufakto-project.firebaseio.com",
    projectId: "gufakto-project",
    storageBucket: "gufakto-project.appspot.com",
    messagingSenderId: "239176602269",
    appId: "1:239176602269:web:882c855e9745a7f1ef7a74",
    measurementId: "G-2EB8DQ677H"
};

firebase.initializeApp(config)


export default firebase;