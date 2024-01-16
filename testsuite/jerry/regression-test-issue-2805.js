













var arrayBindNoArgs = Array.bind (this);
var bindWithArgs = arrayBindNoArgs.bind (this, 1, 2);
var array = new bindWithArgs ();
assert (array instanceof Array);
assert (array[0] === 1);
assert (array[1] === 2);
