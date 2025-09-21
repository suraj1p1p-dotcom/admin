//import {firebaseConfig,db} from "./app.js";




  // Initialize Firebase (fill with your project details)
  


let editingUserId = null;

// Fetch and display users from Firestore
function fetchUsers(query = "") {
  db.collection('users').get().then(snapshot => {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = "";
    snapshot.forEach(doc => {
      const user = doc.data();
      if(query && !user.name.toLowerCase().includes(query.toLowerCase())) return;
      tbody.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>${user.status}</td>
          <td>
            <button onclick="editUser('${doc.id}', '${user.name}', '${user.email}', '${user.role}', '${user.status}')">Edit</button>
            <button onclick="deleteUser('${doc.id}')">Delete</button>
          </td>
        </tr>
      `;
    });
  });
}
fetchUsers();

// Search users by name
function searchUsers() {
  const q = document.getElementById('searchInput').value;
  fetchUsers(q);
}

// Show add/edit form
function showAddForm() {
  editingUserId = null;
  document.getElementById('userName').value = "";
  document.getElementById('userEmail').value = "";
  document.getElementById('userRole').value = "";
  document.getElementById('userStatus').value = "Active";
  document.getElementById('userModal').style.display = "block";
}

// Edit user
function editUser(id, name, email, role, status) {
  editingUserId = id;
  document.getElementById('userName').value = name;
  document.getElementById('userEmail').value = email;
  document.getElementById('userRole').value = role;
  document.getElementById('userStatus').value = status;
  document.getElementById('userModal').style.display = "block";
}

// Save (add or update) user
function saveUser() {
  const user = {
    name: document.getElementById('userName').value,
    email: document.getElementById('userEmail').value,
    role: document.getElementById('userRole').value,
    status: document.getElementById('userStatus').value,
  };
  if (editingUserId) {
    db.collection('users').doc(editingUserId).update(user).then(fetchUsers);
  } else {
    db.collection('users').add(user).then(fetchUsers);
  }
  closeModal();
}

// Delete user
function deleteUser(id) {
  if (confirm("Delete this user?")) {
    db.collection('users').doc(id).delete().then(fetchUsers);
  }
}

// Close modal
function closeModal() {
  document.getElementById('userModal').style.display = "none";
}