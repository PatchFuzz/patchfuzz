



assertEquals(42, (({a = {b} = {b: 42}}) => a.b)({}));
assertEquals(42, b);
