import React from "react";
import { Card, Switch } from "antd";

const Note = () => {
  return (
    <Card
      title="05:15"
      extra={<Switch />}
      style={{
        width: "90%",
        backgroundColor: "#E0E0E0",
        margin: "0 auto"
      }}
      bordered={false}
    >
      <p>Card content</p>
    </Card>
  );
};

export default Note;



