



TypeError.prototype.__defineGetter__("name", () => { throw 42; });
try { console.log({ toString: () => { throw new TypeError() }}); } catch (e) {}
try { new WebAssembly.Table({}); } catch (e) {}
