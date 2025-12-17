print(() => createExternalizableTwoByteString('foobarconstest' + 42));

let str = createExternalizableTwoByteString(
    createExternalizableTwoByteString('foobarconstest') + 42);
print(isOneByteString(str));
