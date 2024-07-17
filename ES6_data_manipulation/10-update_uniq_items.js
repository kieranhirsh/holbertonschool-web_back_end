export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [k, v] of data) {
    if (v === 1) {
      map.set(k, 100);
    }
  }
}
