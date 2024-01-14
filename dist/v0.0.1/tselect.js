var tselect=tselect||(function () {
  const _SELECT_DATA = {};
  let _show_Error_Message = true;
  let _show_Debug_Message = true;

  const temp_tselect_data = {
    id: "",
    name: "",
    optionList: [],
    optionSelectedList: [],
    optionListFilter: [],
    containerDom: null,
    selectDom: null,
    selectValueDom: null,
    optionListDom: null,
    btnClassList: [],
    btnPlaceHolder: "",
    searchClassList: [],
    searchPlaceHolder: "",
    searchText: "",
    isOpen: false,
    isMultiple: false,
    isRequired: false,
    fnBtnOptionSelectedRender: (id, optionList) => {},
    fnOnValueChange: (id, optionList) => {},
  };

  function _option_list_HTML({
    id = "",
    optionList = [], 
    optionSelectedList = [], 
    id_isMultiple = "single", 
    label_type_isMultiple = "radio",
  } = {}) {
    let result_HTML = "";
    try {
      result_HTML = optionList.reduce((result, current, index) => {
        let result_isChecked = "";
        if(optionSelectedList.includes(current.value)) {
          result_isChecked = "checked";
        }

        const temp_label_HTML = `
          <label for="${id}_${id_isMultiple}-option-${index}">
            <input type="${label_type_isMultiple}" id="${id}_${id_isMultiple}-option-${index}" name="${id}_${id_isMultiple}" data-index="${index}" oninput="tselect.fnToggleValue('${id}', '${index}')" ${result_isChecked}>
            <div class="t-select-option-content">${current.text}</div>
          </label>
        `;

        result += temp_label_HTML;

        return result;
      }, "");
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
    return result_HTML;
  }

  function _refresh_option_list_dom(id) {
    try {
      let id_isMultiple = "single";
      let label_type_isMultiple = "radio";
      if(_SELECT_DATA[id].isMultiple) {
        id_isMultiple = "multiple";
        label_type_isMultiple = "checkbox";
      }

      const optionList_HTML = _option_list_HTML({
        id: id,
        optionList: _SELECT_DATA[id].optionListFilter,
        optionSelectedList: _SELECT_DATA[id].optionSelectedList,
        id_isMultiple: id_isMultiple,
        label_type_isMultiple: label_type_isMultiple,
      });

      _SELECT_DATA[id].optionListDom.innerHTML = optionList_HTML;
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _refresh_container_dom(id) {
    const optionList_DOM = _SELECT_DATA[id].containerDom.querySelector(".t-select-option-list");
    if(_SELECT_DATA[id].isOpen) {
      optionList_DOM.classList.add("open");
    } else {
      optionList_DOM.classList.remove("open");
    }

    let result_value = "";
    if(_SELECT_DATA[id].isMultiple) {
      if(_SELECT_DATA[id].optionSelectedList.length > 0) {
        result_value = _SELECT_DATA[id].optionSelectedList.join(",");
        result_value = `[${result_value}]`
      }
    } else {
      result_value = _SELECT_DATA[id].optionSelectedList.join("");
    }
    _SELECT_DATA[id].selectValueDom.value = result_value;
  }

  function fnSearch(_src_this, id) {
    try {
      const result_value = _src_this.value;
      _SELECT_DATA[id].searchText = result_value;

      if(_SELECT_DATA[id].searchText.length > 0) {
        const result_search_optionList = _SELECT_DATA[id].optionList.filter((item) => item.text.includes(_SELECT_DATA[id].searchText));
        _SELECT_DATA[id].optionListFilter = result_search_optionList;
      } else {
        _SELECT_DATA[id].optionListFilter = _SELECT_DATA[id].optionList;
      }

      _refresh_option_list_dom(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnGetValue(id) {
    let result = null;

    try {
      if(_SELECT_DATA[id].isMultiple) {
        result = _SELECT_DATA[id].optionSelectedList;
      } else {
        result = _SELECT_DATA[id].optionSelectedList[0];
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }

    return result;
  }

  function fnToggleValue(id, index) {
    try {
      const value_to_toggle = _SELECT_DATA[id].optionListFilter[index].value;

      if(_SELECT_DATA[id].isMultiple) {
        const result_isIncludes = _SELECT_DATA[id].optionSelectedList.includes(value_to_toggle);
        if(result_isIncludes) {
          const value_index_to_remove = _SELECT_DATA[id].optionSelectedList.indexOf(value_to_toggle);
          _SELECT_DATA[id].optionSelectedList.splice(value_index_to_remove, 1);
        } else {
          _SELECT_DATA[id].optionSelectedList.push(value_to_toggle);
        }
      } else {
        _SELECT_DATA[id].optionSelectedList = [value_to_toggle];
      }

      _refresh_container_dom(id);

      if(_SELECT_DATA[id].fnOnValueChange) {
        if(_SELECT_DATA[id].isMultiple) {
          _SELECT_DATA[id].fnOnValueChange(id, _SELECT_DATA[id].optionSelectedList);
        } else {
          if(_SELECT_DATA[id].optionSelectedList.length > 0) {
            _SELECT_DATA[id].fnOnValueChange(id, _SELECT_DATA[id].optionSelectedList[0]);
          }
        }
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnClose(id) {
    try {
      _SELECT_DATA[id].isOpen = false;

      _refresh_container_dom(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnToggle(id) {
    try {
      const result_isOpen = !_SELECT_DATA[id].isOpen;
      _SELECT_DATA[id].isOpen = result_isOpen;

      _refresh_container_dom(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _setup_events(id) {
    try {
      const btn_select_DOM = _SELECT_DATA[id].containerDom.querySelector(".btn-t-select");
      btn_select_DOM.addEventListener("click", (ev) => {
        fnToggle(id);
      });

      const target_to_not_close = document.querySelector(`#${_SELECT_DATA[id].name}_t-select`);
      // https://stackoverflow.com/a/64665817
      document.addEventListener("click", (event) => {
        const withinBoundaries = event.composedPath().includes(target_to_not_close)

        if (!withinBoundaries) {
          fnClose(id);
        }
      });
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _render_dom_on_page(id) {
    try {
      const container_id = `${id}_t-select`;
      let id_isMultiple = "single";
      let label_type_isMultiple = "radio";
      if(_SELECT_DATA[id].isMultiple) {
        id_isMultiple = "multiple";
        label_type_isMultiple = "checkbox";
      }

      const optionList_HTML = _option_list_HTML({
        id: id,
        optionList: _SELECT_DATA[id].optionListFilter,
        optionSelectedList: _SELECT_DATA[id].optionSelectedList,
        id_isMultiple: id_isMultiple,
        label_type_isMultiple: label_type_isMultiple,
      });

      let result_isRequired = "";
      if(_SELECT_DATA[id].isRequired) {
        result_isRequired = "required";
      }

      const select_original_classList = Array.from(_SELECT_DATA[id].selectDom.classList);
      select_original_classList.push("btn-t-select");
      const result_btn_t_select_classList = select_original_classList.join(" ");

      const container_HTML = `
        <div class="t-select-container" id="${container_id}">
          <input class="original-select" type="text" id="${id}" name="${_SELECT_DATA[id].name}" value="" ${result_isRequired} tabindex="-1"/>

          <button class="${result_btn_t_select_classList}" type="button">
            ${_SELECT_DATA[id].btnPlaceHolder}
          </button>

          <div class="t-select-option-list">
            <input type="search" id="${id}_${id_isMultiple}-search" placeholder="${_SELECT_DATA[id].searchPlaceHolder}" oninput="tselect.fnSearch(this, '${id}')">

            <div class="option-list">
              ${optionList_HTML}
            </div>
          </div>
        </div>
      `;

      _SELECT_DATA[id].containerDom.outerHTML = container_HTML;
      const container_DOM = document.getElementById(`${container_id}`);
      _SELECT_DATA[id].containerDom = container_DOM;
      const optionList_DOM = container_DOM.querySelector(".option-list");
      _SELECT_DATA[id].optionListDom = optionList_DOM;
      const selectValue_DOM = document.getElementById(id);
      _SELECT_DATA[id].selectValueDom = selectValue_DOM;
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _save_on_SELECT_DATA({
    id = null,
    optionList = null,
    optionSelectedList = null,
    btnClassList = null,
    btnPlaceHolder = null,
    searchClassList = null,
    searchPlaceHolder = null,
    isOpen = null,
    fnBtnOptionSelectedRender = null,
    fnOnValueChange = null,
  } = {}) {
    try {
      if(id == null) {
        if(_show_Error_Message) {
          console.error(`Se requiere [id]`);
        }
      }

      if(_SELECT_DATA[id]) {
        if(_show_Error_Message) {
          console.error(`Ya existe un <select/> con este [id]: ${id}`);
        }

        return;
      }

      const select_DOM = document.getElementById(`${id}`);
      if(select_DOM) {
        _SELECT_DATA[id] = {
          id: id,
          name: select_DOM.name,
          optionList: optionList,
          optionSelectedList: optionSelectedList,
          optionListFilter: optionList,
          containerDom: select_DOM,
          selectDom: select_DOM.cloneNode(true),
          optionListDom: null,
          btnClassList: btnClassList,
          btnPlaceHolder: btnPlaceHolder,
          searchClassList: searchClassList,
          searchPlaceHolder: searchPlaceHolder,
          searchText: "",
          isOpen: isOpen,
          isMultiple: select_DOM.multiple,
          isRequired: select_DOM.required,
          fnBtnOptionSelectedRender: fnBtnOptionSelectedRender,
          fnOnValueChange: fnOnValueChange,
        };
      } else {
        if(_show_Error_Message) {
          console.error(`No se encontró un <select/> con este [id]: ${id}`);
        }
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnInit({
    id = "",
    optionList = [],
    optionSelectedList = [],
    btnClassList = [],
    btnPlaceHolder = "",
    searchClassList = [],
    searchPlaceHolder = "",
    isOpen = false,
    fnBtnOptionSelectedRender = (id, optionList) => {},
    fnOnValueChange = (id, optionList) => {},
  } = {}) {
    try {
      _save_on_SELECT_DATA({
        id: id,
        optionList: optionList,
        optionSelectedList: optionSelectedList,
        btnClassList: btnClassList,
        btnPlaceHolder: btnPlaceHolder,
        searchClassList: searchClassList,
        searchPlaceHolder: searchPlaceHolder,
        isOpen: isOpen,
        fnBtnOptionSelectedRender: fnBtnOptionSelectedRender,
        fnOnValueChange: fnOnValueChange,
      });

      _render_dom_on_page(id);

      _setup_events(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnConfig({
    showErrorMessage = true,
    showDebugMessage = false,
  } = {}) {
    try {
      if(_show_Debug_Message) {
        console.log("tselect: [start] fnConfig");
      }

      _show_Error_Message = showErrorMessage;
      _show_Debug_Message = showDebugMessage;

      if(_show_Debug_Message) {
        console.log("tselect: [ end ] fnConfig");
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error("tselect: fnConfig");
        console.error(error);
      }
    }
  }

  return {
    SELECT: _SELECT_DATA,

    fnConfig,
    fnInit,
    fnToggleValue,
    fnGetValue,
    fnSearch,
  }
})();
