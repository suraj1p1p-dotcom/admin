

let editingId = null, lawyersCache = [], filterStatus = "all";

function fetchLawyers(query="") {
  db.collection("lawyers").orderBy("name").onSnapshot(snap => {
    lawyersCache = [];
    snap.forEach(doc => {
      const l = doc.data();
      if (query && !(l.name.toLowerCase().includes(query.toLowerCase()) || 
                     l.email.toLowerCase().includes(query.toLowerCase()) ||
                     l.specialization.toLowerCase().includes(query.toLowerCase()))) return;
      lawyersCache.push({...l, id: doc.id});
    });
    renderLawyers();
  });
}
function renderLawyers() {
  let listDiv = document.getElementById("lawyersList");
  listDiv.innerHTML = "";
  let filtered = lawyersCache.filter(lawyer => filterStatus==="all" ? true : lawyer.status===filterStatus);
  filtered.forEach(l => {
    listDiv.innerHTML += `
      <div class="lawyer-card">
        <div>
          <span class="lawyer-status-badge ${l.status}">${capitalize(l.status || "pending")}</span>
          <b>${l.name}</b> 
          <span style="font-size:13px">Bar #: ${l.barNumber || ""}</span>
        </div>
        <div>Email: ${l.email || ""}</div>
        <div>Specialization: ${l.specialization || ""}</div>
        <div>Experience: ${l.experience || ""} years</div>
        <div>Registered: ${l.registrationDate || ""}</div>
        <div>
          <button class="lawyer-action-btn" onclick="reviewLawyer('${l.id}')">Review</button>
          <button class="lawyer-action-btn" onclick="approveLawyer('${l.id}')">Approve</button>
          <button class="lawyer-action-btn" onclick="rejectLawyer('${l.id}')">Reject</button>
          <button class="lawyer-action-btn" onclick="editLawyer('${l.id}')">Edit</button>
          <button class="lawyer-action-btn" onclick="deleteLawyer('${l.id}')">Delete</button>
        </div>
      </div>`;
  });
}
function capitalize(str){ return str.charAt(0).toUpperCase()+str.slice(1);}
fetchLawyers();

function searchLawyers() {
  const q = document.getElementById('searchInput').value;
  fetchLawyers(q);
}
function filterLawyers(status) { filterStatus = status; renderLawyers(); }
function showLawyerModal(isEdit = false) {
  document.getElementById("lawyerModal").style.display = "block";
  document.getElementById("modalTitle").innerText = isEdit ? "Edit Lawyer" : "Add Lawyer";
}
function closeLawyerModal() {
  document.getElementById("lawyerModal").style.display = "none";
  document.getElementById("lawyerName").value = "";
  document.getElementById("lawyerEmail").value = "";
  document.getElementById("lawyerBarNumber").value = "";
  document.getElementById("lawyerSpecialization").value = "";
  document.getElementById("lawyerExperience").value = "";
  document.getElementById("lawyerRegistrationDate").value = "";
  document.getElementById("lawyerStatus").value = "pending";
  editingId = null;
}

function saveLawyer() {
  const lawyer = {
    name: document.getElementById("lawyerName").value,
    email: document.getElementById("lawyerEmail").value,
    barNumber: document.getElementById("lawyerBarNumber").value,
    specialization: document.getElementById("lawyerSpecialization").value,
    experience: document.getElementById("lawyerExperience").value,
    registrationDate: document.getElementById("lawyerRegistrationDate").value,
    status: document.getElementById("lawyerStatus").value
  };
  if (editingId) {
    db.collection("lawyers").doc(editingId).update(lawyer).then(closeLawyerModal);
  } else {
    db.collection("lawyers").add(lawyer).then(closeLawyerModal);
  }
}
function editLawyer(id) {
  const l = lawyersCache.find(l => l.id===id);
  editingId = id;
  document.getElementById("lawyerName").value = l.name || "";
  document.getElementById("lawyerEmail").value = l.email || "";
  document.getElementById("lawyerBarNumber").value = l.barNumber || "";
  document.getElementById("lawyerSpecialization").value = l.specialization || "";
  document.getElementById("lawyerExperience").value = l.experience || "";
  document.getElementById("lawyerRegistrationDate").value = l.registrationDate || "";
  document.getElementById("lawyerStatus").value = l.status || "pending";
  showLawyerModal(true);
}
function deleteLawyer(id) {
  if(confirm("Delete lawyer?")) db.collection("lawyers").doc(id).delete();
}
function approveLawyer(id) { db.collection("lawyers").doc(id).update({status:"approved"}); }
function rejectLawyer(id) { db.collection("lawyers").doc(id).update({status:"rejected"}); }
function reviewLawyer(id) {
  const l = lawyersCache.find(l => l.id===id);
  alert(
    `Review Details:
Name: ${l.name}
Email: ${l.email}
Bar#: ${l.barNumber}
Specialization: ${l.specialization}
Experience: ${l.experience}
Registered: ${l.registrationDate}
Status: ${capitalize(l.status)}`
  );
}

function renderLawyer(lawyer) {
  return `
    <div class="lawyer-card">
      <h3>${lawyer.name}</h3>
      <p>Email: ${lawyer.email}</p>
      <p>Bar #: ${lawyer.barNumber}</p>
      <p>Specialization: ${lawyer.specialization}</p>
      <p>Experience: ${lawyer.experience} years</p>
      <span class="status ${lawyer.status}">${lawyer.status}</span>
    </div>
  `;
}
