class MyError extends Error { }
print(new MyError().stack.includes("at MyError"));
