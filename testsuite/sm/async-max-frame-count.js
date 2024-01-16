

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
    
    
    assertEq(/too much recursion/.test("" + e), true);
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
    assertEq(stack.functionDisplayName, "recur");
    assertEq(stack.parent, null);
    stack = stack.asyncParent;
  }

  
  if (limit > n) {
    assertEq(stack.functionDisplayName, "recur");
    assertEq(stack.asyncParent, null);
    stack = stack.parent;
  } else {
    assertEq(stack, null);
  }

  
  if (limit > n + 1) {
    assertEq(stack.functionDisplayName, "checkRecursion");
    assertEq(stack.asyncParent, null);
    stack = stack.parent;
  } else {
    assertEq(stack, null);
  }

  
  if (limit > n + 2) {
    assertEq(stack.functionDisplayName, null);
    assertEq(stack.asyncParent, null);
    assertEq(stack.parent, null);
  } else {
    assertEq(stack, null);
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
