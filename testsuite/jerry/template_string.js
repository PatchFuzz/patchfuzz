

function must_throw (str)
{
  try
  {
    eval ("switch (1) { default: " + str + "}");
    assert (false);
  }
  catch (e)
  {
  }

  try
  {
    eval (str);
    assert (false);
  }
  catch (e)
  {
  }
}

var a = 'A';
var b = 'B';

switch (1)
{
default:

  ``;
  `abc`;
  `ab${a+b}${ `x` }c`;

  assert (`` === '');
  assert (`abc` === 'abc');
  assert (`ab\
  c` === 'ab  c');
  assert (`ab
  c` === 'ab\n  c');

  assert (`prefix${a}` === 'prefixA');
  assert (`${a}postfix` === 'Apostfix');
  assert (`prefix${a}postfix` === 'prefixApostfix');

  assert (`${a}${b}` === 'AB');
  assert (`${a},${b}` === 'A,B');
  assert (`${a}${b}${a}${b}` === 'ABAB');
  assert (`${a},${b},${a},${b}` === 'A,B,A,B');
  assert (`$${a},${b},${a},${b}$` === '$A,B,A,B$');

  assert (`\${}` === '${}');
  assert (`$\{}` === '${}');
  assert (`x${  `y` + `z`  }x` === 'xyzx');
  assert (`x${  `y` , `z`  }x` === 'xzx');

  function f(x) { return x + 1; }

  
  var c = 1;
  assert (`x${  f(1) * f(2)  }x${ c = 4 }` === 'x6x4');
  assert (c === 4);
  assert (`m${0 || 93}n${7 && 0}o` === 'm93n0o');

  
  assert (`${  function() { return true } () }` === 'true');
  assert (`${  function() { return a.length } () }` === '1');

  
  assert(`${a}${b}${a}${b}`.length === 4);
}

must_throw ("`");
must_throw ("`${");
must_throw ("`${7");
must_throw ("`${}`");
must_throw ("`${1}");
must_throw ("`${1}.${");
must_throw ("`${1}.${2}");


var cr = eval("`a" + String.fromCharCode(13) + "b`");
var lf = eval("`a" + String.fromCharCode(10) + "b`");
var crlf = eval("`a" + String.fromCharCode(13,10) + "b`");

assert(cr.length === 3);
assert(lf.length === 3);
assert(crlf.length === 3);
assert(cr[1] === lf[1]);
assert(lf[1] === crlf[1]);
assert(crlf[1] === '\n');
