load(libdir + 'bytecode-cache.js');


gczeal(0);

async function f1(a, b) {
  let x = await 10;
  return x;
};
var toStringResult = f1.toString();

var test = `
async function f1(a, b) {
  let x = await 10;
  return x;
};

assertEq(f1.toString(), \`${toStringResult}\`);

var ans = 0;
f1().then(x => { ans = x; });
drainJobQueue();
assertEq(ans, 10);

async function f2(a, b) {
  
  return arguments.callee;
};

f2().then(x => { ans = x; });
drainJobQueue();
assertEq(ans, f2);
`;

evalWithCache(test, { assertEqBytecode: true, checkFrozen: true});
