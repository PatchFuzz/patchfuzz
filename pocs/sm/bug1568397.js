let obj = {x: 1};
obj.x = 1.1;

function Foo(val, phase){
    if (phase == 3) {
        
        Foo.prototype.__proto__ = proto;
    }

    
    this.d;

    this.c = val;

    if (phase == 2) {
        
        g_partial = this;

        
        new Foo(1.1, 3);
    }
    this.b = 2.2;
}

let proto = {get d() {
    function accessC(arg){
        var tmp = arg.c;
        return tmp.x;
    }

    
    
    
    for (var i = 0; i < 100000; i++) {
        accessC(g_partial);
    }

    
    
    x = accessC(this);
}};


for(let i = 0;i < 100;i++){
    new Foo(obj, 1);
}


new Foo(obj, 2);
