function getAsyncStack() {
  return saveStack();
}


let testAsyncCause = "Tes" + String.fromCharCode(355) + "String";

callFunctionWithAsyncStack(function asyncCallback() {
  let stack = saveStack();

  print(stack.functionDisplayName, "asyncCallback");
  print(stack.parent, null);
  print(stack.asyncCause, null);

  print(stack.asyncParent.functionDisplayName, "getAsyncStack");
  print(stack.asyncParent.asyncCause, testAsyncCause);
  print(stack.asyncParent.asyncParent, null);

  print(stack.asyncParent.parent.asyncCause, null);
  print(stack.asyncParent.parent.asyncParent, null);
  print(stack.asyncParent.parent.parent, null);
}, getAsyncStack(), testAsyncCause);
