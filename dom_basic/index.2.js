const postContainer = document.querySelector(".post-container");

postContainer.addEventListener("click", (e) => {
  const clickedElement = e.target;

  if (clickedElement.tagName === "BUTTON") {
    const button = clickedElement.classList[0];

    switch (button) {
      case "like":
        console.log("Like");
        break;
      case "comment":
        console.log("Comment");
        break;

      case "share":
        console.log("Share");
        break;
      default:
        break;
    }
  }
});

const postTitle = document.querySelector("#post-title");
const form = document.querySelector("#post-add-form");
function addPost() {
  const title = postTitle.value;
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerHTML = `
    <div class="profile">
      <span class="profile-image">
        <img src="https://via.placeholder.com/50" alt="profile-image" />
      </span>
      <span class="profile-name">
        <strong>${title}</strong>
      </span>
    </div>
    <div class="post-image">
      <img src="https://via.placeholder.com/150" alt="post-image" />
    </div>
    <div class="buttons">
      <button class="like"></button>
      <button class="comment"></button>
      <button class="share"></button>
    </div>
  `;

  postContainer.appendChild(post);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addPost();
  postTitle.value = "";
});
