 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC9vEXTqtR4s6n1_IU9lOsZqjyTBVftq6o",
    authDomain: "united-b0e49.firebaseapp.com",
    databaseURL: "https://united-b0e49-default-rtdb.firebaseio.com",
    projectId: "united-b0e49",
    storageBucket: "united-b0e49.firebasestorage.app",
    messagingSenderId: "397316084824",
    appId: "1:397316084824:web:7a6f514f664c5cefa7a62d",
    measurementId: "G-7CER6QJHCL"
  };

  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const login=document.getElementById("login");

 login.addEventListener("click",function(event){
        event.preventDefault();
       const email=document.getElementById("email").value;
       const password=document.getElementById("password").value;
       if (!ADMIN_EMAILS.includes(email)) {
        document.getElementById('errorMsg').innerText = "Access denied: Not an admin email!";
        return;
      }
      signInWithEmailAndPassword(auth,email, password)
        .then(() => {
          window.location.href = "index.html";
        })
        .catch(err => {
          document.getElementById('errorMsg').innerText = err.message;
        });
 });
  