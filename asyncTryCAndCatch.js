async function doubleAndAdd(a, b) {
  try {
    a = await doubleAfter1Sec(a);
    b = await doubleAfter1Sec(b);
  } catch (e) {
    return NaN;
  }
  return a + b;
}

doubleAndAdd(1, 2).then(console.log); //6
doubleAndAdd("e", 4).then(console.log);

function doubleAfter1Sec(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let val = param * 2;
      isNaN(val) ? reject(NaN) : resolve(val);
    }, 1000);
  });
}
