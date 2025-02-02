function changeFirstLatterCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}

String.changeStringLength = function (str) {
  if (str.length <= 40) {
    return str;
  }

  const punctuationMarks = new Set(",.!?:;");
  const separatedString = str.split(" ");
  const result = [separatedString[0]];

  let stringLength = separatedString[0].length;

  for (let i = 1; i < separatedString.length; i++) {
    let nextLength = (stringLength += separatedString[i].length + 1);

    if (nextLength <= 40) {
      result.push(separatedString[i]);
      stringLength = nextLength;
    } else {
      if (
        nextLength === 41 &&
        punctuationMarks.has(separatedString[i][separatedString[i].length - 1])
      ) {
        result.push(separatedString[i]);
        break;
      }
      break;
    }
  }

  let finalString = result.join(" ");

  if (punctuationMarks.has(finalString[finalString.length - 1])) {
    finalString = finalString.slice(0, finalString.length - 1);
  }

  return finalString + "...";
};

function substringSearch(firstString, secondString) {
  return (
    firstString.includes(secondString) || secondString.includes(firstString)
  );
}
