



class C {}
class D extends C { constructor(...args) { super(...args, 75) } }
D.__proto__ = null;
assertThrows(() => new D(), TypeError);
