async function petAddForm(event) {
  event.preventDefault();
  const pet_name = document.querySelector("#added-pet").value;

  const response = await fetch("/api/pet", {
    method: "POST",
    body: JSON.stringify({
      pet_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to add pet");
  }
}

const delButtonHandler = async (event) => {
  const targetBtn = event.target.closest(".remove-btn");
  if (targetBtn) {
    const id = targetBtn.getAttribute("data-id");

    const response = await fetch(`/api/pet/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete pet");
    }
  }
};

document.querySelector("#petAdd").addEventListener("click", petAddForm);
document.querySelector(".pet-list").addEventListener("click", delButtonHandler);
