let domObject = new FakeDOMObject();

let {object, transplant} = transplantableObject({object: domObject});
print(object, domObject);

let global1 = newGlobal({newCompartment: true});
let global2 = newGlobal({newCompartment: true});

transplant(global1);
transplant(global2);
transplant(global1);

print(object, domObject);

global1.domObj = domObject;

global1.evaluate("(" + function f() {
    var domObjNormal = new FakeDOMObject();
    for (var i = 0; i < 5000; i++) {
        var obj = i < 1500 ? domObjNormal : domObj;
        print(obj.doFoo(4, 5), 2);
    }
}.toString() + ")()");
