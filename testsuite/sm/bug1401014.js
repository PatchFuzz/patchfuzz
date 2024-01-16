
with ({}) { }



function Thing() {
    this.a = {};    
    this.b = {};    
}

(new Thing());
(new Thing()).a = null;
(new Thing()).b = null;


var arr = new Array(1000);
arr[0];

var ctx = new Thing();

function funPsh(t, x) {
    t.a = x;
}

function funBug(t, i) {
    t.b = t.a;      
    t.a = null;     
    arr[i] = 0;     
    return t.b;
}


for (var i = 0; i < 20000; ++i) {
    funBug(ctx, 0);
    funPsh(ctx, {});
}


let tmp = { a: null, b: {} };
funBug(tmp, 0);


for (var i = 0; i < 20000; ++i) {
    funBug(ctx, 0);
    funPsh(ctx, {});
}


let res = funBug(ctx, 500);


assertEq(res === null, false);
