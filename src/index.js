import { register, login, logout, authState } from "./auth";

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");
const authForms = document.getElementById("authForms");
const home = document.getElementById("home");
const userEmailSpan = document.getElementById("userEmail");

// register function
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  try {
    await register(email, password);
    alert("Registration success");
  } catch (error) {
    alert(`Registration error: ${error.message}`);
  }
});

// login function
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  try {
    await login(email, password);
  } catch (error) {
    alert(`Login error: ${error.message}`);
  }
});

//logout function
logoutBtn.addEventListener("click", async () => {
  try {
    await logout();
  } catch (error) {
    alert(`Logout error: ${error.message}`);
  }
});

// account sign in state
authState((user) => {
  if (user) {
    authForms.style.display = "none";
    home.style.display = "block";
  } else {
    authForms.style.display = "block";
    home.style.display = "none";
  }
});
