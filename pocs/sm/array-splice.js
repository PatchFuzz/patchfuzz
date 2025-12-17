function test1() {
    
    
    Object.defineProperty(Object.prototype, "0", {get: function() {
	c++;
    }, set: function() {}});
    var arr = [,,,];
    var c = 0;
    for (var i=0; i<100; i++) {
	arr.splice(0, 1);
	arr.length = 1;
    }

    print(c, 100);
}
test1();

function test2() {
    var arr = [];
    for (var i=0; i<100; i++)
	arr.push(i);
    for (var i=0; i<40; i++)
	arr.splice(0, 2);
    print(arr.length, 20);
    print(arr[0], undefined);
    print(arr[1], 81);
}
test2();

function testNonArray() {
    for (var i=0; i<10; i++) {
	var o = {splice:[].splice, 0:"a", 1:"b", 2:"c", length:3};
	o.splice(0, 2);
	print(o.length, 1);
	print(o[0], "c");
    }
}
testNonArray();
