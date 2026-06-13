import { useState } from "react";
export default function ReadTodo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Belajar A",
    },
    {
      id: 2,
      title: "Belajar B",
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  function TambahTodo() {
    const newTodo = {
      id: Date.now(),
      title: input,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function handleDelete(id) {
    const filteredTodos = todos.filter(
      (todo) => todo.id !== id,
    );

    setTodos(filteredTodos);
  }

  function handleSave() {
    const updateTodos = todos.map((todo) =>
      todo.id === editId
        ? {
            ...todo,
            title: editValue,
          }
        : todo,
    );
    setTodos(updateTodos);
    setEditId(null);
    setEditValue("");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={TambahTodo}>Tambah</button>
      </div>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {editId === todo.id ? (
              <input
                value={editValue}
                onChange={(e) =>
                  setEditValue(e.target.value)
                }
              />
            ) : (
              <span>{todo.title}</span>
            )}
            <div className="flex gap-2 py-2">
              {" "}
              {/* 
              
              */}
              <button
                className="border-2 px-2"
                onClick={() => {
                  setEditId(todo.id);
                  setEditValue(todo.title);

                  console.log("edit id", todo.id);
                  console.log("edit isi", todo.title);
                }}
              >
                Edit log
              </button>
              {/*
              
              */}
              {editId === todo.id ? (
                <button
                  className="border-2 px-2"
                  onClick={handleSave}
                >
                  Simpan
                </button>
              ) : (
                <button
                  className="border-2 px-2"
                  onClick={() => {
                    setEditId(todo.id);
                    setEditValue(todo.title);
                  }}
                >
                  Edit
                </button>
              )}
              {/*

               */}
              <button
                className="border-2 px-2"
                onClick={() => handleDelete(todo.id)}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
