const headerSize = 8;
const undefinedSize = 8;

let source = serialize(undefined).arraybuffer
print(source.detached, false);
print(source.byteLength, headerSize + undefinedSize);

let target = source.transfer(128);
print(source.detached, true);
print(source.byteLength, 0);
print(target.detached, false);
print(target.byteLength, 128);
