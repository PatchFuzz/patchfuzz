function SmallObjectConstr() {
  this.prop0 = 0;
}

var obj2 = { prop3: {} };

(function () {

  var obj = new SmallObjectConstr();
  obj2.prop3 += obj.prop2++;
  obj.prop2++;
  
  for (var i of [1,2]) {
    obj.prop3 = { a: obj.prop2++ };
    obj.prop2 = 4;
  }
})();

print("PASSED");