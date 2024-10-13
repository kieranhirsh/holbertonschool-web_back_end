const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(filename, 'utf-8');
    const rows = data.split('\n').slice(1);

    const studentsCS = [];
    const studentsSWE = [];

    for (const row of rows) {
      const data = row.split(',');

      if (data[3] === 'CS') { // hardcode
        studentsCS.push(data[0]);
      }

      if (data[3] === 'SWE') { // hardcode
        studentsSWE.push(data[0]);
      }
    }

    console.log(`Number of students: ${studentsCS.length + studentsSWE.length}`);
    console.log(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}`);
    console.log(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`);

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
