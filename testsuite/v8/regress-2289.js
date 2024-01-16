


























var foo = "a";
for (var i = 0; i < 12; i++) foo += foo;
foo = foo + 'b' + foo;

foo.replace(/b/, "a");
