















function check_syntax_error (code)
{
  try {
    eval (code)
    assert (false)
  } catch (e) {
    assert (e instanceof SyntaxError)
  }
}

check_syntax_error("(async function await() {})")
check_syntax_error("(async function *await() {})")
check_syntax_error("async function f(await) {}")
check_syntax_error("(async function f(await) {})")
check_syntax_error("async function f(a = await new Promise) {}")
check_syntax_error("async function f() { function await() {} }")
check_syntax_error("async await => 0");
check_syntax_error("async (await) => 0");
check_syntax_error("async function f() { await () => 0 }");
check_syntax_error("async (a) => a\\u0077ait a");
check_syntax_error("async (a) => { () => 0\na\\u0077ait a }");



async a => await a
async a => { await a }
async (a) => await a
async(a) => { await a }



async (a) => {
  () => await
  await a
}

(a) => {
  await
  async (a) => await a
  await
  async (a) => await a
  a\u0077ait
}

async function f1(a) {
  await a
  (function () { await ? async function(a) { await a } : await })
  await a
}

async (a) => {
  await a;
  () => await ? async (a) => await a : await
  await a
}

async (a) => {
  (a = () => await, [b] = (c))
  await a
  (a, b = () => await)
  await a
}



var o = {
  async await(a) {
    await a;
    () => await
    await a
  },

  f(a) {
    await
    async (a) => await a
    await
    async (a) => await a
    a\u0077ait
  },

  async ["g"] () {
    await a;
    () => await
    await a
  }
}

async function f2(a) {
  var o = {
    [await a]() { await % await }
  }
  await a;
}

class C {
  async await(a) {
    await a;
    () => await
    await a
  }

  f(a) {
    await
    async (a) => await a
    await
    async (a) => await a
    a\u0077ait
  }

  async ["g"] () {
    await a;
    () => await
    await a
  }
}

async function f3(a) {
  class C {
    [await a]() { await % await }
  }
  await a;
}
