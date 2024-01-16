














var arr = ['a', 'b', 'c'];
var props = Object.getOwnPropertyNames(arr);

assert (props.indexOf("0") !== -1);
assert (props.indexOf("1") !== -1);
assert (props.indexOf("2") !== -1);
assert (props.indexOf("length") !== -1);
assert (props.length === 4);


var obj = {key1: 'a', key3: 'b', key2: 'c', key4: 'c', key5: ''};
props = Object.getOwnPropertyNames(obj);

assert (props.indexOf("key1") !== -1);
assert (props.indexOf("key2") !== -1);
assert (props.indexOf("key3") !== -1);
assert (props.indexOf("key4") !== -1);
assert (props.indexOf("key5") !== -1);
assert (props.length === 5);

var obj2 = {};
Object.defineProperties(obj2, {
    key_one: {enumerable: true, value: 'one'},
    key_two: {enumerable: false, value: 'two'},
});

props = Object.getOwnPropertyNames(obj2);

assert (props.indexOf("key_one") !== -1);
assert (props.indexOf("key_two") !== -1);
assert (props.length === 2);


function Parent() {}
Parent.prototype.inheritedMethod = function() {};

function Child() {
  this.prop = 5;
  this.method = function() {};
}
Child.prototype = new Parent;
Child.prototype.prototypeMethod = function() {};

props = Object.getOwnPropertyNames (new Child());

assert (props.indexOf("prop") !== -1);
assert (props.indexOf("method") !== -1);

assert (props.length === 2);


var asd = Symbol ("asd");
var foo = Symbol ("foo");
var bar = Symbol ("bar");
var result = Object.getOwnPropertyNames ({1: 5, "a": 6, [foo]: 7, [asd]: 8, [bar]: 9});
assert (!Object.hasOwnProperty (result, foo));
assert (!Object.hasOwnProperty (result, asd));
assert (!Object.hasOwnProperty (result, bar));
