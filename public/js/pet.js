async function petAddForm(event) {
  event.preventDefault();
  const pet_name = document.querySelector("#added-pet").value;

  // Send fetch request to add a new dish
  const response = await fetch("/api/pet", {
    method: "POST",
    body: JSON.stringify({
      pet_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to add pet");
  }
}

document.querySelector("#petAdd").addEventListener("click", petAddForm);

// const newFormHandler = async function (event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const body = document.querySelector('textarea[name="post-body"]').value;

//   await fetch("/api/post", {
//     method: "POST",
//     body: JSON.stringify({
//       title,
//       body,
//     }),
//     headers: { "Content-Type": "application/json" },
//   });

//   document.location.replace("/dashboard");
// };

// const postId = document.querySelector('input[name="post-id"]').value;

// const deleteClickHandler = async function () {
//   await fetch(`/api/post/${postId}`, {
//     method: "DELETE",
//   });

//   document.location.replace("/dashboard");
// };

// document
//   .querySelector("#new-post-form")
//   .addEventListener("submit", newFormHandler);
// document
//   .querySelector("#delete-btn")
//   .addEventListener("click", deleteClickHandler);
