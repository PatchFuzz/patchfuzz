function checkGetProp(obj, expected) {
    for (var i = 0; i < 50; i++) {
        print(obj.prop, expected);
    }
}

Object.prototype.prop = 1234;




const protoB = Object.create(null);
protoB.prop = 567;
const protoA = new FakeDOMObject();
Object.setPrototypeOf(protoA, protoB);
const receiver = Object.create(protoA);



gc();


checkGetProp(receiver, 567);





const {transplant} = transplantableObject({object: protoA});
transplant(this);


checkGetProp(receiver, 1234);
