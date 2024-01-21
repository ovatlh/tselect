const redes_optionList = [
  {
    value: "linkedin",
    text: `<div class="red-icon"><span>Linkedin</span> <img class="img-red-icon" src="./files/icon-in.png" title="Linkedin" alt="in" /></div>`,
  },
  {
    value: "facebook",
    text: `<div class="red-icon"><span>Facebook</span> <img class="img-red-icon" src="./files/icon-fb.png" title="Facebook" alt="fb" /></div>`,
  },
  {
    value: "twitter",
    text: `<div class="red-icon"><span>Twitter</span> <img class="img-red-icon" src="./files/icon-tw.png" title="Twitter" alt="tw" /></div>`,
  },
  {
    value: "instagram",
    text: `<div class="red-icon"><span>Instagram</span> <img class="img-red-icon" src="./files/icon-ig.png" title="Instagram" alt="in" /></div>`,
  },
];
const meses_optionList = [
  {
    value: "enero",
    text: `<p><strong>01</strong> - Enero</p>`,
  },
  {
    value: "febrero",
    text: `<p><strong>02</strong> - Febrero</p>`,
  },
  {
    value: "marzo",
    text: `<p><strong>03</strong> - Marzo</p>`,
  },
  {
    value: "abril",
    text: `<p><strong>04</strong> - Abril</p>`,
  },
  {
    value: "mayo",
    text: `<p><strong>05</strong> - Mayo</p>`,
  },
  {
    value: "junio",
    text: `<p><strong>06</strong> - Junio</p>`,
  },
  {
    value: "julio",
    text: `<p><strong>07</strong> - Julio</p>`,
  },
  {
    value: "agosto",
    text: `<p><strong>08</strong> - Agosto</p>`,
  },
  {
    value: "septiembre",
    text: `<p><strong>09</strong> - Septiembre</p>`,
  },
  {
    value: "octubre",
    text: `<p><strong>10</strong> - Octubre</p>`,
  },
  {
    value: "noviembre",
    text: `<p><strong>11</strong> - Noviembre</p>`,
  },
  {
    value: "diciembre",
    text: `<p><strong>12</strong> - Diciembre</p>`,
  },
];
const numeros_optionList = [
  {
    value: 1,
    text: "1",
  },
  {
    value: 2,
    text: "2",
  },
  {
    value: 3,
    text: "3",
  },
  {
    value: 4,
    text: "4",
  },
  {
    value: 5,
    text: "5",
  },
];


const log_DOM = document.getElementById("log");
function _value_change(id, value) {
  console.log({ id, value });
  const p_DOM = document.createElement("p");
  p_DOM.innerHTML = `${id} - ${value} [${new Date()}]`;
  log_DOM.insertBefore(p_DOM, log_DOM.firstChild);
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
  id: "example01",
  containerClassList: ["t-example01"],
  btnPlaceHolder: "Example - 01",
  btnSelectPlaceHolder: "Example - 01:",
  optionList: meses_optionList,
  fnOnValueChange: _value_change,
});
tselect.fnInit({
  id: "example02",
  containerClassList: ["t-example02"],
  btnPlaceHolder: "Example - 02",
  btnSelectPlaceHolder: "Example - 02:",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: Example - 02",
  optionList: redes_optionList,
  fnOnValueChange: _value_change,
});
tselect.fnInit({
  id: "example03",
  containerClassList: ["t-example03"],
  btnPlaceHolder: "Example - 03",
  btnSelectPlaceHolder: "Example - 03:",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: Example - 03",
  isToggleAllEnable: true,
  selectAllPlaceHolder: "Todo",
  deselectAllPlaceHolder: "Nada",
  optionList: numeros_optionList,
  fnOnValueChange: _value_change,
});
tselect.fnInit({
  id: "example04",
  containerClassList: ["t-example04"],
  btnPlaceHolder: "Example - 04",
  btnSelectPlaceHolder: "Example - 04:",
  isToggleAllEnable: true,
  selectAllPlaceHolder: "To <strong>d</strong> o",
  deselectAllPlaceHolder: "N <strong>a</strong> da",
  optionList: meses_optionList,
  fnOnValueChange: _value_change,
  fnBtnOptionSelectedRender: _text_btn_select,
});
tselect.fnInit({
  id: "example05",
  containerClassList: ["t-example05"],
  btnPlaceHolder: "Example - 05",
  btnSelectPlaceHolder: "Example - 05:",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: Example - 05",
  isToggleAllEnable: true,
  selectAllPlaceHolder: "Todo",
  deselectAllPlaceHolder: "Nada",
  optionList: redes_optionList,
  fnOnValueChange: _value_change,
  fnBtnOptionSelectedRender: _text_btn_select,
});
tselect.fnInit({
  id: "example06",
  containerClassList: ["t-example06"],
  btnPlaceHolder: "Example - 06",
  btnSelectPlaceHolder: "Example - 06:",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: Example - 06",
  isToggleAllEnable: true,
  selectAllPlaceHolder: "Todo",
  deselectAllPlaceHolder: "Nada",
  optionList: numeros_optionList,
  fnOnValueChange: _value_change,
  fnBtnOptionSelectedRender: _text_btn_select,
});
tselect.fnInit({
  id: "example07",
  containerClassList: ["t-example07"],
  btnPlaceHolder: "Example - 07",
  optionList: meses_optionList,
  fnOnValueChange: _value_change,
  fnBtnOptionSelectedRender: _text_btn_select,
});
tselect.fnInit({
  id: "example08",
  containerClassList: ["t-example08"],
  btnPlaceHolder: "Example - 08",
  btnSelectPlaceHolder: "Example - 08:",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: Example - 08",
  isToggleAllEnable: true,
  selectAllPlaceHolder: "Todo",
  deselectAllPlaceHolder: "Nada",
  optionList: redes_optionList,
  optionSelectedList: [redes_optionList[1].value],
  fnOnValueChange: _value_change,
  fnBtnOptionSelectedRender: _text_btn_select,
});
tselect.fnInit({
  id: "example09",
  containerClassList: ["t-example09"],
  btnPlaceHolder: "Example - 09",
  btnSelectPlaceHolder: "Example - 09:",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: Example - 09",
  isToggleAllEnable: true,
  selectAllPlaceHolder: "Todo",
  deselectAllPlaceHolder: "Nada",
  optionList: numeros_optionList,
  optionSelectedList: [numeros_optionList[1].value],
  fnOnValueChange: _value_change,
  fnBtnOptionSelectedRender: _text_btn_select,
});
tselect.fnInit({
  id: "example10",
  containerClassList: ["t-example10"],
  btnPlaceHolder: "Example - 10",
  btnSelectPlaceHolder: "Example - 10:",
  isSearchEnable: true,
  searchPlaceHolder: "Buscar: Example - 10",
  isToggleAllEnable: true,
  selectAllPlaceHolder: "Todo",
  deselectAllPlaceHolder: "Nada",
  optionList: meses_optionList,
  optionSelectedList: [meses_optionList[1].value],
  fnOnValueChange: _value_change,
  fnBtnOptionSelectedRender: _text_btn_select,
});
