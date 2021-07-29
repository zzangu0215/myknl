const postId = document.querySelector('input[name="post-id"]').value;

const deleteClickHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteClickHandler);
