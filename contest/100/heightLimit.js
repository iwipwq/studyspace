function heightCheck(height) {
  const isNotANumber = isNaN(parseInt(height))
  const heightLimit = 150;
  if (isNotANumber)
    return console.log("invalid value, Enter only number");
  if (height >= heightLimit) return console.log("Allowed");
  console.log("Not allowed");
}
