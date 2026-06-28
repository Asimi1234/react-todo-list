export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <p>No todos yet</p>}
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => toggleTodo(todo.id, e.target.checked)}
            />
            <span className={todo.completed ? "done" : ""}>{todo.title}</span>
          </label>
          <button onClick={() => deleteTodo(todo.id)} className="delete">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}