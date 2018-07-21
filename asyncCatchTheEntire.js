//Do not do anyting but handle outside the function
// since async / await returns a promise, we can catch whole function's error

async function doubleAndAdd(a, b) {
  let one = await doubleAfter1Sec(a);
  let two = await doubleAfter1Sec(b);

  return one + two;
}

doubleAndAdd(1, 3)
  .then(console.log)
  .catch(console.log);

function doubleAfter1Sec(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let val = param * 2;
      isNaN(val) ? reject(NaN) : resolve(val);
    }, 1000);
  });
}
