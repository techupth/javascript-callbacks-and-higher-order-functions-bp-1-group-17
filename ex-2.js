//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array);
}

const checkresult = (array) => {
  let countpass = 0;
  let i = 0;
  while (array[i]) {
    if (array[i] > 70) {
      countpass += 1;
    }
    i++;
  }
  if (countpass >= 5) {
    return true;
  } else {
    return false;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];


// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkresult);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkresult);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkresult);

console.log(scoreRoom1Result); 
console.log(scoreRoom2Result); 
console.log(scoreRoom3Result); 