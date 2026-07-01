const readGrades = require("./read.grade");
const saveGrades = require("./save.grade");

async function updateGrade(id, grade) {
  if (!grade) {
    console.log("❌ Grade is missing.");
    return;
  }

  const grades = await readGrades();
  const existingGrade = grades.find((g) => g.id === Number(id));

  if (!existingGrade) {
    console.log("❌ Grade not found. Invalid ID.");
    return;
  }

  existingGrade.grade = grade;

  try {
    await saveGrades(grades);
    console.log("✅ Grade updated successfully.");
  } catch (error) {
    console.log(`❌ Error saving updated grade: ${error.message}`);
  }
}

module.exports = updateGrade;