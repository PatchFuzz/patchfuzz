













var e;


e = new Error ();
print(e.name === "Error");
print(e.message === "");
print(e.toString() === "Error");

e = new Error("some message");
print(e.name === "Error");
print(e.message === "some message");
print(e.toString() === "Error: some message");

e.name = "";
print(e.toString() === "some message");
e.message = "";
print(e.toString() === "");

print(Error.prototype.toString !== Object.prototype.toString);
print(Error.prototype.constructor === Error);
print(Error.prototype.name === "Error");
print(Error.prototype.message === "");
print(Error.prototype.toString() === "Error");


e = new TypeError ();
print(e.name === "TypeError");
print(e.message === "");
print(e.toString() === "TypeError");

e = new TypeError("some message");
print(e.name === "TypeError");
print(e.message === "some message");
print(e.toString() === "TypeError: some message");

e.name = "";
print(e.toString() === "some message");
e.message = "";
print(e.toString() === "");

print(TypeError.prototype.toString === Error.prototype.toString);
print(TypeError.prototype.constructor === TypeError);
print(TypeError.prototype.name === "TypeError");
print(TypeError.prototype.message === "");
print(TypeError.prototype.toString() === "TypeError");

try
{
  null[1] = 'abcd';

  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
  print(e instanceof Error);
  print(e instanceof Object);

  print(!(e instanceof Function));
}



e = new ReferenceError ();
print(e.name === "ReferenceError");
print(e.message === "");
print(e.toString() === "ReferenceError");

e = new ReferenceError("some message");
print(e.name === "ReferenceError");
print(e.message === "some message");
print(e.toString() === "ReferenceError: some message");

e.name = "";
print(e.toString() === "some message");
e.message = "";
print(e.toString() === "");

print(ReferenceError.prototype.toString === Error.prototype.toString);
print(ReferenceError.prototype.constructor === ReferenceError);
print(ReferenceError.prototype.name === "ReferenceError");
print(ReferenceError.prototype.message === "");
print(ReferenceError.prototype.toString() === "ReferenceError");

try
{
  var a = non_existing_variable;

  print(false);
}
catch (e)
{
  print(e instanceof ReferenceError);
  print(e instanceof Error);
  print(e instanceof Object);

  print(!(e instanceof Function));
}


e = new EvalError ();
print(e.name === "EvalError");
print(e.message === "");
print(e.toString() === "EvalError");

e = new EvalError("some message");
print(e.name === "EvalError");
print(e.message === "some message");
print(e.toString() === "EvalError: some message");

e.name = "";
print(e.toString() === "some message");
e.message = "";
print(e.toString() === "");

print(EvalError.prototype.toString === Error.prototype.toString);
print(EvalError.prototype.constructor === EvalError);
print(EvalError.prototype.name === "EvalError");
print(EvalError.prototype.message === "");
print(EvalError.prototype.toString() === "EvalError");


e = new RangeError ();
print(e.name === "RangeError");
print(e.message === "");
print(e.toString() === "RangeError");

e = new RangeError("some message");
print(e.name === "RangeError");
print(e.message === "some message");
print(e.toString() === "RangeError: some message");

e.name = "";
print(e.toString() === "some message");
e.message = "";
print(e.toString() === "");

print(RangeError.prototype.toString === Error.prototype.toString);
print(RangeError.prototype.constructor === RangeError);
print(RangeError.prototype.name === "RangeError");
print(RangeError.prototype.message === "");
print(RangeError.prototype.toString() === "RangeError");


e = new SyntaxError ();
print(e.name === "SyntaxError");
print(e.message === "");
print(e.toString() === "SyntaxError");

e = new SyntaxError("some message");
print(e.name === "SyntaxError");
print(e.message === "some message");
print(e.toString() === "SyntaxError: some message");

e.name = "";
print(e.toString() === "some message");
e.message = "";
print(e.toString() === "");

print(SyntaxError.prototype.toString === Error.prototype.toString);
print(SyntaxError.prototype.constructor === SyntaxError);
print(SyntaxError.prototype.name === "SyntaxError");
print(SyntaxError.prototype.message === "");
print(SyntaxError.prototype.toString() === "SyntaxError");


e = new URIError ();
print(e.name === "URIError");
print(e.message === "");
print(e.toString() === "URIError");

e = new URIError("some message");
print(e.name === "URIError");
print(e.message === "some message");
print(e.toString() === "URIError: some message");

e.name = "";
print(e.toString() === "some message");
e.message = "";
print(e.toString() === "");

print(URIError.prototype.toString === Error.prototype.toString);
print(URIError.prototype.constructor === URIError);
print(URIError.prototype.name === "URIError");
print(URIError.prototype.message === "");
print(URIError.prototype.toString() === "URIError");


print(Object.getPrototypeOf(EvalError) === Error);
print(Object.getPrototypeOf(RangeError) === Error);
print(Object.getPrototypeOf(ReferenceError) === Error);
print(Object.getPrototypeOf(SyntaxError) === Error);
print(Object.getPrototypeOf(TypeError) === Error);
print(Object.getPrototypeOf(URIError) === Error);
print(Object.getPrototypeOf(AggregateError) === Error);
