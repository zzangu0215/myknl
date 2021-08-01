const delButtonHandler = async (event) => {
  console.log(event.target);
  console.log(event.target.closest(".remove-btn"));

  const targetBtn = event.target.closest(".remove-btn");
  if (targetBtn) {
    const id = targetBtn.getAttribute("data-id");

    const response = await fetch(`/api/reserved/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/reservation-lists");
    } else {
      alert("Failed to delete reservation");
    }
  }
};

document
  .querySelector(".reservations-list")
  .addEventListener("click", delButtonHandler);
