

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

    
    
    assertEq(c.name, "c");

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);

(function(index) {
    var c = class { constructor(a){} };

    
    
    assertEq(c.length, 1);

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);




(function(index) {
    function* f() {}

    
    
    assertEq(f.name, "f");

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);

(function(index) {
    function* f(a) {}

    
    
    assertEq(f.length, 1);

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);




(function(index) {
    async function f() {}

    
    
    assertEq(f.name, "f");

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);

(function(index) {
    async function f(a) {}

    
    
    assertEq(f.length, 1);

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);




(function(index) {
    async function* f() {}

    
    
    assertEq(f.name, "f");

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);

(function(index) {
    async function* f(a) {}

    
    
    assertEq(f.length, 1);

    if (index === 0) {
        (function self() {
            self.caller(1);
        })();
    }
})(0);
