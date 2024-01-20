const temp_optionList = [
  {
    value: 1,
    // text: "Opcion - 01 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima praesentium optio tempore harum nulla amet, nam ipsam consequuntur, unde ex corporis enim dignissimos earum! Excepturi, cupiditate. Sunt nostrum quaerat tempora.",
    text: "Opcion - 01",
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
function _text_btn_select(id, isMultiple, btnSelectPlaceHolder, value, optionList) {
  let temp_txt = "";

  if(isMultiple) {
    if(value.length == optionList.length) {
      temp_txt = `TODO [${value.length}]`;
    } else {
      temp_txt = `${btnSelectPlaceHolder} (${value.length})`;
    }
  } else {
    const _index_value = optionList.map((item) => item.value).indexOf(value);
    if(_index_value >= 0) {
      temp_txt = optionList[_index_value].text;
    } else {
      temp_txt = btnSelectPlaceHolder;
    }
  }

  return temp_txt;
}

tselect.fnInit({
  id: "example03",
  containerClassList: ["example03"],
  btnPlaceHolder: "tSelect - Simple -Example 03",
  btnSelectPlaceHolder: "tSelect",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: example03",
  optionList: temp_optionList,
  // optionSelectedList: [2],
  fnOnValueChange: _value_change,
});
tselect.fnInit({
  id: "example04",
  containerClassList: ["example04"],
  btnPlaceHolder: "tSelect - Multiple -Example 04",
  btnSelectPlaceHolder: "tSelect",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: example04",
  optionList: temp_optionList,
  // optionSelectedList: [2],
  fnOnValueChange: _value_change,
});

tselect.fnInit({
  id: "example05",
  containerClassList: ["example05"],
  btnPlaceHolder: "tSelect - Simple -Example 05",
  btnSelectPlaceHolder: "tSelect",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: example05",
  optionList: temp_optionList,
  isToggleAllEnable: true,
  selectAllPlaceHolder: "Todo",
  deselectAllPlaceHolder: "Nada",
  // optionSelectedList: [2],
  fnOnValueChange: _value_change,
  fnBtnOptionSelectedRender: _text_btn_select,
});
tselect.fnInit({
  id: "example06",
  containerClassList: ["example06"],
  btnPlaceHolder: "tSelect - Multiple -Example 06",
  btnSelectPlaceHolder: "tSelect",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: example06",
  optionList: temp_optionList,
  isToggleAllEnable: true,
  selectAllPlaceHolder: "Todo",
  deselectAllPlaceHolder: "Nada",
  // optionSelectedList: [2],
  fnOnValueChange: _value_change,
  fnBtnOptionSelectedRender: _text_btn_select,
});
