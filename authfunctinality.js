const loader = document.getElementById("loader");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginPasswordToggle = document.getElementById("loginPasswordToggle");
const signupPasswordToggle = document.getElementById("signupPasswordToggle");
const loginPasswordInput = document.getElementById("loginPassword");
const signupPasswordInput = document.getElementById("signupPassword");

function showLoader() {
  loader.style.display = "flex";
}
function hideLoader() {
  loader.style.display = "none";
}

loginBtn.addEventListener("click", () => {
  loginForm.style.display = "block";
  signupForm.style.display = "none";
  loginBtn.classList.add("text-blue-500");
  signupBtn.classList.remove("text-blue-500");
});

signupBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
  loginBtn.classList.remove("text-blue-500");
  signupBtn.classList.add("text-blue-500");
});

loginPasswordToggle.addEventListener("click", () => {
  togglePasswordVisibility(loginPasswordInput);
});
signupPasswordToggle.addEventListener("click", () => {
  togglePasswordVisibility(signupPasswordInput);
});

function togglePasswordVisibility(inputElement) {
  const type = inputElement.getAttribute("type");
  if (type === "password") {
    inputElement.setAttribute("type", "text");
  } else {
    inputElement.setAttribute("type", "password");
  }
}
