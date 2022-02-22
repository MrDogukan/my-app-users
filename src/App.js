import FuncComp from "./components/FuncComp";
import "./App.css";
import Users from "./components/Users";

function App() {
  const age = 25;
  const color = "Blue";
  return (
    <div className="App">
      {/* <FuncComp age={age} color={color} /> */}
      <Users />
    </div>
  );
}

export default App;
