;

function recur(n, limit) {
  if (n > 0)
    return recur(n - 1, limit);
  return saveStack(limit);
}


print(() => saveStack(-1), TypeError);


print(saveStack(0).parent, null);
print(recur(0, 0).parent !== null, true);
print(recur(0, 0).parent.parent, null);
print(recur(1, 0).parent.parent.parent, null);
print(recur(2, 0).parent.parent.parent.parent, null);
print(recur(3, 0).parent.parent.parent.parent.parent, null);


print(saveStack(1).parent, null);
print(recur(0, 1).parent, null);
print(recur(0, 1).parent, null);
print(recur(1, 1).parent, null);
print(recur(2, 1).parent, null);


print(saveStack(2).parent, null);
print(recur(0, 2).parent !== null, true);
print(recur(0, 2).parent.parent, null);
print(recur(1, 2).parent.parent, null);
print(recur(2, 2).parent.parent, null);


print(saveStack(3).parent, null);
print(recur(0, 3).parent !== null, true);
print(recur(0, 3).parent.parent, null);
print(recur(1, 3).parent.parent.parent, null);
print(recur(2, 3).parent.parent.parent, null);
