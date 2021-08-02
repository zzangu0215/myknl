const startDate = document.querySelector('input[name="startDate"]').value;
const endDate = document.querySelector('input[name="endDate"]').value;

const confirmKennel = document.querySelector(".confirm-kennelID");
const confirmPet = document.querySelector(".confirm-petName");

let pet;
let kennel;

const confirmRes = async function (event) {
  event.preventDefault();

  if (confirmPet.textContent === "" || confirmKennel.textContent === "") {
    alert("Please select the Kennel and the Pet!");
  } else {
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

    document.location.replace(`/reservation-lists`);
  }
};

const cancelClickHandler = async function () {
  const cancelConfirm = confirm("Press OK to go to date selection.");

  if (cancelConfirm) {
    await fetch(`/api/reservation/kennel`, {
      method: "DELETE",
    });

    document.location.replace("/reservation/dates");
  }
};

function petSelection() {
  pet = this.value;

  confirmPet.textContent = pet;
  return pet;
}

function kennelSelection() {
  kennel = this.value;

  confirmKennel.textContent = kennel;
  return kennel;
}

document
  .querySelector(".reservation-form")
  .addEventListener("submit", confirmRes);
document.querySelector("#cancel").addEventListener("click", cancelClickHandler);

const kennelBtns = document.querySelectorAll(".kennelSelectBtn");
for (let i = 0; i < kennelBtns.length; i++) {
  kennelBtns[i].addEventListener("click", kennelSelection);
}

const petBtns = document.querySelectorAll(".petSelectBtn");
for (let i = 0; i < petBtns.length; i++) {
  petBtns[i].addEventListener("click", petSelection);
}
