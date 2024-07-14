export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  let arr = [];

  for (const value of array) {
    arr[idx] = appendString + value;
    idx += 1;
  }

  return arr;
}
