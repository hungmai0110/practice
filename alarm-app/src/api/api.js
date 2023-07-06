import axios from "axios";

export const getTodos = async () => {
  try {
    const respone = await axios.get("http://localhost:3001/todos");
    return respone.data;
  } catch (error) {
    throw error;
  }
};

export const addTodo = async (newTodo) => {
  try {
    const respone = await axios.post(
      "http://localhost:3001/todos",
      newTodo
    );
    return respone.data;
  } catch (error) {
    throw error;
  }
};
