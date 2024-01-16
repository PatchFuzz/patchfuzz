





var global = {}

var fish = [
  {'name': 'foo'},
  {'name': 'bar'},
];

for (var i = 0; i < fish.length; i++) {
  global[fish[i].name] = 1;
}

function load() {
  var sum = 0;
  for (var i = 0; i < fish.length; i++) {
    var name = fish[i].name;
    sum += global[name];
  }
  return sum;
}

%PrepareFunctionForOptimization(load);
load();
load();
%OptimizeFunctionOnNextCall(load);
load();
assertOptimized(load);

function store() {
  for (var i = 0; i < fish.length; i++) {
    var name = fish[i].name;
    global[name] = 1;
  }
}

%PrepareFunctionForOptimization(store);
store();
store();
%OptimizeFunctionOnNextCall(store);
store();
assertOptimized(store);



function store_element(obj, key) {
  obj[key] = 0;
}

var o1 = new Array(3);
var o2 = new Array(3);
o2.o2 = "o2";
var o3 = new Array(3);
o3.o3 = "o3";
var o4 = new Array(3);
o4.o4 = "o4";
var o5 = new Array(3);
o5.o5 = "o5";

store_element(o1, 0);  
store_element(o1, 0);  
store_element(o2, 0);  
store_element(o3, 0);  
store_element(o4, 0);  
store_element(o5, 0);  

function inferrable_store(key) {
  store_element(o5, key);
}

%PrepareFunctionForOptimization(inferrable_store);
inferrable_store(0);
inferrable_store(0);
%OptimizeFunctionOnNextCall(inferrable_store);
inferrable_store(0);
assertOptimized(inferrable_store);



inferrable_store("deopt");


if (!isTurboFanned(inferrable_store)) {
  assertUnoptimized(inferrable_store);
}
