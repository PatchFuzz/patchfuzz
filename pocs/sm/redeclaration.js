const npos = -1;

function test_one(fun, filename, name,
                  [prevLineNumber, prevColumnNumber],
                  [lineNumber, columnNumber]) {
    let caught = false;
    try {
        fun();
    } catch (e) {
        print(e.message.includes("redeclaration"), true);
        print(e.lineNumber, lineNumber);
        print(e.columnNumber, columnNumber);
        let notes = getErrorNotes(e);
        if (prevLineNumber == npos) {
            print(notes.length, 0);
        } else {
            print(notes.length, 1);
            let note = notes[0];
            print(note.message,
                     `Previously declared at line ${prevLineNumber}, column ${prevColumnNumber}`);
            print(note.lineNumber, prevLineNumber);
            print(note.columnNumber, prevColumnNumber);
            if (filename)
                print(note.fileName, filename);
        }
        caught = true;
    }
    print(caught, true);
}

function test_parse(source, ...args) {
    test_one(() => {
        Reflect.parse(source, { source: "foo.js" });
    }, "foo.js", ...args);
}

function test_eval(source, ...args) {
    test_one(() => {
        eval(source);
    }, undefined, ...args);
}

function test(...args) {
    test_parse(...args);
    test_eval(...args);
}



test(`
let a, a;
`, "a", [2, 5], [2, 8]);

test(`
let a;
let a;
`, "a", [2, 5], [3, 5]);

test(`
let a;
const a = 1;
`, "a", [2, 5], [3, 7]);

test(`
let a;
var a;
`, "a", [2, 5], [3, 5]);

test(`
let a;
function a() {
}
`, "a", [2, 5], [3, 10]);

test(`
{
  let a;
  function a() {
  }
}
`, "a", [3, 7], [4, 12]);



test(`
const a = 1, a = 2;
`, "a", [2, 7], [2, 14]);

test(`
const a = 1;
const a = 2;
`, "a", [2, 7], [3, 7]);

test(`
const a = 1;
let a;
`, "a", [2, 7], [3, 5]);

test(`
const a = 1;
var a;
`, "a", [2, 7], [3, 5]);

test(`
const a = 1;
function a() {
}
`, "a", [2, 7], [3, 10]);

test(`
{
  const a = 1;
  function a() {
  }
}
`, "a", [3, 9], [4, 12]);



test(`
var a;
let a;
`, "a", [2, 5], [3, 5]);

test(`
var a;
const a = 1;
`, "a", [2, 5], [3, 7]);



test(`
function a() {};
let a;
`, "a", [2, 10], [3, 5]);

test(`
function a() {};
const a = 1;
`, "a", [2, 10], [3, 7]);



test(`
{
  function a() {};
  let a;
}
`, "a", [3, 12], [4, 7]);

test(`
{
  function a() {};
  const a = 1;
}
`, "a", [3, 12], [4, 9]);



test(`
try {
} catch (a) {
  let a;
}
`, "a", [3, 10], [4, 7]);
test(`
try {
} catch (a) {
  const a = 1;
}
`, "a", [3, 10], [4, 9]);

test(`
try {
} catch (a) {
  function a() {
  }
}
`, "a", [3, 10], [4, 12]);



test(`
function f(a) {
  let a;
}
`, "a", [2, 12], [3, 7]);

test(`
function f(a) {
  const a = 1;
}
`, "a", [2, 12], [3, 9]);

test(`
function f([a]) {
  let a;
}
`, "a", [2, 13], [3, 7]);

test(`
function f({a}) {
  let a;
}
`, "a", [2, 13], [3, 7]);

test(`
function f(...a) {
  let a;
}
`, "a", [2, 15], [3, 7]);

test(`
function f(a=1) {
  let a;
}
`, "a", [2, 12], [3, 7]);





test_eval(`
let a;
eval("var a");
`, "a", [npos, npos], [1, 5]);
