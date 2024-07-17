export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((x) => x.location === city);
  const gradedStudents = cityStudents.map((student) => {
    const userGrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (userGrade.length > 0) {
      student.grade = userGrade[0].grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });

  return gradedStudents;
}
