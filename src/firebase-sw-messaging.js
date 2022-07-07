importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');

firebase.initializeApp({    
    apiKey: "AIzaSyDk8xLeJ8OYP-7TIwu-qpuADPJBnYalOrQ",        // same as firebase23
    authDomain: "gopal61288-01.firebaseapp.com",              // same as firebase23
    projectId: "gopal61288-01",                               // same as firebase23
    storageBucket: "gopal61288-01.appspot.com",               // same as firebase23
    messagingSenderId: "299268567166",                        // same as firebase23
    appId: "1:299268567166:web:95a5c0d489b1c009cfe82f",                     // this is DIFFERENT from firebase23
    measurementId: "G-7VQ692RF2N"
  });

const messaging = firebase.messaging();