var g = newGlobal();
do {
  new g.String(); 
} while (!inIon());


function dontAbortWholeCompilation() {
    class B {};
    class D extends B {
        constructor() { super(); }
    };

    return D;
}
var classImpl = dontAbortWholeCompilation();

do {
  new classImpl(); 
} while (!inIon());
