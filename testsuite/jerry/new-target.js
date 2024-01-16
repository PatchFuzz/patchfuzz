

function null_target () {
  assert (new.target === undefined);
}

function demo () {
  null_target ();
  return new.target;
}

assert (demo () === undefined);
assert ((new demo ()) === demo);


try {
  eval ("new.target");
  assert (false);
} catch (ex) {
  assert (ex instanceof SyntaxError);
}

try {
  var eval_other = eval;
  eval_other ("new.target");
  assert (false);
} catch (ex) {
  assert (ex instanceof SyntaxError);
}


var arrow_called = false;
function arrow () {
    assert (new.target === arrow);
    var mth = () => { return new.target; }
    assert (mth () === arrow);
    arrow_called = true;
}

new arrow ();
assert (arrow_called === true);


var f_called = false;
function f () {
  assert (isNaN (-new.target));
  f_called = true;
}

new f ();
assert (f_called === true);


function fg (callback_object) {
  callback_object.value = new.target.value;
}

fg.value = 22;

var test_obj = {};
new fg (test_obj);

assert (test_obj.value === 22);



function eval_test () {
  var target = eval ("new.target");
  assert (target === eval_test);
}

new eval_test ();

function eval_eval_test () {
  var target = eval ('eval("new.target")');
  assert (target === eval_eval_test);
}

new eval_eval_test ();


function eval_test_2 () {
  var ev = eval;
  try {
    ev ("new.target");
    assert (false);
  } catch (ex) {
    assert (ex instanceof SyntaxError);
  }
}

new eval_test_2 ();

function eval_test_3 () {
  var ev = eval;
  try {
    eval ("ev ('new.target')");
    assert (false);
  } catch (ex) {
    assert (ex instanceof SyntaxError);
  }
}

new eval_test_3 ();


function expect_syntax_error (src)
{
  try {
    eval (src);
    assert (false);
  } catch (ex) {
    assert (ex instanceof SyntaxError);
  }
}

expect_syntax_error ("function assign () { new.target = 3; }");
expect_syntax_error ("function assign () { new.target += 3; }");
expect_syntax_error ("function assign () { new.target *= 3; }");
expect_syntax_error ("function assign () { new.target -= 3; }");
expect_syntax_error ("function assign () { new.target |= 3; }");
expect_syntax_error ("function assign () { new.target &= 3; }");

expect_syntax_error ("function assign () { new.target++; }");
expect_syntax_error ("function assign () { ++new.target; }");
expect_syntax_error ("function assign () { new.target--; }");
expect_syntax_error ("function assign () { --new.target; }");

expect_syntax_error ("function synt () { new....target; }");

function delete_test () {
  assert ((delete new.target) === true);
}

new delete_test ();

function binary_test_1 () {
    
    var str = (new.target + 1);
    assert (str.substring(0, 8) === "function"
            && str.substring(str.length - 2, str.length) === "}1");
}
function binary_test_2 () { assert (isNaN (new.target - 3)); }
function binary_test_3 () { assert (isNaN (new.target * 2)); }
function binary_test_4 () { assert (isNaN (new.target / 4)); }

new binary_test_1 ();
new binary_test_2 ();
new binary_test_3 ();
new binary_test_4 ();
