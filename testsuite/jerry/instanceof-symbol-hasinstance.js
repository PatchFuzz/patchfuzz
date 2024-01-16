

function NoParent () { }

Object.defineProperty (NoParent, Symbol.hasInstance, {
    value: function (arg) { return false; }
});

var obj = new NoParent ();

assert ((obj instanceof NoParent) === false);

try {
  Object.defineProperty (NoParent, Symbol.hasInstance, {
    value: function (arg) { return true; }
  });
  assert (false)
} catch (ex) {
  assert (ex instanceof TypeError);
}


function PositiveNumber () { }

Object.defineProperty (PositiveNumber, Symbol.hasInstance, {
    value: function (arg) { return (arg instanceof Number) && (arg >= 0); }
})

var num_a = new Number (33);
var num_b = new Number (-50);

assert ((num_a instanceof PositiveNumber) === true);
assert ((num_b instanceof PositiveNumber) === false);


function ErrorAlways () { }

Object.defineProperty (ErrorAlways, Symbol.hasInstance, {
    value: function (arg) { throw new URIError ("ErrorAlways"); }
})

try {
  (new Object ()) instanceof ErrorAlways;
  assert (false);
} catch (ex) {
  assert (ex instanceof URIError);
}


function NonCallable () { }

Object.defineProperty (NonCallable, Symbol.hasInstance, { value: 11 });

try {
  (new Object ()) instanceof NonCallable;
  assert (false);
} catch (ex) {
  assert (ex instanceof TypeError);
}


function ErrorGenerator () { }

Object.defineProperty (ErrorGenerator, Symbol.hasInstance, {
    get: function () { throw new URIError ("ErrorGenerator"); }
});

try {
  (new Object ()) instanceof ErrorGenerator;
  assert (false);
} catch (ex) {
  assert (ex instanceof URIError);
}
