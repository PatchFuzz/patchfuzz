const stack = evaluate(`
  new Error('test').stack;
  
`, { fileName: "test.js"});

print(stack.split("\n")[0], "@test.js:2:3");
