b = {};
b.__proto__ = evalcx("lazy");
function g() {
    g(b.toString())
}
g();
