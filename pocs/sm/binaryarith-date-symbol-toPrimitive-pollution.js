function warmup(fun, input_array) {
  for (var index = 0; index < input_array.length; index++) {
      input = input_array[index];
      input_lhs = input[0];
      input_rhs = input[1];
      output    = input[2];
      for (var i = 0; i < 30; i++) {
          var y = fun(input_lhs, input_rhs);
          print(y, output)
      }
  }
}

{
  
  const testCases = [[new Date("2024-09-20T19:54:27.432Z"), new Date("2024-09-20T19:54:27.427Z"), 5],
                 [new Date("2024-09-20T19:54:27.432Z"), 1726862067427, 5],
                 [1726862067427, new Date("2024-09-20T19:54:27.432Z"), -5]];
  const funDateSub = (a, b) => { return a - b; }
  warmup(funDateSub, testCases);

  const originalDateToPrimitive = Date.prototype[Symbol.toPrimitive];
  let counter = 0;
  Object.defineProperty(Date.prototype, Symbol.toPrimitive, {
    value: function(hint) {
      counter++;
      return originalDateToPrimitive.call(this, hint);
    },
    configurable: true,
  });

  print(funDateSub(new Date("2024-09-20T19:54:27.432Z"), new Date("2024-09-20T19:54:27.422Z")), 10);
  print(counter, 2);
}

{
  
  let counter = 0;
  const originalDateToPrimitive = Date.prototype[Symbol.toPrimitive];
  Object.defineProperty(Date.prototype, Symbol.toPrimitive, {
    value: function(hint) {
      counter++;
      return originalDateToPrimitive.call(this, hint);
    },
  });

  const funDateSub = (a, b) => { return a - b; }
  print(funDateSub(new Date("2024-09-20T19:54:27.432Z"), new Date("2024-09-20T19:54:27.422Z")), 10);
  print(counter, 2);

  const testCases = [[new Date("2024-09-20T19:54:27.432Z"), new Date("2024-09-20T19:54:27.427Z"), 5],
                 [new Date("2024-09-20T19:54:27.432Z"), 1726862067427, 5],
                 [1726862067427, new Date("2024-09-20T19:54:27.432Z"), -5]];
  warmup(funDateSub, testCases);
  counter = 0;

  print(funDateSub(new Date("2024-09-20T19:54:27.432Z"), new Date("2024-09-20T19:54:27.422Z")), 10);
  print(funDateSub(new Date("2024-09-20T19:54:27.432Z"), 1726862067427), 5);
  print(counter, 3);
}

{
  
  const testCases = [[new Date("2024-09-20T19:54:27.432Z"), new Date("2024-09-20T19:54:27.427Z"), 5],
                 [new Date("2024-09-20T19:54:27.432Z"), 1726862067427, 5],
                 [1726862067427, new Date("2024-09-20T19:54:27.432Z"), -5]];
  const funDateSub = (a, b) => { return a - b; }
  warmup(funDateSub, testCases);

  let counter = 0;
  class MyDate extends Date {
    [Symbol.toPrimitive]() {
      counter++;
      return super.valueOf();
    }
  }

  print(funDateSub(new MyDate("2024-09-20T19:54:27.432Z"), new MyDate("2024-09-20T19:54:27.422Z")), 10);
  print(funDateSub(1726862067427, new MyDate("2024-09-20T19:54:27.432Z")), -5);
  print(counter, 3);
}
