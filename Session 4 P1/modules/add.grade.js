const readGrades = require("./read.grade");
const saveGrades = require("./save.grade");

async function addGrade(name, subject, grade) {
  if (!name || !subject || !grade) {
    console.log("❌ Invalid Grade Data");
    return;
  }

  try {
    const grades = await readGrades();
    let grade = { id: grades.length + 1, name, subject, grade };
    grades.push(grade);
    await saveGrades(grades);
    console.log("✅ Grade added successfully.");
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
  }
}

module.exports = addGrade;