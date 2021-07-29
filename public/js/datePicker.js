const dateRange = [];
const datepickerStart = datepicker('[data-cy="daterange-input-start"]', {
  id: 1,
  alwaysShow: 0,
  onSelect: (instance) => {
    dateRange.push(instance.dateSelected);
  },
});
const datepickerEnd = datepicker('[data-cy="daterange-input-end"]', {
  id: 1,
  alwaysShow: 0,
  onSelect: (instance) => {
    dateRange.push(instance.dateSelected);
    console.log(dateRange);
  },
});

const submitHandler = async (event) => {
  event.preventDefault();

  const response = await fetch("/api/reservations", {
    method: "POST",
    body: JSON.stringify({ datepickerStart, datepickerEnd }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/reservations");
  } else {
    alert("Bad Request");
  }
};

document.querySelector("#submitBtn").addEventListener("click", submitHandler);

// console.log(dateRange);

// datepicker("input", {
//   alwaysShow: 0,
//   defaultView: "overlay",
// });
