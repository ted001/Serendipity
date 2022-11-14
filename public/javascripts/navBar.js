//Akhila

// Puting the JS for the navbars that are shared across pages was a great idea!
// It's a good example of how modularization allows you to not repeat code that will be reused,
// and to only have to make changes in one place when you want to change other things. Nicely done!
async function isUserLogged() {
  try {
    const name = sessionStorage.getItem("email");
    if (name != "null" && name != null) {
      let updateSignUp = document.getElementById("signup");
      console.log("element signout", updateSignUp);
      // This is also pretty neat!!
      updateSignUp.innerHTML = `Sign out`;
      updateSignUp.href = "../index.html";
      let updateUserName = document.getElementById("signin");
      // I like that you put the person's name in the navbar -- it gives a personal feel.
      // Without changing this element's href, it still directs to the login page, which was a little confusing.
      // I'd recommend changing what it links to as well as what it says.
      updateUserName.setAttribute("href", "#");
      updateUserName.innerHTML = `Hi ${name}`;
      //Really like having the personal touch of greeting the user by their name!
      // Adding the create button for posts
      let createPosts = document.getElementById("createPosts");
      // I didn't see this used elsewhere in this file and I didn't see a logout id in the html
//       let logout = document.getElementById("logout");
      // This is cool -- checking where you are to determine what to display
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
