

var O = [1,2,3,4,5,6];
var A = undefined;
Object.defineProperty(O, 3, { configurable: false });

try
{
  A = O.splice(0, 6);
  throw new Error("didn't throw, returned " + A);
}
catch (e)
{
  assertEq(e instanceof TypeError, true,
           "deleting O[3] should have caused a TypeError");
}

assertEq(O.length, 6); 
assertEq(A, undefined); 

assertEq(O[5], undefined); 
assertEq(O[4], undefined); 
assertEq(O[3], 4); 
assertEq(O[2], 3); 
assertEq(O[1], 2); 
assertEq(O[0], 1); 
