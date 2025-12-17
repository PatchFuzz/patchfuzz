const NCLASS = 20;

var g_prop = "prop";
var g_THIS = "THIS";


let C = [];
for (let i = 0; i < NCLASS; ++i) {
    let klass = class {
        get THIS() { return this; }
    };
    klass.prototype.prop = i;

    C.push(klass);
}


class D extends C[0] {
    get prop() { return super.prop; }
    get elem() { return super[g_prop]; }

    get prop_this() { return super.THIS; }
    get elem_this() { return super[g_THIS]; }
}

let d = new D();

for (var j = 0; j < 4; ++j) {
    for (var i = 0; i < 15; ++i) {
        
        Object.setPrototypeOf(D.prototype, C[j].prototype);

        
        print(d.prop, j);
        print(d.elem, j);

        
        print(d.prop_this, d);
        print(d.elem_this, d);
    }
}
