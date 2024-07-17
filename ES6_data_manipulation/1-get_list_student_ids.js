export default function getListStudentIds(listStudents) {
  let ids = [];

  if (listStudents instanceof Array) {
    ids = listStudents.map((x) => x.id);
  }

  return ids;
}
