function myFilter(array, callback) {
  const answer = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      answer.push(array[i]);
    }
  }

  return answer;
}