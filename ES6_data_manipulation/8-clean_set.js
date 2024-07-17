export default function cleanSet(set, startString) {
  if ((startString instanceof String) || (startString.length === 0)) {
    return '';
  }
  const result = [];

  for (const value of set) {
    if ((startString instanceof String) && (value.startsWith(startString))) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
