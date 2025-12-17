async function f0() {
  await gc({ execution: "async" });
  d8.terminate();
}
f0();
f0();
f0();
