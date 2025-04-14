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
  document.querySelector(".input-container input").value = "";
}

function addPost() {
  let input = document.querySelector(".input-container input");
  let post = document.querySelector(".post");
  let postBox = document.createElement("div");
  let personOriginal = document.querySelector(".person");
  let personClone = personOriginal.cloneNode(true);
  let textPost = document.createElement("p");
  let postContainer = document.querySelector(".post-container");

  let selectInClone = personClone.querySelector("select");
  if (selectInClone) {
    selectInClone.remove();
  }

  let imgBgd = personClone.querySelector(".img-bgd");
  if (imgBgd) {
    imgBgd.style.backgroundImage = "url('./images/profile-photo.jpg')";
  }

  let dateTime = document.createElement("span");
  let now = new Date();
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  dateTime.textContent = now.toLocaleString("en-US", options);
  dateTime.className = "timestamp";

  let personInfo = document.createElement("div");
  personInfo.className = "person-info-wrapper";
  personInfo.appendChild(personClone);
  personInfo.appendChild(dateTime);

  if (input.value !== "") {
    postBox.className = "postBox";
    textPost.className = "text";
    textPost.textContent = input.value;

    postBox.appendChild(personInfo);
    postBox.appendChild(textPost);
    post.appendChild(postBox);

    input.value = "";
    postContainer.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let input = document.querySelector(".input-container input");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addPost();
    }
  });
});
