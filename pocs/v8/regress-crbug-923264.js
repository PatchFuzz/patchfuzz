let paramName = '';
for (let i=0; i < 2**10; i++) {
  paramName += 'a';
}

let params = '';
for (let i = 0; i < 2**10; i++) {
  params += paramName + i + ',';
}

let fn = eval(`(
  class A {
    constructor (${params}) {
      function lazy() {
        return function lazier() { return ${paramName+1} }
      };
      return lazy;
    }
})`);

gc()
