import Pokedex from "./components/Pokedex";
import PropTypes from "prop-types";
import { defaultProps } from "./components/DefaultProps";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="App-header">Pokedex</h1>
      <Pokedex defaultProps={defaultProps} />
    </>
  );
}

Pokedex.propTypes = {
  defaultProps: PropTypes.array,
};

export default App;
