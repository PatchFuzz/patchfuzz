const defaultAsyncStackLimit = 60;

function recur(n, limit) {
  if (n > 0) {
    return callFunctionWithAsyncStack(function recur() {return recur(n - 1, limit)},
                                      saveStack(limit), "Recurse");
  }
  return saveStack(limit);
}

function checkRecursion(n, limit) {
  print("checkRecursion(" + String(n) + ", " + String(limit) + ")");

  try {
    var stack = recur(n, limit);
  } catch (e) {
    
    
    print(/too much recursion/.test("" + e), true);
    return;
  }

  
  
  
  
  if (limit == 0) {
    
    if (n + 1 < defaultAsyncStackLimit) {
      limit = defaultAsyncStackLimit + 1;
    } else {
      limit = n + 2 - (defaultAsyncStackLimit / 2);
    }
  }

  
  for (var i = 0; i < Math.min(n, limit); i++) {
    print(stack.functionDisplayName, "recur");
    print(stack.parent, null);
    stack = stack.asyncParent;
  }

  
  if (limit > n) {
    print(stack.functionDisplayName, "recur");
    print(stack.asyncParent, null);
    stack = stack.parent;
  } else {
    print(stack, null);
  }

  
  if (limit > n + 1) {
    print(stack.functionDisplayName, "checkRecursion");
    print(stack.asyncParent, null);
    stack = stack.parent;
  } else {
    print(stack, null);
  }

  
  if (limit > n + 2) {
    print(stack.functionDisplayName, null);
    print(stack.asyncParent, null);
    print(stack.parent, null);
  } else {
    print(stack, null);
  }
}


checkRecursion(0, 0);
checkRecursion(1, 0);
checkRecursion(2, 0);
checkRecursion(defaultAsyncStackLimit - 10, 0);
checkRecursion(defaultAsyncStackLimit, 0);
checkRecursion(defaultAsyncStackLimit + 10, 0);


checkRecursion(0, 1);
checkRecursion(1, 1);
checkRecursion(2, 1);


checkRecursion(0, 2);
checkRecursion(1, 2);
checkRecursion(2, 2);


checkRecursion(0, 3);
checkRecursion(1, 3);
checkRecursion(2, 3);


checkRecursion(defaultAsyncStackLimit + 10, defaultAsyncStackLimit + 10);
checkRecursion(defaultAsyncStackLimit + 11, defaultAsyncStackLimit + 10);
checkRecursion(defaultAsyncStackLimit + 12, defaultAsyncStackLimit + 10);
