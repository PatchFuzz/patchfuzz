var o = { eval: function() { return this; } }
with (o) print(o, eval());
