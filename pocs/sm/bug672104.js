;

a = {};
b = __proto__;
for (i = 0; i < 9; i++) {
    if (globalPrototypeChainIsMutable()) {
        __proto__ = a;
        a.__proto__ = b
    }
}
