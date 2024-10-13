const fs = require('fs');

module.exports = function countStudents(dbFile) {
  try {
    const syncFile = fs.readFileSync(dbFile, 'utf-8');

    if (!syncFile.trim()) {
      throw new Error('Cannot load the database');
    }

    const rows = syncFile.split('\n').splice(1);

    const csStudents = [];
    const sweStudents = [];

    for (const row of rows) {
      const info = row.split(',');

      if (info[3] === 'CS') {
        csStudents.push(info[0]);
      }

      if (info[3] === 'SWE') {
        sweStudents.push(info[0]);
      }
    }

    console.log(`Number of students: ${rows.length - 1}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
