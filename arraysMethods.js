function mySlice(arr, start = 0, end = arr.length) {
  if (start < 0) {
    start = 0;
  }
  if (end > arr.length) {
    end = arr.length;
  }

  const result = [];

  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }

  return result;
}

function myIndexOf(arr, item, from = 0) {
  if (from < 0) {
    from = Math.abs(from) > arr.length ? 0 : arr.length + from;
  }

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

function myIncludes(arr, item, from = 0) {
  if (from < 0) {
    from = Math.abs(from) > arr.length ? 0 : arr.length + from;
  }

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}
