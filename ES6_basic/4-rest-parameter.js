export default function returnHowManyArguments(...args) {
  let num = 0;
  for (const arg of args) {
    if (arg) {
      num += 1;
    }
  }
  return num;
}
