print(typeof import.meta, "object");
print(import.meta !== null, true);


let obj = import.meta;
print(import.meta, obj);


function get() {
    return import.meta;
}
print(get(), import.meta);




print("url" in import.meta, true);
print(import.meta.url.endsWith("import-meta.js"), true);

print("resolve" in import.meta, true);

print(import.meta.resolve("./x"),
         import.meta.url.replace("import-meta.js", "x"));

import getOtherMetaObject from "exportImportMeta.js";

let otherImportMeta = getOtherMetaObject();
print(otherImportMeta.url.endsWith("exportImportMeta.js"), true);




print(Object.isExtensible(import.meta), true);

for (const name of Reflect.ownKeys(import.meta)) {
  const desc = Object.getOwnPropertyDescriptor(import.meta, name);
  print(desc.writable, true);
  print(desc.enumerable, true);
  print(desc.configurable, true);
  print(desc.value, import.meta[name]);
}


print(Object.getPrototypeOf(import.meta), null);

import.meta.url = 0;
print(import.meta.url, 0);

import.meta.newProp = 42;
print(import.meta.newProp, 42);

let found = new Set(Reflect.ownKeys(import.meta));

print(found.size, 3);
print(found.has("url"), true);
print(found.has("newProp"), true);
print(found.has("resolve"), true);

delete import.meta.url;
delete import.meta.newProp;
delete import.meta.resolve;

found = new Set(Reflect.ownKeys(import.meta));
print(found.size, 0);
