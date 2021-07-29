const dateRange = [];
const datepickerStart = datepicker('[data-cy="daterange-input-start"]', {
  id: 1,
  alwaysShow: 0,
});
const datepickerEnd = datepicker('[data-cy="daterange-input-end"]', {
  id: 1,
  alwaysShow: 0,
});

document.querySelector("#dateForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let startDate = document.querySelector("#start").value;
  let endDate = document.querySelector("#end").value;

  startDate = new Date(startDate).toISOString();
  endDate = new Date(endDate).toISOString();

  document.location.href = `/reservation/kennel?startDate=${startDate}&endDate=${endDate}`;
});
// console.log(dateRange);

// datepicker("input", {
//   alwaysShow: 0,
//   defaultView: "overlay",
// });
