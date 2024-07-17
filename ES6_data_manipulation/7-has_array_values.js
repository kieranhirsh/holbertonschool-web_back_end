export default function hasValuesFromArray(set, array) {
  const setArray = new Set(array);
  return set.isSupersetOf(setArray);
}
