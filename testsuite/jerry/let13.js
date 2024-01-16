

















function check_syntax_error (code) {
  try {
    eval(code)
    assert (false)
  } catch (e) {
    assert (e instanceof SyntaxError)
  }
}

function check_strict_syntax_error (code) {
  "use strict"

  try {
    eval(code)
    assert (false)
  } catch (e) {
    assert (e instanceof SyntaxError)
  }
}

check_syntax_error("let let = 5")
check_syntax_error("const [let] = [1]")
check_syntax_error("const l\u0065t = 6")
check_syntax_error("let [l\u0065t] = [2]")
check_syntax_error("l\\u0065t a")
check_strict_syntax_error("var let = 5")
check_strict_syntax_error("function let() {}")
check_strict_syntax_error("for (let in []) ;")
check_strict_syntax_error("l\\u0065t;")

var let = 1
assert(let === 1)

var [let] = [2]
assert(let === 2)

var x = 0;
let = [ () => x = 1 ]

l\u0065t[0]()
assert(x === 1)

function f1()
{
  var a = 0

  function let(l\u0065t) {
    a = let
  }

  let(3)

  assert(a === 3)
}
f1()

function f2()
{
  var let = [1]

  
  let
  [a] = [2]

  assert(a === 2)

  a = 0

  
  l\u0065t
  [a] = [3]

  assert(let[0][0] === 3)
}
f2()

var arr = []

for (let in ["x","y"])
  arr.push(let)

assert(arr[0] === "0")
assert(arr[1] === "1")



for (let => 4; false ; ) ;

let => 5


let: break let
