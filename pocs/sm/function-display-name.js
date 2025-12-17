function uno() { return dos(); }
const dos = () => tres.quattro();
let tres = {};
tres.quattro = () => saveStack()

const frame = uno();

print(frame.functionDisplayName, "tres.quattro");
print(frame.parent.functionDisplayName, "dos");
print(frame.parent.parent.functionDisplayName, "uno");
print(frame.parent.parent.parent.functionDisplayName, null);

print(frame.parent.parent.parent.parent, null);

