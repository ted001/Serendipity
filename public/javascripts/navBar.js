//Akhila
async function isUserLogged() {
  try {
    const name = sessionStorage.getItem("email");
    if (name != "null" && name != null) {
      let updateSignUp = document.getElementById("signup");
      console.log("element signout", updateSignUp);
      updateSignUp.innerHTML = `Sign out`;
      updateSignUp.href = "../index.html";
      let updateUserName = document.getElementById("signin");
      updateUserName.innerHTML = `Hi ${name}`;
      //Really like having the personal touch of greeting the user by their name!
      // Adding the create button for posts
      let createPosts = document.getElementById("createPosts");
      let logout = document.getElementById("logout");
      if (window.location.pathname === "/postList.html") {
        let btn = document.createElement("button");
        btn.style.backgroundColor = "transparent";
        btn.style.border = "none";
        btn.style.paddingTop = "10px";
        btn.innerHTML = "Add Posts";
        createPosts.appendChild(btn);

        btn.addEventListener("click", () => {
          //Redirect to create Posts
          window.location.href = "../createPost.html";
        });
      }
      updateSignUp.addEventListener("click", async () => {
        sessionStorage.setItem("email", null);
      });
      // updateSignUp.addEventListener("click", async () => {
      //   console.log("logout1");

      //   console.log("signout successfully");
      // });
    }
  } catch (err) {
    console.log(err);
  }
}
isUserLogged();
