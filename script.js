
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.querySelector("input[name='username']").value;
  const password = document.querySelector("input[name='password']").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  // Perform login logic (e.g., send credentials to server for authentication)

  if (rememberMe) {
    setCookie("username", username, 30); // Set cookie for 30 days
  }
});
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + "; " + expires + "; path=/";
}
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return decodeURIComponent(cookie[1]);
    }
  }
  return null;
}

const username = getCookie("username");
if (username) {
  document.querySelector("input[name='username']").value = username;
  // Optionally, check the "Remember Me" checkbox
  document.getElementById("rememberMe").checked = true;
}
function redirect(){
  window.location.href = "home.html" ;
  return false;
}
document.getElementById("myForm").addEventListener("submit",function(){
  alertIt();
  return redirect(); 
},false);
function alertIt(){
  alert("redirect");
}
function login(){
  window.location.href="login.html"
}
function home(){
  window.location.href="index.html"
}
function popup() {
  window.alert("not all links are intended to work");
alert("not all links are intended to work");
}

