//Akhila
function login() {
  let form = document.getElementById("formdiv");
  console.log(form);
  form.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    let formdata = new FormData(form);
    try {
      let res = await fetch("./login", {
        method: "POST",
        body: new URLSearchParams(formdata),
      });
      if (res.status === 200) {
        // Nice! I didn't know that you could do session storage this way!
        sessionStorage.setItem("email", formdata.get("email"));
        window.location.href = "./postList.html";
      } else {
        // I like this alert!
        alert(`Please check your Email and Password`);
      }
    } catch (err) {
      console.log(err);
    }
  });
}

login();
