var a = new Uint8Array(%MaxSmi() >> 1);
a.x = 1;
print(()=>Object.entries(a), RangeError);
