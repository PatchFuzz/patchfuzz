


load(libdir + 'asserts.js');

function recur(n, limit) {
  if (n > 0)
    return recur(n - 1, limit);
  return saveStack(limit);
}


assertThrowsInstanceOf(() => saveStack(-1), TypeError);


assertEq(saveStack(0).parent, null);
assertEq(recur(0, 0).parent !== null, true);
assertEq(recur(0, 0).parent.parent, null);
assertEq(recur(1, 0).parent.parent.parent, null);
assertEq(recur(2, 0).parent.parent.parent.parent, null);
assertEq(recur(3, 0).parent.parent.parent.parent.parent, null);


assertEq(saveStack(1).parent, null);
assertEq(recur(0, 1).parent, null);
assertEq(recur(0, 1).parent, null);
assertEq(recur(1, 1).parent, null);
assertEq(recur(2, 1).parent, null);


assertEq(saveStack(2).parent, null);
assertEq(recur(0, 2).parent !== null, true);
assertEq(recur(0, 2).parent.parent, null);
assertEq(recur(1, 2).parent.parent, null);
assertEq(recur(2, 2).parent.parent, null);


assertEq(saveStack(3).parent, null);
assertEq(recur(0, 3).parent !== null, true);
assertEq(recur(0, 3).parent.parent, null);
assertEq(recur(1, 3).parent.parent.parent, null);
assertEq(recur(2, 3).parent.parent.parent, null);
