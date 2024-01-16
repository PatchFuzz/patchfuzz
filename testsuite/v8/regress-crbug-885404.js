





var ab = new ArrayBuffer(2);
try { new Int32Array(ab); } catch (e) { }
assertEquals(2, ab.byteLength);
gc();
assertEquals(2, ab.byteLength);
