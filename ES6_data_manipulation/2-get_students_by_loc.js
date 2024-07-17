export default function getStudentsByLocation(listStudents, city) {
  let ids = [];

  if (listStudents instanceof Array) {
    ids = listStudents.filter((x) => x.location === city);
  }

  return ids;
}
