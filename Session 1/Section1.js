let patient =[{name: "John",severity : 5,hasData : true, condition: "normal"}, 
{name: "abdelhamed",severity : 3,hasData : false, condition: "critical"},
{name: "peter",severity : 4,hasData : true, condition: "normal"},
{name: "amira",severity : 5,hasData : true, condition: "normal"},
{name: "ali",severity : 3,hasData : false, condition: "critical"},
{name: "susan",severity : 4,hasData : true, condition: "normal"}
]

let missingDataList=[]
let treatedImmediately=[]
let normalPatients=[]

for (let i = 0; i < patient.length; i++) {
    if (!patient[i].hasData) {
        missingDataList.push(patient[i].name);
        continue;
    }
    if (patient[i].condition === "critical") {
        treatedImmediately.push(patient[i].name);
    } else {
        normalPatients.push(patient[i]);
    }
}

normalPatients.sort((a, b) => b.severity - a.severity);
let normalTreated = normalPatients.map(patient => patient.name);

console.log(treatedImmediately)
console.log(normalTreated)
console.log(missingDataList)
    