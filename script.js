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
