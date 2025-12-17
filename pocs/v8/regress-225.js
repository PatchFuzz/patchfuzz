print("foo", "foo".replace(/(?:)/g, function() { return ""; }));

print("foo", "foo".replace(/(?:)/g, ""));
