import React, { useContext } from "react";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { dispatch } = useContext(AppContext);

  const handleShowAddPopup = () => {
    dispatch({ type: "SHOW_ADD_POPUP" });
  };

  return (
    <div className="header">
      <MinusCircleOutlined />
      <h2>Báo thức</h2>
      <PlusOutlined onClick={handleShowAddPopup} />
    </div>
  );
};

export default Header;
