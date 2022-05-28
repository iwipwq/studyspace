function stringReverser(value) {
  const isNumber = typeof value === "number";
  const isString = typeof value === "string";
  if (isString || isNumber)
    return value.toString().split("").reverse().join("");
  console.log("invalid value, Enter only string or number");
}
