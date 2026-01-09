import axios from "axios";

const API_BASE = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


export const fetchTodos = async () => {
  const res = await API_BASE.get("/todos");
  return res.data.data.response;
};

export const createTodo = async (todo) => {
  try {
        const res = await API_BASE.post("/todos", todo);
        return res.data.data.response;
  } catch (err) {
    console.error("Failed to fetch todos", err);
  }
};

export const updateTodo = async (id, updatedTodo) => {
    try {
        const res = await API_BASE.put(`/todos/${id}`, updatedTodo);
        console.log(res);
        return res.data.data.response;
    } catch (err) {
        console.error("Failed to fetch todos", err);
    }
};

export const deleteTodoApi = async (id) => {
    try {
        const res = await API_BASE.delete(`/todos/${id}`);
        return res.data.data.response;
    } catch (err) {
        console.error("Failed to fetch todos", err);
    }
};
