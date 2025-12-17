var canOptimize = getSelfHostedValue("CanOptimizeArraySpecies");

function test1() {
  for (var i = 0; i < 20; i++) {
    
    
    print(canOptimize([1, 2, 3]), true);
    var a = [];
    for (var j = 0; j < 10; j++) {
      a.push(j);
    }
    print(canOptimize(a), true);
    print(canOptimize(a.slice()), true);
    print(canOptimize(a.map(x => x + 1)), true);

    
    print(canOptimize({}), false);
    Object.setPrototypeOf(a, Object.create(Array.prototype));
    print(canOptimize(a), false);
    a = [];
    a.constructor = function() {};
    print(canOptimize(a), false);
  }
}
test1();

function test2() {
  for (var i = 0; i < 20; i++) {
    print(canOptimize([1, 2, 3]), i <= 16);
    if (i === 16) {
      
      Array.prototype.constructor = Object;
    }
  }
}
test2();
