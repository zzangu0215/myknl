const startDate = document.querySelector('input[name="startDate"]').value;
const endDate = document.querySelector('input[name="endDate"]').value;

let pet;
let kennel;

const confirmRes = async function (event) {
  event.preventDefault();

  await fetch(`/api/reservation/kennel`, {
    method: "POST",
    body: JSON.stringify({
      startDate,
      endDate,
      pet,
      kennel,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace(`/reservation-lists?petId=${pet}`);
};

const deleteClickHandler = async function () {
  await fetch(`/api/reservation/kennel`, {
    method: "DELETE",
  });

  document.location.replace("/reservation/dates");
};

function petSelection() {
  pet = this.value;

  return pet;
}

function kennelSelection() {
  kennel = this.value;

  return kennel;
}

document
  .querySelector(".reservation-form")
  .addEventListener("submit", confirmRes);
document.querySelector("#cancel").addEventListener("click", deleteClickHandler);

const kennelBtns = document.querySelectorAll(".kennelSelectBtn");
for (let i = 0; i < kennelBtns.length; i++) {
  kennelBtns[i].addEventListener("click", kennelSelection);
}

const petBtns = document.querySelectorAll(".petSelectBtn");
for (let i = 0; i < petBtns.length; i++) {
  petBtns[i].addEventListener("click", petSelection);
}
