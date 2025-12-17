function opt(wrapper, object, call, get) {
    
    object.prototype.p1;
    object.prototype.p2;

    if (call) {
        
        wrapper instanceof object;

        if (get) {
            
            return object.prototype.p1.value;
        }
    }
}

function main() {
    const object1 = function () {};
    const object2 = function () {};
    const object3 = function () {};
    const object4 = {value: 1};

    const wrapper1 = new object1();
    const wrapper2 = new object2();

    
    object1.prototype.p1 = object4;
    object1.prototype.p2 = object4;

    
    object2.prototype.p1 = 1;
    object2.prototype.p2 = 1;

    delete object2.prototype.p2;
    delete object2.prototype.p1;

    object2.prototype.p2 = 2;
    object2.prototype.p1 = 2;

    Reflect.defineProperty(object3.prototype, 'p1', {
        get() {
            return object4;
        }
    });

    
    opt(wrapper1, object3,  true,  true);

    for (let i = 0; i < testLoopCount; i++) {
        opt(wrapper1, object1,  true,  false);
        opt(wrapper1, object2,  false,  false);
    }

    
    delete object1.prototype.p2;
    delete object1.prototype.p1;

    object1.prototype.p2 = 1;
    object1.prototype.p1 = 0x1234;

    String(opt(wrapper1, object1,  true,  true));
}

main();

