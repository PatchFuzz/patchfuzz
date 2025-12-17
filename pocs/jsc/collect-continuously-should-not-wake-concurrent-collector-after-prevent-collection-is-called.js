array = [];
for (var i = 0; i < 800; ++i) {
  array[i] = new DataView(new ArrayBuffer());
}

let theCode = `
for (let j = 0; j < 100; j++) {
  generateHeapSnapshotForGCDebugging();
}
`

for (let i=0; i<5; i++) {
  $.agent.start(theCode);
}

for (let i=0; i<3; i++) {
  runString(theCode);
}
