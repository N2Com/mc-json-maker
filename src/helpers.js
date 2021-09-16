export const randomNumber = (min, max, round = 0) => {
    return parseFloat((min + Math.random() * (max - min)).toFixed(round));
  };