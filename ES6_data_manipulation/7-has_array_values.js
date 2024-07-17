export default function hasValuesFromArray(set, array) {
  const result = array.map((i) => set.has(i));
  return (!result.includes(false));
}
