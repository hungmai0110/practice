import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Modal } from "antd";
import { addTodo } from "../api/api";

const AddPopUp = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);

  const newTask = {
    title: "new task",
    hour: 8,
    minute: 30,
  };

  const handleAddTodo = async (newTask) => {
    try {
      const addedTodo = await addTodo(newTask);
      dispatch({ type: "ADD_TODO", payload: addedTodo });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleOk = () => {
    dispatch({ type: "HIDE_ADD_POPUP" });
    handleAddTodo(newTask);
  };

  const handleCancel = () => {
    dispatch({ type: "HIDE_ADD_POPUP" });
  };
  return (
    <>
      <Modal
        title="Thêm báo thức"
        open={state.showAddPopup}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Hi</p>
      </Modal>
    </>
  );
};

export default AddPopUp;
