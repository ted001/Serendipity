function login() {
  let form = document.getElementById("loginForm");
  form.addEventListener("submit", async () => {
    console.log("login success");
    sessionStorage.setItem("user", "user");
  });
}

login();
