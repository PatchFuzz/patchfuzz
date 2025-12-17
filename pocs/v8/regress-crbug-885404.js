var ab = new ArrayBuffer(2);
try { new Int32Array(ab); } catch (e) { }
print(2, ab.byteLength);
gc();
print(2, ab.byteLength);
