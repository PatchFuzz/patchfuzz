const transferables = [];
for (let i = 0; i < 170 + 1; ++i) {
  transferables.push(new ArrayBuffer(1));
}


serialize([], transferables, {
  scope: "DifferentProcess",
});
