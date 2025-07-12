document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("employeeForm");
  const editId = localStorage.getItem("editId");

  if (editId) {
    document.getElementById("formTitle").innerText = "Edit Employee";
    // You can load existing form data here (if saved somewhere)
    localStorage.removeItem("editId");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = {
      id: document.getElementById("employeeId").value || Date.now(),
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      email: document.getElementById("email").value.trim(),
      department: document.getElementById("department").value.trim(),
      role: document.getElementById("role").value.trim(),
    };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
      alert("Invalid email");
      return;
    }
    console.log("Employee saved locally:", d);
    window.location.href = "index.ftl";
  });
});
