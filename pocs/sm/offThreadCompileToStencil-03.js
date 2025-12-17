;

var id, stencil;

id = offThreadCompileToStencil(`
  function f() { return "pass"; }
  f();
`);
stencil = finishOffThreadStencil(id);
print(evalStencil(stencil), "pass");

id = offThreadCompileToStencil(`
  function* f() { return "pass"; }
  f().next();
`);
stencil = finishOffThreadStencil(id);
print(evalStencil(stencil), {value: "pass", done: true});

id = offThreadCompileToStencil(`
  async function f() { return "pass"; }
  f();
`);
stencil = finishOffThreadStencil(id);
print(evalStencil(stencil), "pass");

id = offThreadCompileToStencil(`
  async function* f() { return "pass"; }
  f().next();
`);
stencil = finishOffThreadStencil(id);
print(evalStencil(stencil), {value: "pass", done: true});


function getPromiseResult(promise) {
  var result, error, caught = false;
  promise.then(r => { result = r; },
               e => { caught = true; error = e; });
  drainJobQueue();
  if (caught)
    throw error;
  return result;
}

function print(promise, expected) {
  print(getPromiseResult(promise), expected);
}

function print(promise, expected) {
  print(getPromiseResult(promise), expected);
}
