async function f1(a, b) {
  let x = await 10;
  return x;
};
var toStringResult = f1.toString();

async function f2(a, b) {
  
  return arguments.callee;
};

relazifyFunctions();


print(f1.toString(), toStringResult);

var ans = 0;
f1().then(x => { ans = x; });
drainJobQueue();
print(ans, 10);

f2().then(x => { ans = x; });
drainJobQueue();
print(ans, f2);
