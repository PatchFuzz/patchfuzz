const numArgs = 100;
const argLength = (1 << 24);
const long_string = "B".repeat(argLength);
const args = [];

for (let i = 0; i < numArgs; i++) {
  args.push(long_string);
}

let threw = false;
try {
  new Worker(() => {}, { type: 'function', arguments: args });
} catch (e) {
  print(e instanceof Error);
  print(e.message.includes("Invalid argument"));
  threw = true;
}
print(threw);
