import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Learn Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
