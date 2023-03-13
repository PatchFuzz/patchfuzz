













var arrayBindNoArgs = Array.bind (this);
var bindWithArgs = arrayBindNoArgs.bind (this, 1, 2);
var array = new bindWithArgs ();
print(array instanceof Array);
print(array[0] === 1);
print(array[1] === 2);
