//Problem 1

const employees = [
{
  name: "Sam",
  department: "Tech",
  designation: "Manager",
  salary: 40000,
  raiseEligible: true,
},
{
  name: "Mary",
  department: "Finance",
  designation: "Trainee",
  salary: 18500,
  raiseEligible: true,
},

{
  name: "Bill",
  department: "HR",
  designation: "Executive",
  salary: 21200,
  raiseEligible: false,
},

];

console.log('problem1',employees);


//Problem 2

const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees,
}

console.log('problem2',company);

//Problem 3

function addEmployee(employeeName, dep, des, sal, raise) {
  const newEmployee ={
    name: employeeName,
    department: dep,
    designation: des,
    salary: sal,
    raiseEligible: raise,
  };

  employees.push(newEmployee);
}
addEmployee('Anna','Tech','Executive',25600,false);
console.log('problem3',company);

//Problem 4
//let totalSalary = employees[0].salary+employees[1].salary+employees[2].salary+employees[3].salary;
//console.log('problem4',totalSalary);

let totalSalaryBetter = 0;
for(let i = 0; i <employees.length; i++) {
  totalSalaryBetter += employees[i].salary;
}
console.log('problem4', totalSalaryBetter);

//problem 5

function doRaises() {
  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].raiseEligible)
    if(employees[i].raiseEligible) {
      employees[i].salary *= 1.1;
      employees[i].raiseEligible = false;
    }
  }
}
doRaises();
console.log('problem5', employees);

//problem 6

const workFromHomePpl = ['Anna','Sam'];
function setWFH() {
  for (let i = 0; i<employees.length; i++) {
    employees[i].wfh = workFromHomePpl.includes(employees[i].name);

  }
}
setWFH();
console.log('problem6',employees);
