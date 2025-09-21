
console.log("hello");



console.log("hello");
  // Initialize Firebase (fill with your project details)
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
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
 // const analytics = firebase.analytics();
  // Example event log
  //analytics.logEvent('dashboard_visited');
  
  



// Example: highlight active tab, future interactivity can be added here
document.querySelectorAll('.sidebar nav ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.sidebar nav ul li').forEach(li => li.classList.remove('active'));
        this.classList.add('active');
    });
});


  // Highlight the active menu based on current page
  window.onload = function() {
    const navMap = {
      "index.html": "nav-overview",
      "lawyers.html": "nav-lawyers",
      "users.html": "nav-users",
      "appointments.html": "nav-appointments",
      "documents.html": "nav-documents",
      "settings.html": "nav-settings"
    };
    const page = location.pathname.split("/").pop();
    if (navMap[page]) document.getElementById(navMap[page]).classList.add("active");
  }











function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}






 