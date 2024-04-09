import Pokedex from "./components/Pokedex";
import PropTypes from "prop-types";
import { defaultProps } from "./components/DefaultProps";
import Pokegame from "./components/Pokegame";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <h1 className="App-header">Pokedex</h1>
      <Pokegame defaultProps={defaultProps} />
    </div>
  );
}

Pokedex.propTypes = {
  defaultProps: PropTypes.array,
};

export default App;
