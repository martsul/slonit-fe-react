function sumOfAllFields(currentObj) {
  let sum = 0;

  for (const key in currentObj) {
    if (typeof currentObj[key] === "number") {
      sum += currentObj[key];
    }
  }

  return sum;
}

function sortedKeysWithNumbers(currentObj) {
  const result = [];

  for (const key in currentObj) {
    if (typeof currentObj[key] === "number") {
      result.push({ num: currentObj[key], key });
    }
  }

  return result.sort((a, b) => b.num - a.num).map((element) => element.key);
}
