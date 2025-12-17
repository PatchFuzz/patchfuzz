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
  print(e instanceof TypeError, true,
           "deleting O[3] should have caused a TypeError");
}

print(O.length, 6); 
print(A, undefined); 

print(O[5], undefined); 
print(O[4], undefined); 
print(O[3], 4); 
print(O[2], 3); 
print(O[1], 2); 
print(O[0], 1); 
