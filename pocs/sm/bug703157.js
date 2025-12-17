var test = {x:1,y:2};



delete test.x;



Object.defineProperty(test, "foo", {
    get: function() { return 1; },
    set: function(v) { 
        Object.defineProperty(this, "foo", { value: v });
        
        print(this.foo, 33);
    },
    configurable: true
});


test.other = 0;


print(test.foo, 1);



test.foo = 33;


print(test.foo, 33);


var arr = [];
for (var x in test) arr.push(x);
print("" + arr, "y,other");
