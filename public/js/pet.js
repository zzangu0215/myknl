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

async function removePet(event) {
  event.preventDefault();
  const pet_name = document.querySelector("#added-pet").value;

  // Send fetch request to add a new dish
  const response = await fetch("/api/pet/:id", {
    method: "DELETE",
  });
  // if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to remove a pet");
  }
}

document.querySelector("#petAdd").addEventListener("click", petAddForm);
document.querySelector("#petAdd").addEventListener("click", petAddForm);

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/projects/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert("Failed to delete project");
//     }
//   }
// };
// document
//   .querySelector(".project-list")
//   .addEventListener("click", delButtonHandler);
