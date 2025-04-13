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

function deleteButton(element) {
  let postContainer = element.closest(".post-container");
  postContainer.style.display = "none";
}
