import "react";
import PropTypes from "prop-types";
import "./Pokecard.css";

// Shows a single Pokemon, with their name, image, and type.
const Pokecard = ({ name, image, type, exp }) => {
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-title">{name}</h4>
      <img className="Pokecard-image" src={image} />
      <p className="Pokecard-type">Type: {type}</p>
      <span className="Pokecard-exp">EXP: {exp}</span>
    </div>
  );
};

Pokecard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  exp: PropTypes.number,
};

export default Pokecard;
