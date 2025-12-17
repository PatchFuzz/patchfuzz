print(eval("for (let x of [1, 2, 3]) { x }"), 3);
print(eval("for (let x of [1, 2, 3]) { x * 2 }"), 6);
print(eval("for (let x of []) { x }"), undefined);
