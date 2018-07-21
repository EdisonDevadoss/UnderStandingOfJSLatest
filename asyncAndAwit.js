//Instead of....
//Es2015 Promise

function getAmount(userId) {
  getUser(userId)
    .then(getBankBalance)
    .then(amount => {
      console.log(amount);
    });
}

//use this new methhod
//Es2017
async function getAmount2(userId) {
  var user = await getUser(userId);
  var amount = await getBankBalance(user);
  console.log(amount);
}

//getAmount("1");
getAmount2("3");

function getUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("john");
    }, 1000);
  });
}

function getBankBalance(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "john") {
        resolve("RS 1,0000");
      } else {
        reject("unknown user");
      }
    }, 1000);
  });
}
