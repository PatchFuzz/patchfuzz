



var o = { eval: function() { return this; } }
with (o) assertSame(o, eval());
