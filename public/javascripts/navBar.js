//Akhila
async function isUserLogged() {
  try {
    const res = await fetch("/getuser");
    const user = await res.json();
    if (user.name) {
      let updateSignUp = document.getElementById("signup");
      console.log("element signout", updateSignUp);
      updateSignUp.innerHTML = `Sign out`;
      updateSignUp.href = "../index.html";
      let updateUserName = document.getElementById("signin");
      updateUserName.innerHTML = `Hi ${user.name}`;
      // Adding the create button for posts
      let createPosts = document.getElementById("createPosts");

      if (window.location.pathname === "/postList.html") {
        let btn = document.createElement("button");
        btn.innerHTML = "Add Posts";
        createPosts.appendChild(btn);
        console.log(window.location);
        btn.addEventListener("click", () => {
          //Redirect to create Posts
          window.location.href = "../createPost.html";
        });
      }
      updateSignUp.addEventListener("click", async () => {
        let res = await fetch("/signout");
        console.log("signout successfully");
      });
    }
  } catch (err) {
    console.log(err);
  }
}
isUserLogged();