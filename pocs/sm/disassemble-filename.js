if (typeof disassemble !== "function") {
  quit();
}

const out = evaluate(`
disassemble();
`, {
  fileName: String.fromCharCode(3823486100),
});
print(out.includes(`"file": "\uC494",`), true);
