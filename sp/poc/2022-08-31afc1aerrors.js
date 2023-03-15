

;

function roundtrip(error) {
  return deserialize(serialize(error, []));
}


{
  let error = new Error("hello world");
  let cloned = roundtrip(error);

  print(cloned, error);
  print(cloned.name, "Error");
  print(cloned.message, "hello world");
  print(cloned.stack, error.stack);
}

let constructors = [Error, EvalError, RangeError, ReferenceError,
                    SyntaxError, TypeError, URIError];
for (let constructor of constructors) {
  
  let error = new constructor("hello");
  let cloned = roundtrip(error);
  print(cloned, error);
  print(cloned.hasOwnProperty('message'), true);
  print(cloned instanceof constructor, true);

  
  error = new constructor();
  cloned = roundtrip(error);
  print(cloned, error);
  print(cloned.hasOwnProperty('message'), false);
  print(cloned instanceof constructor, true);

  
  error = new constructor("hello");
  error.name = "MyError";
  cloned = roundtrip(error);
  print(cloned.name, "Error");
  print(cloned.message, "hello");
  print(cloned.stack, error.stack);
  if (constructor !== Error) {
    print(cloned instanceof constructor, false);
  }

  
  error = new constructor("hello", { cause: new Error("foobar") });
  cloned = roundtrip(error);
  print(cloned, error);
  print(cloned.hasOwnProperty('message'), true);
  print(cloned instanceof constructor, true);
  print(cloned.stack, error.stack);
  print(cloned.stack === undefined, false);

  
  error = new constructor("hello");
  error.cause = new Error("foobar");
  print(Object.getOwnPropertyDescriptor(error, "cause"), {
    value: error.cause,
    writable: true,
    enumerable: true,
    configurable: true,
  });
  cloned = roundtrip(error);
  print(Object.getOwnPropertyDescriptor(cloned, "cause"), {
    value: cloned.cause,
    writable: true,
    enumerable: false,  
    configurable: true,
  });
  print(cloned.hasOwnProperty('message'), true);
  print(cloned instanceof constructor, true);
  print(cloned.stack, error.stack);
  print(cloned.stack === undefined, false);

  
  error = new (class MyError extends constructor {});
  cloned = roundtrip(error);
  print(cloned.name, constructor.name);
  print(cloned.hasOwnProperty('message'), false);
  print(cloned.stack, error.stack);
  print(cloned instanceof Error, true);

  
  error = evalcx(`new ${constructor.name}("hello")`);
  cloned = roundtrip(error);
  print(cloned.name, constructor.name);
  print(cloned.message, "hello");
  print(cloned.stack, error.stack);
  print(cloned instanceof constructor, true);
}


{
  let error = new Error("hello world");
  error.message = 123;
  let cloned = roundtrip(error);
  print(cloned.message, "123");
  print(cloned.hasOwnProperty('message'), true);

  error = new Error();
  Object.defineProperty(error, 'message', { get: () => {} });
  cloned = roundtrip(error);
  print(cloned.message, "");
  print(cloned.hasOwnProperty('message'), false);
}


{
  
  let error = new AggregateError([{a: 1}, {b: 2}], "hello");
  let cloned = roundtrip(error);
  print(cloned, error);
  print(cloned.hasOwnProperty('message'), true);
  print(cloned instanceof AggregateError, true);

  
  error = new AggregateError([{a: 1}, {b: 2}]);
  cloned = roundtrip(error);
  print(cloned, error);
  print(cloned.hasOwnProperty('message'), false);
  print(cloned instanceof AggregateError, true);

  
  error = new AggregateError([{a: 1}, {b: 2}]);
  error.name = "MyError";
  cloned = roundtrip(error);
  print(cloned.name, "Error");
  print(cloned.message, "");
  print(cloned.stack, error.stack);
  print(cloned instanceof AggregateError, false);
  print(cloned.errors, undefined);
  print(cloned.hasOwnProperty('errors'), false);
}
