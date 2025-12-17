var g = newGlobal();
g.eval("var x = 'some-atom';");

schedulezone(this);
schedulezone('atoms');
gc('zone');
print(g.x);
