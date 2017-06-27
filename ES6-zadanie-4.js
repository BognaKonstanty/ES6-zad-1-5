//sposób 1

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const parmLength=grades.length;
const parmSum = grades.reduce((sum, next) => sum + next);
const avarage= parmSum / parmLength;
console.log(avarage);

//sposób 2

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const avarage= (((...numbers)=> numbers.reduce((sum, next) => sum + next))(...grades)) / grades.length;
console.log(avarage);