
var test = {x:1,y:2};



delete test.x;



Object.defineProperty(test, "foo", {
    get: function() { return 1; },
    set: function(v) { 
        Object.defineProperty(this, "foo", { value: v });
        
        assertEq(this.foo, 33);
    },
    configurable: true
});


test.other = 0;


assertEq(test.foo, 1);



test.foo = 33;


assertEq(test.foo, 33);


var arr = [];
for (var x in test) arr.push(x);
assertEq("" + arr, "y,other");
