 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDs48nwFu3AjI5QeVizu5frTLFIyIMrFQQ",
    authDomain: "legalnect-af122.firebaseapp.com",
    projectId: "legalnect-af122",
    storageBucket: "legalnect-af122.firebasestorage.app",
    messagingSenderId: "162103091508",
    appId: "1:162103091508:web:b879f704fdd220f5dc0561",
    measurementId: "G-QEQN6FCPSL"
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

  
