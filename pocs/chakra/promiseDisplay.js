p1 = new Promise(
    function (resolve, reject) {
    print(
      function () {
      p1.someOtherProp = "in fullfil";
      resolve("p1 resolved");
      
    }, 1000);
  });
  
p1.someOtherProp = "before";

p1;


p1.then(
  function (val) {
  p1.someOtherProp = "in then";
  var x = val;
  
})
.catch (
  function (reason) {
  p1.someOtherProp = "in catch";
  var x = reason;
  
});

p2 = new Promise(function (resolve, reject) {
    print(function () {
      resolve(null);
      
    }, 2000);
  });

p3 = new Promise(function (resolve, reject) {
    print(function () {
      reject(["p3", "rejected"]);
      
    }, 3000);
  });

Promise.all([p2, p3]).then(function (value) {
  var x = 1;
  
  x;
  
  x;
  
}, function (reason) {
  var x = 1;
  
  x;
  
  x;
  
});

print("pass");