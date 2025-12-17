print("Setting condition to true...");
var cond = true;
print(cond ? "True" : "False");

print("Setting condition to false...");
cond = false;
print(cond ? "True" : "False");

try {
  for (1 ? 'x' in {} : 0;;) break;
} catch {
  print("In expression should be allowed in true part");
}
