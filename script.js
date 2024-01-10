function openLightbox(imageSrc, title) {
  document.getElementById("lightbox-image").src = imageSrc;
  document.getElementById("lightbox-title").textContent = title;
  document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
}
document.addEventListener("DOMContentLoaded", function () {
  const comments = getCommentsFromLocalStorage();
  displayComments(comments);
});

function addComment() {
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value.trim();

  if (commentText !== "") {
    const newComment = {
      text: commentText,
      timestamp: new Date().toLocaleString(),
    };
    const comments = getCommentsFromLocalStorage();
    comments.push(newComment);
    saveCommentsToLocalStorage(comments);

    displayComments(comments);

    commentInput.value = "";
  }
}

function getCommentsFromLocalStorage() {
  const commentsString = localStorage.getItem("comments");
  return commentsString ? JSON.parse(commentsString) : [];
}

function saveCommentsToLocalStorage(comments) {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function displayComments(comments) {
  const commentList = document.getElementById("comment-list");

  commentList.innerHTML = "";
  comments.forEach((comment) => {
    const listItem = document.createElement("li");
    listItem.className = "comment";
    listItem.textContent = `${comment.text} - ${comment.timestamp}`;
    commentList.appendChild(listItem);
  });
}
