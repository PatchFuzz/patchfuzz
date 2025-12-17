var p1 = new Proxy([], {
    get: function (target, property) {
        print('get trap: ' + property.toString());
        return Reflect['get'].apply(this, arguments);
    }
});

var p2 = new Proxy([0,1,2,3], {
    get: function (target, property) {
        print('get trap: ' + property.toString());
        return Reflect['get'].apply(this, arguments);
    },
    has: function(target, property){
        print('has trap: ' + property);
        return Reflect.has(target, property);
    },
    deleteProperty: function(target, property){
        print('delete trap: ' + property);
        return true;
    }
});

print('concat test#1');
p1.concat();
print('concat test#2');
p2.concat('a','b','c');
print('unshift  test');
p1.unshift();
print('splice test');
p2.splice(0,4,9,4);

