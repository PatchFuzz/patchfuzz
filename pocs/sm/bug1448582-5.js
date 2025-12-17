(function(index) {
    
    var c = class { constructor(){} };

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);

(function(index) {
    var c = class { constructor(){} };

    
    
    print(c.name, "c");

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);

(function(index) {
    var c = class { constructor(a){} };

    
    
    print(c.length, 1);

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);




(function(index) {
    function* f() {}

    
    
    print(f.name, "f");

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);

(function(index) {
    function* f(a) {}

    
    
    print(f.length, 1);

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);




(function(index) {
    async function f() {}

    
    
    print(f.name, "f");

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);

(function(index) {
    async function f(a) {}

    
    
    print(f.length, 1);

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);




(function(index) {
    async function* f() {}

    
    
    print(f.name, "f");

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);

(function(index) {
    async function* f(a) {}

    
    
    print(f.length, 1);

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);
