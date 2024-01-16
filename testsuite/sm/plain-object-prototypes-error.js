
function assertThrowsObjectError(f, name) {
    try {
        f();
        assertEq(true, false);
    } catch (e) {
        assertEq(e instanceof TypeError, true);
        assertEq(e.message.includes("called on incompatible " + name), true, e.message);
    }
}


assertThrowsObjectError(() => Map.prototype.has(0), "Map.prototype");
assertThrowsObjectError(() => Set.prototype.has(0), "Set.prototype");
assertThrowsObjectError(() => WeakMap.prototype.has({}), "WeakMap.prototype");
assertThrowsObjectError(() => WeakSet.prototype.has({}), "WeakSet.prototype");
assertThrowsObjectError(() => Date.prototype.getSeconds(), "Date.prototype");
assertThrowsObjectError(() => RegExp.prototype.compile(), "RegExp.prototype");


assertThrowsObjectError(() => Map.prototype.has.call(ArrayBuffer.prototype), "ArrayBuffer.prototype");
assertThrowsObjectError(() => Map.prototype.has.call(BigInt.prototype), "BigInt.prototype");
assertThrowsObjectError(() => Map.prototype.has.call(DataView.prototype), "DataView.prototype");
assertThrowsObjectError(() => Map.prototype.has.call(Date.prototype), "Date.prototype");
assertThrowsObjectError(() => Map.prototype.has.call(FinalizationRegistry.prototype), "FinalizationRegistry.prototype");
assertThrowsObjectError(() => Map.prototype.has.call(Int32Array.prototype), "Int32Array.prototype");
assertThrowsObjectError(() => Map.prototype.has.call(Promise.prototype), "Promise.prototype");
if (this.hasOwnProperty("ReadableStream")) {
    
    assertThrowsObjectError(() => Map.prototype.has.call(ReadableStream.prototype), "ReadableStream.prototype");
}
assertThrowsObjectError(() => Map.prototype.has.call(RegExp.prototype), "RegExp.prototype");
assertThrowsObjectError(() => Map.prototype.has.call(Set.prototype), "Set.prototype");
assertThrowsObjectError(() => Map.prototype.has.call(TypeError.prototype), "TypeError.prototype");
assertThrowsObjectError(() => Map.prototype.has.call(WeakMap.prototype), "WeakMap.prototype");
assertThrowsObjectError(() => Map.prototype.has.call(WeakRef.prototype), "WeakRef.prototype");


assertThrowsObjectError(() => Map.prototype.has.call(new Error), "Error");
assertThrowsObjectError(() => Map.prototype.has.call(new TypeError), "TypeError");
