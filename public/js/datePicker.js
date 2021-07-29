const dateRange = [];
datepicker('[data-cy="daterange-input-start"]', {
  id: 1,
  alwaysShow: 0,
  onSelect: (instance) => {
    dateRange.push(instance.dateSelected);
  },
});
datepicker('[data-cy="daterange-input-end"]', {
  id: 1,
  alwaysShow: 0,
  onSelect: (instance) => {
    dateRange.push(instance.dateSelected);
    console.log(dateRange);
  },
});

// console.log(dateRange);

// datepicker("input", {
//   alwaysShow: 0,
//   defaultView: "overlay",
// });
