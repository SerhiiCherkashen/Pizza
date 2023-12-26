import "./App.css";
import Pizza from "./Components/Pizza/Pizza";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      {/* <h1>Pizza Boostrap</h1> */}
      <div className="contentApp">
        {/* <button type="button" class="btn btn-primary">
        Primary
      </button> */}
        <Pizza />
      </div>

      {/* <Button variant="primary">Primary</Button> */}
    </div>
  );
}

export default App;
