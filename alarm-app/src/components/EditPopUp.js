import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Modal } from "antd";

const EditPopUp = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleOk = () => {
    dispatch({ type: "HIDE_EDIT_POPUP" });
  };

  const handleCancel = () => {
    dispatch({ type: "HIDE_EDIT_POPUP"  });
  };
  return (
    <>
      <Modal
        title=" Sửa báo thức"
        open={state.showEditPopup}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{state.popupData?.title}</p>
      </Modal>
    </>
  );
};

export default EditPopUp;
