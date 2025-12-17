var x = new Object();
x.__defineGetter__('a', function() { return 7 });
JSON.parse('{"a":2600753951}');
gc();
