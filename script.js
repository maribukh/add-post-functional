function togglePostDetails() {
  let postContainer = document.querySelector(".post-container");

  if (
    postContainer.style.display === "none" ||
    postContainer.style.display === ""
  ) {
    postContainer.style.display = "block";
  } else {
    postContainer.style.display = "none";
  }
}

function toggleAddPost() {
  let;
}

function deleteButton(element) {
  let postContainer = element.closest(".post-container");
  postContainer.style.display = "none";

  let input = document.querySelector(".input-container input");

  input.value = "";
}

function addPost() {
  let input = document.querySelector(".input-container input");
  let post = document.querySelector(".post");
  let textPost = document.createElement("p");
  let postContainer = document.querySelector(".post-container");

  if (input.value !== "") {
    textPost.className = "text";
    textPost.textContent = input.value;
    post.appendChild(textPost);
    input.value = "";
    postContainer.style.display = "none";
  }
}
