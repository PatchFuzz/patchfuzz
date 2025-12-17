var desc = Object.getOwnPropertyDescriptor(Error.prototype, 'message');

print(desc.writable, true);
print(desc.enumerable, false);
print(desc.configurable, true);
