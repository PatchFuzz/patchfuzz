let caught = false;
try {
  dumpStencil("export var z;", { module : true, lineNumber: 0 });
} catch (e) {
  caught = true;
  print(e.message.includes("Module cannot be compiled with lineNumber == 0"), true);
}
print(caught, true);
