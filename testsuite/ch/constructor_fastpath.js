




function makeArray() {
  return [new Array(true), new Array("some string"), new Array(1075133691)];
}

for (let i = 0; i < 100; ++i) {
  makeArray();
}

console.log("pass");
