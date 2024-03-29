


assertEq(typeof import.meta, "object");
assertEq(import.meta !== null, true);


let obj = import.meta;
assertEq(import.meta, obj);


function get() {
    return import.meta;
}
assertEq(get(), import.meta);




assertEq("url" in import.meta, true);
assertEq(import.meta.url.endsWith("import-meta.js"), true);

assertEq("resolve" in import.meta, true);

assertEq(import.meta.resolve("./x"),
         import.meta.url.replace("import-meta.js", "x"));

import getOtherMetaObject from "exportImportMeta.js";

let otherImportMeta = getOtherMetaObject();
assertEq(otherImportMeta.url.endsWith("exportImportMeta.js"), true);




assertEq(Object.isExtensible(import.meta), true);

for (const name of Reflect.ownKeys(import.meta)) {
  const desc = Object.getOwnPropertyDescriptor(import.meta, name);
  assertEq(desc.writable, true);
  assertEq(desc.enumerable, true);
  assertEq(desc.configurable, true);
  assertEq(desc.value, import.meta[name]);
}


assertEq(Object.getPrototypeOf(import.meta), null);

import.meta.url = 0;
assertEq(import.meta.url, 0);

import.meta.newProp = 42;
assertEq(import.meta.newProp, 42);

let found = new Set(Reflect.ownKeys(import.meta));

assertEq(found.size, 3);
assertEq(found.has("url"), true);
assertEq(found.has("newProp"), true);
assertEq(found.has("resolve"), true);

delete import.meta.url;
delete import.meta.newProp;
delete import.meta.resolve;

found = new Set(Reflect.ownKeys(import.meta));
assertEq(found.size, 0);
