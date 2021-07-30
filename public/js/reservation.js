const dropdown = document.getElementById("#userPets");
const startDate = document.querySelector('input[name="startDate"]').value;
const endDate = document.querySelector('input[name="endDate"]').value;
const chosenPet = dropdown.options[dropdown.selectedIndex].value;

const reservePet = async function (event) {
  event.preventDefault();

  await fetch(`/api/reservation/kennel`, {
    method: "PUT",
    body: JSON.stringify({
      chosenPet,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const confirmRes = async function (event) {
  event.preventDefault();

  await fetch(`/api/reservation/kennel`, {
    method: "POST",
    body: JSON.stringify({
      startDate,
      endDate,
      chosenPet,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/reservation-lists");
};

const deleteClickHandler = async function () {
  await fetch(`/api/reservation/kennel`, {
    method: "DELETE",
  });

  document.location.replace("/reservation/dates");
};

document.querySelector("#userPets").addEventListener("click", reservePet);
document.querySelector("#confirm").addEventListener("submit", confirmRes);
document.querySelector("#cancel").addEventListener("click", deleteClickHandler);
