print(typeof %WasmStruct() === "object");
print(typeof %WasmArray() === "object");




print(() => print(%WasmStruct()), TypeError);
print(() => print(%WasmArray()), TypeError);
