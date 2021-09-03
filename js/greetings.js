const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  localStorage.setItem("username",loginInput.value);
  paintGreetings();
}
function paintGreetings(){
  const username=localStorage.getItem("username");
  greeting.innerHTML=`Hello ${username}`;
  greeting.classList.remove("hidden");
}
const savedUsername=localStorage.getItem("username");
if(savedUsername===null){
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit",onLoginSubmit);
}
else{
  paintGreetings();
}