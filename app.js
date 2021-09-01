const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
function onLoginSubmit(event) {
  event.preventDefault();
  const username=loginInput.value;
  loginForm.classList.add("hidden");
  greeting.innerHTML=`Hello ${username}`;
  greeting.classList.remove("hidden");
}
loginForm.addEventListener("submit",onLoginSubmit);
