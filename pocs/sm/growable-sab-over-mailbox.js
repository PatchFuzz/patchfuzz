var gsab = new SharedArrayBuffer(4, {maxByteLength: 16});


print(gsab.byteLength, 4);
print(gsab.maxByteLength, 16);


setSharedObject(gsab);



var gsab2 = getSharedObject();

print(gsab !== gsab2, true, "different objects expected");


print(gsab.byteLength, 4);
print(gsab.maxByteLength, 16);
print(gsab2.byteLength, 4);
print(gsab2.maxByteLength, 16);


gsab.grow(6);


print(gsab.byteLength, 6);
print(gsab.maxByteLength, 16);
print(gsab2.byteLength, 6);
print(gsab2.maxByteLength, 16);


gsab2.grow(8);


print(gsab.byteLength, 8);
print(gsab.maxByteLength, 16);
print(gsab2.byteLength, 8);
print(gsab2.maxByteLength, 16);
