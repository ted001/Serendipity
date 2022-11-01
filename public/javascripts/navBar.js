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
      let logout = document.getElementById("logout");
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
      let lobtn = document.createElement("button");
      lobtn.innerHTML = "Log out";
      createPosts.appendChild(lobtn);
      lobtn.addEventListener("click", async () => {
        // //Redirect to create Posts
        // window.location.href = "../createPost.html";
        console.log("clicking logout");
        window.location.href = "../index.html";
        const res = await fetch("/signout");
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
