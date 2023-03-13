














var arr = ['a', 'b', 'c'];
var props = Object.getOwnPropertyNames(arr);

print(props.indexOf("0") !== -1);
print(props.indexOf("1") !== -1);
print(props.indexOf("2") !== -1);
print(props.indexOf("length") !== -1);
print(props.length === 4);


var obj = {key1: 'a', key3: 'b', key2: 'c', key4: 'c', key5: ''};
props = Object.getOwnPropertyNames(obj);

print(props.indexOf("key1") !== -1);
print(props.indexOf("key2") !== -1);
print(props.indexOf("key3") !== -1);
print(props.indexOf("key4") !== -1);
print(props.indexOf("key5") !== -1);
print(props.length === 5);

var obj2 = {};
Object.defineProperties(obj2, {
    key_one: {enumerable: true, value: 'one'},
    key_two: {enumerable: false, value: 'two'},
});

props = Object.getOwnPropertyNames(obj2);

print(props.indexOf("key_one") !== -1);
print(props.indexOf("key_two") !== -1);
print(props.length === 2);


function Parent() {}
Parent.prototype.inheritedMethod = function() {};

function Child() {
  this.prop = 5;
  this.method = function() {};
}
Child.prototype = new Parent;
Child.prototype.prototypeMethod = function() {};

props = Object.getOwnPropertyNames (new Child());

print(props.indexOf("prop") !== -1);
print(props.indexOf("method") !== -1);

print(props.length === 2);


var asd = Symbol ("asd");
var foo = Symbol ("foo");
var bar = Symbol ("bar");
var result = Object.getOwnPropertyNames ({1: 5, "a": 6, [foo]: 7, [asd]: 8, [bar]: 9});
print(!Object.hasOwnProperty (result, foo));
print(!Object.hasOwnProperty (result, asd));
print(!Object.hasOwnProperty (result, bar));
