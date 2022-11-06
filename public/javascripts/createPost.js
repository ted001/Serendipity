// By Zhiyi Jin
function CreatePost() {
  const newPost = {};

  newPost.submit = () => {
    let submitButton = document.getElementById("newPostBtn");
    let form = document.getElementById("newPostForm");

    submitButton.addEventListener("click", async (event) => {
      event.preventDefault();
      console.log("form submit");
      let formData = new FormData(form);
      let user = sessionStorage.getItem("email");

      // When a new post is created, the userEmail field is undefined. That's becuase the user
      // variable that's initialized above is just the user email and has no email attribute.
      // This will work:
      formData.append("userEmail", user);
      // formData.append("userEmail", user.email);
      formData.append("createdAt", new Date().getTime());

      // The database init entries have multiple images and the /api/posts route can accomodate that, which is cool!
      // If you wanted to be able to accept multiple images from the form, you could add a button to the
      // file input in the html with a listener that adds the file to an array so the user can upload multiple files.

      console.log("fetch /api/posts");
      let res = await fetch("/api/posts", {
        method: "post",
        body: formData,
      });

      console.log("res", res);
      if (res.ok) {
        let json = await res.json();
        // I like that you redirect to the created post's detailed page!
        window.location.replace(`/posts/${json.postId}`);
      }
    });
  };

  return newPost;
}

const newPost = CreatePost();
newPost.submit();
