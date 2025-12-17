function test(source, [lineNumber, columnNumber], openType = "{", closeType = "}") {
  let caught = false;
  try {
    Reflect.parse(source, { source: "foo.js" });
  } catch (e) {
    print(e.message.includes("missing " + closeType + " "), true);
    let notes = getErrorNotes(e);
    print(notes.length, 1);
    let note = notes[0];
    print(note.message, openType + " opened at line " + lineNumber + ", column " + columnNumber);
    print(note.fileName, "foo.js");
    print(note.lineNumber, lineNumber);
    print(note.columnNumber, columnNumber);
    caught = true;
  }
  print(caught, true);
}



test(`
function test1() {
}
function test2() {
  if (true) {
  
}
function test3() {
}
`, [4, 18]);


test(`
{
  if (true) {
}
`, [2, 1]);
test(`
if (true) {
  if (true) {
}
`, [2, 11]);
test(`
for (;;) {
  if (true) {
}
`, [2, 10]);
test(`
while (true) {
  if (true) {
}
`, [2, 14]);
test(`
do {
  do {
} while(true);
`, [2, 4]);


test(`
try {
  if (true) {
}
`, [2, 5]);
test(`
try {
} catch (e) {
  if (true) {
}
`, [3, 13]);
test(`
try {
} finally {
  if (true) {
}
`, [3, 11]);


test(`
var x = {
  foo: {
};
`, [2, 9]);


test(`
var x = [
  [
];
`, [2, 9], "[", "]");
