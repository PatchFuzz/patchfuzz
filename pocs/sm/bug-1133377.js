var buffer = new ArrayBuffer(100);

view = new DataView(buffer, undefined, undefined);
print(view.buffer, buffer);
print(view.byteOffset, 0);
print(view.byteLength, 100);

view = new DataView(buffer, 20, undefined);
print(view.buffer, buffer);
print(view.byteOffset, 20);
print(view.byteLength, 80);
