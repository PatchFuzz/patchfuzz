

const stacks = [];

for (let i = 0; i < 10; i++) {
  stacks.push(saveStack());
}

const s = stacks.pop();
for (let stack of stacks) {
  assertEq(s, stack);
}
