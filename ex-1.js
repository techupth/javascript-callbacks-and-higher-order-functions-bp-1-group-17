// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  return operation(array);}
function add(array){
    for(let i = 0 ; i < employeeSalaries.length ; i++){
      newEmployeeSalaries[i] = employeeSalaries[i]+= 5000

    }
  return array;}


const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(newEmployeeSalaries,add)
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 3490090]
