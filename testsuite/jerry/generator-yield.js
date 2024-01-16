



function check_syntax_error(str)
{
  try {
    eval(str);
    assert(false);
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
}

function  *  gen()
{
  yield , yield

  yield
     , yield

  (yield
  )

  yield[
  1]
}

function*gen2()
{
  1 ?
    yield
  :
    yield
}

var gen3 = function*(){
  (yield)/[yield]
}

check_syntax_error("function *gen(){ yield % yield }");
check_syntax_error("function *gen(){ (yield) % yield }");
check_syntax_error("function *gen(){ yield % (yield) }");
check_syntax_error("function *gen(){ (yield\n1) }");
check_syntax_error("function *gen(){ function yield() {} }");
check_syntax_error("function *gen(){ (yield)=>1 }");
check_syntax_error("function *gen(){ yield => 1 }");
check_syntax_error("function *gen(){ yi\\u0065ld 1 }");

function *gen4() {
  var f = function yield(i) {
    if (i = 0)
      return yield(i + 1)

    return 39
  }

  return f(0)
}

assert(gen4().next().value === 39);

(function *() {
  () => yield
  yield 1;
})

function *gen5() {
  var o = {
    ["f"]() { yield % yield }
  }
  yield 1;
}
