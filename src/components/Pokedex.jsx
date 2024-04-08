import "react";
import Pokecard from "./Pokecard";
import PropTypes from "prop-types";
import "./Pokedex.css";

const Pokedex = ({ defaultProps }) => {
  return (
    <div className="Pokedex">
      {defaultProps.map((card) => (
        <Pokecard
          key={card.id}
          name={card.name}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
          type={card.type}
          exp={card.base_experience}
        />
      ))}
    </div>
  );
};
Pokedex.propTypes = {
  defaultProps: PropTypes.array,
};
export default Pokedex;
