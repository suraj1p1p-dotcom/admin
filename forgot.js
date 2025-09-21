
import {firebase} from  "app.js";
const auth = firebase.auth();

    // Function to reset the password
    function resetPassword() {
      const email = document.getElementById('email').value;
      
      if (!email) {
        document.getElementById('errorMsg').innerText = "Please enter your admin email!";
        return;
      }

      document.getElementById('errorMsg').innerText = ''; // Clear any previous error messages
      document.getElementById('successMsg').innerText = ''; // Clear success message

      auth.sendPasswordResetEmail(email)
        .then(() => {
          document.getElementById('successMsg').innerText = "Password reset email sent! Please check your inbox.";
        })
        .catch((error) => {
          let errorMessage = error.message;
          
          if (errorMessage.includes("auth/invalid-email")) {
            errorMessage = "Invalid email address format.";
          } else if (errorMessage.includes("auth/user-not-found")) {
            errorMessage = "No account found with this email.";
          }

          document.getElementById('errorMsg').innerText = errorMessage;
        });
    }
