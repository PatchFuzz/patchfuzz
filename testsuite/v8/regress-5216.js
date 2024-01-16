





class MyError extends Error { }
assertFalse(new MyError().stack.includes("at MyError"));
