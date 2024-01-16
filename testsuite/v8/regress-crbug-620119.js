





assertEquals(0, ((x, {[(x = function() { y = 0 }, "foo")]: y = eval(1)}) => { x(); return y })(42, {}));
assertEquals(0, (function (x, {[(x = function() { y = 0 }, "foo")]: y = eval(1)}) { x(); return y })(42, {}));
