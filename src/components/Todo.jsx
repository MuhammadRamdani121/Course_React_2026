import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleAddTodo() {
    if (!input.trim()) return;

    setTodos([...todos, input]);
    setInput("");
  }

  function handleDelete(indexTodo) {
    const filteredTodo = todos.filter((_, index) => index !== indexTodo);
    setTodos(filteredTodo);
  }

  return (
    <div>
      <h1>Total Todo:{todos.length}</h1>
      <input
        className="border-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Tambah</button>

      <div>
        {todos.map((todo, index) => (
          <div key={index} className="flex items-center gap-2">
            <span>{todo}</span>

            <button
              onClick={() => handleDelete(index)}
              className="rounded bg-red-500 px-2 py-1 text-white"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
