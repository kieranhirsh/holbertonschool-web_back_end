export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((x) => x.location === city);
  const gradedStudents = cityStudents.map((student) => {
    const userGrade = newGrades.filter((grade) => grade.studentId === student.id);
    const newStudent = student;
    if (userGrade.length > 0) {
      newStudent.grade = userGrade[0].grade;
    } else {
      newStudent.grade = 'N/A';
    }
    return newStudent;
  });

  return gradedStudents;
}
