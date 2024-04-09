import "react";
import Pokecard from "./Pokecard";
import PropTypes from "prop-types";
import "./Pokedex.css";

const Pokedex = ({ defaultProps, isWinner }) => {
  const result = isWinner ? "success" : "dark";
  return (
    <>
      <div className={`Pokedex ${result}`}>
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
      <p className="Pokedex-alert">
        {result === "success" ? "This hand wins 🎉" : ""}
      </p>
    </>
  );
};
Pokedex.propTypes = {
  defaultProps: PropTypes.array,
};
Pokedex.propTypes = {
  isWinner: PropTypes.bool,
};
export default Pokedex;
