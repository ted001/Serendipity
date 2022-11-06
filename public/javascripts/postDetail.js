// File written by Zhiyi Jin

function PostDetails() {
  const url = location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const post = {};

  // get date
  function getDate(createdTime) {
    let date = new Date(parseInt(createdTime));

    let formatDate = date.toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
      hour12: true,
    });
    return formatDate;
  }

  // some code from trashare
  // https://github.com/fcchung/trashare
  post.show = async () => {
    const posts = await fetch("/api/posts/" + id);
    const datas = await posts.json();

    if (posts.ok) {
      const data = datas[0];
      console.log("data", data);
      const title = document.querySelector("h1");
      const description = document.querySelector("#description");
      const createdAt = document.querySelector("#createdAt");
      const deleteButton = document.getElementById("deleteButton");
      const address = document.getElementById("address");

      title.innerHTML = data.title;
      description.innerHTML = data.description;
      createdAt.innerHTML = "Published: " + getDate(data.createdAt);
      address.innerHTML = data.address;

      deleteButton.addEventListener("click", async () => {
        await fetch("/api/posts/" + id, {
          method: "delete",
        });

        window.location.replace("/posts"); // I like that you redirect to posts afterward.
      });
      const user = sessionStorage.getItem("email");
      console.log("user: " + user);

      // I think it's cool that you allow everyone to view the posts, whether or not they're logged in!
      // It's great that you change what users can do with the posts based on whether or not they're logged in!
      if (user === "null") {
        console.log("user: " + "hidden");
        deleteButton.style.visibility = "hidden";
      } else {
        console.log("user: " + "visible");
        // I think it would make sense for only the user who created the post to be able to delete it:
        if (user === data.userEmail) {
          deleteButton.style.visibility = "visible";
        }
        // deleteButton.style.visibility = "visible";
      }

      //Load image
      const postImages = document.getElementById("postImage");
      let image = data.images[0];
      postImages.src = image;
    }
  };

  return post;
}

const postDetail = PostDetails();
postDetail.show();
