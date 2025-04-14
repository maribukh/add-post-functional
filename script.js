function togglePostDetails() {
  let postContainer = document.querySelector(".post-container");
  let postSection = document.querySelector(".post");

  let isHidden =
    postContainer.style.display === "none" ||
    postContainer.style.display === "";

  if (isHidden) {
    postContainer.style.display = "block";
    postSection.style.display = "none";
  } else {
    postContainer.style.display = "none";
    postSection.style.display = "block";
  }
}

function deleteButton(element) {
  let postContainer = element.closest(".post-container");
  let postSection = document.querySelector(".post");
  postContainer.style.display = "none";
  postSection.style.display = "block";
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

  let timeWrapper = document.createElement("div");
  timeWrapper.className = "time-wrapper";

  let dateTime = document.createElement("span");
  let now = new Date();
  let options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  dateTime.textContent = now.toLocaleString("en-US", options);
  dateTime.className = "timestamp";

  let icon = document.createElement("img");
  icon.src = "./images/public.svg";
  icon.alt = "visibility icon";
  icon.className = "time-icon";

  timeWrapper.appendChild(dateTime);
  timeWrapper.appendChild(icon);

  let rightSideClone = personClone.querySelector(".right-side");
  if (rightSideClone) {
    let name = rightSideClone.querySelector("p");
    if (name) {
      rightSideClone.insertBefore(timeWrapper, name.nextSibling);
    } else {
      rightSideClone.appendChild(timeWrapper);
    }
  }

  if (input.value !== "") {
    postBox.className = "postBox";
    textPost.className = "text";
    textPost.textContent = input.value;

    postBox.appendChild(personClone);
    postBox.appendChild(textPost);
    post.appendChild(postBox);

    post.prepend(postBox);

    input.value = "";
    postContainer.style.display = "none";
    post.style.display = "block";
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
