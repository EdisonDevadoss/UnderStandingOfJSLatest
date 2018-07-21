//Async functions themselves return a Promise!

async function doubleAndAdd(a, b) {
  //Notice that I am using Promise.all
  //Also notice the user of Array destructuring!
  var [one, two] = await Promise.all([doubleAfter1Sec(a), doubleAfter1Sec(b)]);
  return one + two;
}
//Usage:
doubleAndAdd(1, 2).then(console.log);

//It takse twom sec to run
function doubleAfter1Sec(param) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(param * 2);
    }, 1000);
  });
}
