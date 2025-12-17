var nonArray = { length: 4, 0: 42, 2: 37, 3: undefined, 4: 0 };
Array.prototype.sort.call(nonArray);

print(4, nonArray.length, "preserve length");
print(37, nonArray[0], "sort smallest first");
print(42, nonArray[1], "sort largest last");
print(2 in nonArray, "don't delete undefined");
print(undefined, nonArray[2], "sort undefined after largest");
print(3 in nonArray, "don't create non-existing");
print(0, nonArray[4], "don't affect after length.");
