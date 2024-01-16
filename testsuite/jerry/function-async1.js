















function check_promise(p, value)
{
  assert(p instanceof Promise)

  p.then(function(v) {
    assert(v === value)
  })
}



async function f(a) {
  return a
}

check_promise(f(1), 1)

f = async function (a) { return a }
check_promise(f(2), 2)

f = (async function (a) { return a })
check_promise(f(3), 3)

f = [async function (a) { return a }]
check_promise(f[0](4), 4)


async => {}
async async => {}
(async => {})
(async async => {})

f = async => async;
assert(f(5) === 5)

f = async async => async;
check_promise(f(6), 6)

f = (async => async)
assert(f(7) === 7)

f = (async async => async)
check_promise(f(8), 8)

f = [async => async]
assert(f[0](9) === 9)

f = [async async => async]
check_promise(f[0](10), 10)

f = async (a, b) => a + b;
check_promise(f(10, 1), 11)

f = (async (a, b) => a + b);
check_promise(f(10, 2), 12)

f = [async (a, b) => a + b];
check_promise(f[0](10, 3), 13)

f = true ? async () => 14 : 0;
check_promise(f(), 14)

f = (1, async async => async)
check_promise(f(15), 15)



function f1() {
  var async = 1;

  
  var v1 = async
  async => async

  
  var v2 = async
  function g() { return 2 }

  async
  function h() { return 3 }

  assert(v1 === 1)
  assert(v2 === 1)
  assert(g() === 2)
  assert(h() === 3)
}
f1();

function f2() {
  var async = 1;

  function g() { async = 2; }
  g();

  assert(async == 2);
}
f2();

function f3() {
  var v = 3;
  var async = () => v = 4;

  function g() { async(); }
  g();

  assert(v === 4);
}
f3();

function f4() {
  var v = 5;
  var async = (a, b) => v = a + b;

  function g() { async(((v)), ((v))); }
  g();

  assert(v === 10);
}
f4();

function f5() {
  var v = 0;
  var async = (a, b) => v = a + b;

  function g() { async((async(1,2)), ((async(3,4)))); }
  g();

  assert(v === 10);
}
f5();
