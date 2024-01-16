


C = class {};
for (var i = 0; i < 50000; ++i)
    C = class extends C {};
gc();

