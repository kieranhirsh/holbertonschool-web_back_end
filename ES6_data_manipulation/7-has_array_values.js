export default function hasValuesFromArray(set, array) {
  const setArray = new Set(array);
  const setSet = new Set(set);
  return setSet.isSupersetOf(setArray);
}
