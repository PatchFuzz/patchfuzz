





let StackOverflow;
try {
  const bar = () => bar();
  bar();
} catch (e) {
  StackOverflow = e.constructor;
}

function test(n) {
  const str = `function asm() {
    "use asm"
    function foo() {
      return (${Array(n).fill("1").join("+")})|0
    }
    return foo;
  }
  `;

  try {
    eval(str);
    const res = asm()();
    if (res !== n) {
      console.log(`Invalid result: expected ${n}. Got ${res}`);
    }
  } catch (e) {
    if (!(e instanceof StackOverflow)) {
      console.log("Expected a StackOverflow error");
    }
  }
}


for (const n of [10, 50, 100, 500, 1000, 5000]) {
  test(n);
}

console.log("pass");
