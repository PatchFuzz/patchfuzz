load(libdir + "asserts.js");

let ignored = [
  "constructor",
  "toJSON", 
  "toGMTString", 
]

let methods = Object.getOwnPropertyNames(Date.prototype)
                    .filter(name => !ignored.includes(name));

for (let method of methods) {
  assertTypeErrorMessage(() => Date.prototype[method].call(new Map),
    `Date.prototype.${method} called on incompatible Map`);

  assertTypeErrorMessage(() => Date.prototype[method].call(false),
    `Date.prototype.${method} called on incompatible boolean`);
}
