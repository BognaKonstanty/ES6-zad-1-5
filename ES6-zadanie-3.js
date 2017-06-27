const average=((...num)=> num.reduce((sum, next) => sum + next) / num.length);
console.log(average(1,2,3,4,5));