var code = cacheEntry("(x => JSON.stringify(x))`bar`;");
var g = newGlobal({ cloneSingletons: true });
print("[\"bar\"]", evaluate(code, { global: g, saveBytecodeWithDelazifications: true }));
print("[\"bar\"]", evaluate(code, { global: g, saveBytecodeWithDelazifications: true }));
