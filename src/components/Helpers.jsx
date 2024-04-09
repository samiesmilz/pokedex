function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i

    // Swap array[i] and array[j] using destructuring assignment
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function splitArrayInHalf(array) {
  const midpoint = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint);
  return [firstHalf, secondHalf];
}

function getTotal(array) {
  const total = array.reduce((acc, current) => {
    return acc + current.base_experience;
  }, 0);

  return total;
}

export { shuffle, splitArrayInHalf, getTotal };
