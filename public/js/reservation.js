// const dropdown = document.getElementById("#userPets");
const startDate = document.querySelector('input[name="startDate"]').value;
const endDate = document.querySelector('input[name="endDate"]').value;

let pet;
let kennel;
// const chosenPet = dropdown.options[dropdown.selectedIndex].value;

// const reservePet = async function (event) {
//   event.preventDefault();

//   await fetch(`/api/reservation/kennel`, {
//     method: "PUT",
//     body: JSON.stringify({
//       chosenPet,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

const confirmRes = async function (event) {
  event.preventDefault();

  console.log({ pet });
  console.log({ kennel });

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

  // document.location.replace("/reservation-lists");
};

const deleteClickHandler = async function () {
  await fetch(`/api/reservation/kennel`, {
    method: "DELETE",
  });

  document.location.replace("/reservation/dates");
};

function myFunction() {
  console.log(this.value);

  pet = this.value;

  return pet;
}

// const whatever = async (event) => {
//   const targetBtn = event.target.closest(".myBtn");

//   if (targetBtn) {
//     const id = targetBtn.getAttribute("data-id");

//     console.log(id);
//   }
// };

function myFunction2() {
  console.log(this.value);

  kennel = this.value;

  return kennel;
}

// document.querySelector("#userPets").addEventListener("click", reservePet);
document
  .querySelector(".reservation-form")
  .addEventListener("submit", confirmRes);
document.querySelector("#cancel").addEventListener("click", deleteClickHandler);

// document.querySelector(".myBtn").addEventListener("click", myFunction);

const kennelBtns = document.querySelectorAll(".myBtn2");
for (let i = 0; i < kennelBtns.length; i++) {
  kennelBtns[i].addEventListener("click", myFunction2);
}

const petBtns = document.querySelectorAll(".myBtn");
for (let i = 0; i < petBtns.length; i++) {
  petBtns[i].addEventListener("click", myFunction);
}
