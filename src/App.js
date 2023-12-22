import "./App.css";
import Pizza from "./Components/Pizza/Pizza";

function App() {
  return (
    <div className="App">
      <h1>Pizza Boostrap</h1>
      <div className="contentApp">
        {/* <button type="button" class="btn btn-primary">
        Primary
      </button> */}
        <Pizza />
      </div>
    </div>
  );
}

export default App;
