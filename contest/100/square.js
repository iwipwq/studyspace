function intSquare(base, power) {
  const isInteger = function (number) {
    return (
      typeof number === "number" &&
      isFinite(number) &&
      Math.floor(number) === number
      );
  };
  if (isInteger(base) && isInteger(power) && power >= 0)
    return console.log("Enter only positive integer");
  if (power === 0) return console.log(1, "power is 0");
  let result = 1;
  const intArr = Array(power).fill(base);
  intArr.map((value) => {
    result = result * value;
  });
  return console.log(result);
}
