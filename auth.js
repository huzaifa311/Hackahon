import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  getDoc,
  getDownloadURL,
  ref,
  setDoc,
  signInWithEmailAndPassword,
  storage,
  uploadBytes,
} from "../firebaseConfig.js";

const registerBtn = document.querySelector("#registerBtn");
registerBtn.addEventListener("click", SignUpButton);

async function SignUpButton(e) {
  e.preventDefault();
  try {
    showLoader();
    const fullName = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    const userAuth = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userAuth.user.uid);
    const uid = userAuth.user.uid;
    const userObj = {
      fullName,
      email: email,
      accountActivate: true,
      uid,
    };
    const userRef = doc(db, "users", uid);
    const userDB = await setDoc(userRef, userObj);
    console.log("userDB", userDB);
    console.log("userObj", userObj);

    location.href = "/admin.html";
  } catch (error) {
    console.log("error", error.message);
  } finally {
    hideLoader();
  }
}

const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click", login);

async function login(e) {
  e.preventDefault();
  try {
    showLoader();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    console.log("email", email, "password", password);
    const userLogin = await signInWithEmailAndPassword(auth, email, password);
    console.log(userLogin);
    location.href = "/admin.html";
  } catch (error) {
    console.error("error", error.message);
  } finally {
    hideLoader();
  }
}
