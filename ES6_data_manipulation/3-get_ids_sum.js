export default function getStudentIdsSum(students) {  
  let output = 0;

  output = students.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0,
  );

  return output;
}
