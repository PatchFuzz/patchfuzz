let args = [3.34, ];
function f(a, b, c) {};
f(...args);
args = args.splice();
f(...args);
args = [];
f(...args);
