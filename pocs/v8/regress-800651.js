var list = [];
function log(item) { list.push(item); }
async function f() {
  try {
    let namespace = await import(/a/);
  } catch(e) {
    log(1);
  }
}
f();

async function importUndefined() {
  try {
    await import({ get toString() { return undefined; }})
  } catch(e) {
    log(2);
  }
}

function g() {
  let namespace = Promise.resolve().then(importUndefined);
}
g();
%PerformMicrotaskCheckpoint();
print(list, [1,2]);
