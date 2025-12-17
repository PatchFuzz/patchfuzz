Reflect.get(new Error(), "stack", false);
print(() => Reflect.get(new Error(), "stack", null), TypeError);
print(() => Reflect.get(new Error(), "stack", undefined), TypeError);
