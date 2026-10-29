importScripts("https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDG3esUCYtU8jw_4jQGLW_ajzu5Rw4qYMw",
  authDomain: "takatrack-8c2ec.firebaseapp.com",
  projectId: "takatrack-8c2ec",
  storageBucket: "takatrack-8c2ec.firebasestorage.app",
  messagingSenderId: "116009412611",
  appId: "1:116009412611:web:982a5ba62a961573368636"
});

const messaging = firebase.messaging();
