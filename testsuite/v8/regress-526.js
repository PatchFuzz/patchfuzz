




























var o = { foo: function() { }, get bar() { return {x:42} } };

assertEquals(42, o.bar.x);
