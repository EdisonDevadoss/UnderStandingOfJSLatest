//Async functions themselves return a Promise!

async function doubleAndAdd(a, b) {
  a = await doubleAfter1Sec(a);
  b = await doubleAfter1Sec(b);
  return a + b;
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
