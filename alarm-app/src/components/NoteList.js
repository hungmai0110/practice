import React, { useContext, useState, useEffect } from "react";
import { Card, Switch } from "antd";
import { AppContext } from "../context/AppContext";
import { getTodos } from "../api/api";

const NoteList = () => {
  const { state, dispatch } = useContext(AppContext);
  const [todos, setTodos] = useState(state.todos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleClickCard = (cardData) => {
    dispatch({ type: "SHOW_EDIT_POPUP", payload: cardData });
  };

  return (
    <div className="note-list">
      {todos.map((todo) => (
        <Card
          title={`${todo.hour}:${todo.minute}`}
          extra={<Switch />}
          key={todo.id}
          style={{
            width: "90%",
            backgroundColor: "#E0E0E0",
            margin: "0 auto",
          }}
          bordered={false}
          onClick={() => handleClickCard(todo)}
        >
          <p>{todo?.title}</p>
        </Card>
      ))}
    </div>
  );
};

export default NoteList;
