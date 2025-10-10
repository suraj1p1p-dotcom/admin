
console.log("hello");



console.log("hello");
  // Initialize Firebase (fill with your project details)
  const firebaseConfig = {
    apiKey: "AIzaSyDs48nwFu3AjI5QeVizu5frTLFIyIMrFQQ",
    authDomain: "legalnect-af122.firebaseapp.com",
    projectId: "legalnect-af122",
    storageBucket: "legalnect-af122.firebasestorage.app",
    messagingSenderId: "162103091508",
    appId: "1:162103091508:web:b879f704fdd220f5dc0561",
    measurementId: "G-QEQN6FCPSL"
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







 
