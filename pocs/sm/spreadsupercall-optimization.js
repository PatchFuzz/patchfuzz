const iterations = 40;

function make(k) {
    var a = new Array(k);
    for ( let i=0 ; i < k ; i++ )
        a[i] = {}
    return a;
}

class Base {
    constructor() {
        
        print(new.target, g);
        print(typeof this, "object");
        print(Object.getPrototypeOf(this), g.prototype);

        
        return new Number(arguments.length);
    }
}

class g extends Base {
    constructor(...args) {
        super(...args);
    }
}

function f(a) {
    var sum = 0;
    for ( let i=0 ; i < iterations ; i++ )
        sum += new g(...a);
    return sum;
}

function time(k, t) {
    var then = Date.now();
    print(t(), iterations*k);
    var now = Date.now();
    return now - then;
}

function p(v) {
    
    
}

f(make(200));





p(time(374, () => f(make(374))));
p(time(375, () => f(make(375))));
p(time(376, () => f(make(376))));
p(time(377, () => f(make(377))));
