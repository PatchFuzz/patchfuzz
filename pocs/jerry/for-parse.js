function parse(txt) {
  try {
    eval(txt)
    assert(false)
  } catch (e) {
    assert(e instanceof SyntaxError)
  }
}

parse("for (;;;) print('hello')") 
parse("for (,,) print('hello')") 
parse("for (i = 0; i < 10; i++; ) print('i: ' + i)") 
parse("for (i = 0; i < 10; i++)")
parse("for i = 0; i < 10; i++ {}")
parse("for (i = 0;; i < 10; i++) {}")
parse("for (i = 0; j = 1; i < 10; i++) print('i: '+ i + ' j: ' + j)")
parse("for (i = 0 j = 5;i<10 || j<10; i++, j++) {}")
parse("for (i = 0, j = 5; i < 10 || j < 10; i++ j++) {}")
parse("for (i = 0, j = 5; i < 10 j < 10; i++, j++) {}")

var doubleFor =
"for (i = 0; i < 5; i++) { "+ 
"  for (j = 0; j < 5; j++) { print('i: ' + i + ' j: ' + j) }";
parse(doubleFor)

var doubleFor2 =
"for (i = 0; i < 5; i++) { "+ 
"  for (j = 0; j < 5; j++) { print('i: ' + i + ' j: ' + j)";
parse(doubleFor2)
