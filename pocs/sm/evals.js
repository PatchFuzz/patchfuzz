const directEval = (function iife() {
  return eval("(" + function evalFrame() {
    return saveStack();
  } + "())");
}());

print(directEval.source.includes("> eval"), true);
print(directEval.functionDisplayName, "evalFrame");

print(directEval.parent.source.includes("> eval"), true);

print(directEval.parent.parent.source.includes("> eval"), false);
print(directEval.parent.parent.functionDisplayName, "iife");

print(directEval.parent.parent.parent.source.includes("> eval"), false);

print(directEval.parent.parent.parent.parent, null);

const lave = eval;
const indirectEval = (function iife() {
  return lave("(" + function evalFrame() {
    return saveStack();
  } + "())");
}());

print(indirectEval.source.includes("> eval"), true);
print(indirectEval.functionDisplayName, "evalFrame");

print(indirectEval.parent.source.includes("> eval"), true);

print(indirectEval.parent.parent.source.includes("> eval"), false);
print(indirectEval.parent.parent.functionDisplayName, "iife");

print(indirectEval.parent.parent.parent.source.includes("> eval"), false);

print(indirectEval.parent.parent.parent.parent, null);
