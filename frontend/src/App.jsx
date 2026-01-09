import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { fetchTodos, createTodo, updateTodo, deleteTodoApi } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("ALL");
  const loadTodos = async () => {
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (err) {
      console.error("Failed to fetch todos", err);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async () => {
    if (!newTodo.trim()) return;

    try {
      const todo = await createTodo({ Title: newTodo, IsCompleted: false });
      setTodos(prev => [...prev, todo]); 
      setNewTodo("");
    } catch (err) {
      console.error("Failed to add todo", err);
    }
  };

  const toggleTodo = async (id) => {
    const todo = todos.find(t => t.id === id);
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, IsCompleted: !t.IsCompleted } : t))
    ); 

    try {
      await updateTodo(id, { IsCompleted: !todo.IsCompleted });
    } catch (err) {
      console.error(err);
      await loadTodos(); 
    }
  };

  const editTodo = async (id) => {
    const newTitle = prompt("Enter new title:");
    if (!newTitle) return;

    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, Title: newTitle } : t))
    );

    try {
      await updateTodo(id, { Title: newTitle });
    } catch (err) {
      console.error(err);
      await loadTodos(); 
    }
  };

  const deleteTodo = async (id) => {
    if (!window.confirm("Are you sure you want to delete this todo?")) return;

    setTodos(prev => prev.filter(t => t.id !== id)); 

    try {
      await deleteTodoApi(id);
    } catch (err) {
      console.error(err);
      await loadTodos(); 
    }
  };

  
  const filteredTodos = todos.filter(todo => {
    if (filter === "ACTIVE") return !todo.IsCompleted;
    if (filter === "COMPLETED") return todo.IsCompleted;
    return true; 
  });

  const activeCount = todos.filter((t) => !t.IsCompleted).length;
  const completedCount = todos.filter((t) => t.IsCompleted).length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">My Todo App</h1>

     
      <div className="flex gap-2 mb-4 max-w-md w-full">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo..."
          className="flex-1 px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      
      <div className="flex justify-center gap-3 mb-4">
        {["ALL", "ACTIVE", "COMPLETED"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />

      <div className="flex justify-between max-w-md w-full mt-4 px-4 py-2 bg-gray-100 rounded shadow">
              <span>Active: {activeCount}</span>
              <span>Completed: {completedCount}</span>
      </div>

    </div>
  );
}

export default App;
