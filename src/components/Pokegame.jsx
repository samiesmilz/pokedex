import "react";
import PropTypes from "prop-types";
import Pokedex from "./Pokedex";
import { shuffle, splitArrayInHalf, getTotal } from "./Helpers";
import "./Pokegame.css";

const Pokegame = ({ defaultProps }) => {
  const shuffledArray = shuffle(defaultProps);
  const [array1, array2] = splitArrayInHalf(shuffledArray);
  const firstHandTotal = getTotal(array1);
  const secondHandTotal = getTotal(array2);

  return (
    <>
      <Pokedex
        defaultProps={array1}
        isWinner={firstHandTotal > secondHandTotal ? true : false}
      />
      <Pokedex
        defaultProps={array2}
        isWinner={firstHandTotal < secondHandTotal ? true : false}
      />
      <p className="Pokegame-atrribution">Made by: ©️ Samie Smilz</p>
    </>
  );
};

Pokegame.propTypes = {
  defaultProps: PropTypes.array,
};

export default Pokegame;
