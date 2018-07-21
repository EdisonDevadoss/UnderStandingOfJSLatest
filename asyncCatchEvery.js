async function doubleAndAdd(a, b) {
  a = await doubleAfter1Sec(a).catch(e => console.log(e, "a is NaN"));
  b = await doubleAfter1Sec(b).catch(e => console.log(e, "b is NaN"));
  if(!a || !b){
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
