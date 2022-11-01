// By Zhiyi Jin
function CreatePost() {
  const newPost = {};

  newPost.submit = () => {
    let form = document.getElementById("newPostForm");

    form.addEventListener("submit", async (event) => {
      let formData = new FormData(form);
      let user = JSON.parse(sessionStorage.getItem("user"));

      formData.append("userEmail", user.email);
      formData.append("createdAt", new Date().getTime());

      let res = await fetch("/api/posts", {
        method: "post",
        body: formData,
      });

      if (res.ok) {
        let json = await res.json();
        window.location.replace(`/posts/${json.postId}`);
      }
    });
  };

  return newPost;
}

const newPost = CreatePost();
newPost.submit();
