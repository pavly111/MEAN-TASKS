const readGrades = require("./modules/read.grade");
const addGrade = require("./modules/add.grade");
const deleteGrade = require("./modules/delete.grade");
const updateGrade = require("./modules/update.grade");

async function main() {
  console.log(await readGrades());

  await addGrade("Alice", "Math", 90);
  console.log(await readGrades());

  await deleteGrade(5);
  console.log(await readGrades());

  await updateGrade(2, 85);
  console.log(await readGrades());
}

main();