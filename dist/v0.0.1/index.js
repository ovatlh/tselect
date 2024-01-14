const temp_optionList = [
  {
    value: 1,
    text: "Opcion - 01 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima praesentium optio tempore harum nulla amet, nam ipsam consequuntur, unde ex corporis enim dignissimos earum! Excepturi, cupiditate. Sunt nostrum quaerat tempora.",
    // text: "Opcion - 01",
  },
  {
    value: 2,
    text: "Opcion - 02",
  },
  {
    value: 3,
    text: "Opcion - 03",
  },
  {
    value: 4,
    text: "Opcion - 04",
  },
  {
    value: 5,
    text: "Opcion - 05",
  },
  {
    value: 6,
    text: "Opcion - 06",
  },
  {
    value: 7,
    text: "Opcion - 07",
  },
  {
    value: 8,
    text: "Opcion - 08",
  },
  {
    value: 9,
    text: "Opcion - 09",
  },
  {
    value: 10,
    text: "Opcion - 10",
  },
];

function _value_change(id, value) {
  console.log({ id, value });
}

tselect.fnInit({
  id: "example03",
  btnPlaceHolder: "tSelect - Simple -Example 03",
  searchPlaceHolder: "Buscar: example03",
  optionList: temp_optionList,
  // optionSelectedList: [2],
  fnOnValueChange: _value_change,
});
tselect.fnInit({
  id: "example04",
  btnPlaceHolder: "tSelect - Multiple -Example 04",
  searchPlaceHolder: "Buscar: example04",
  optionList: temp_optionList,
  // optionSelectedList: [2],
  fnOnValueChange: _value_change,
});

tselect.fnInit({
  id: "example05",
  btnPlaceHolder: "tSelect - Simple -Example 05",
  searchPlaceHolder: "Buscar: example05",
  optionList: temp_optionList,
  // optionSelectedList: [2],
  fnOnValueChange: _value_change,
});
tselect.fnInit({
  id: "example06",
  btnPlaceHolder: "tSelect - Multiple -Example 06",
  searchPlaceHolder: "Buscar: example06",
  optionList: temp_optionList,
  // optionSelectedList: [2],
  fnOnValueChange: _value_change,
});
