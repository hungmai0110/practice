const showHideReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_EDIT_POPUP":
      return { ...state, showEditPopup: true, popupData: action.payload };
    case "HIDE_EDIT_POPUP":
      return { ...state, showEditPopup: false, popupData: null };
    case "SHOW_ADD_POPUP":
      return { ...state, showAddPopup: true };
    case "HIDE_ADD_POPUP":
      return { ...state, showAddPopup: false };
    default:
      return state;
  }
};

export default showHideReducer;
