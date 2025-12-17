var g = newGlobal({sameCompartmentAs: this});
var newTarget = g.Function();
newTarget.prototype = undefined;



var arr1 = Reflect.construct(Array, [], newTarget);
print(objectGlobal(arr1), this);
print(arr1.__proto__, g.Array.prototype);


for (var i = 0; i < 10; i++) {
    var arr2 = arr1.slice();
    print(objectGlobal(arr2), g);
}
