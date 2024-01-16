try { evaluate(`
class constructor  { get;                                           } 

test();
function test() {
    try {
      x;
    } catch (v) {
      gc();
    }
}
test();
`); } catch(exc) {}
constructor.toString();
