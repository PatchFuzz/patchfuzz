




























function f(x) { arguments; return x() + x(); }

assertEquals("hesthest", f(function () { return "hest"; }));
