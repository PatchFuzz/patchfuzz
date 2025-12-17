function test1() {
    function bar() {
        this.a = 1;
        this.b = 2;
        this.c = 2;
    }
    function baz() { }

    var obj = {};
    var re = /a/;
    var date1 = new Date();
    var date2 = new Date();
    date2.blah = 1;
    var obj1 = new bar();
    var obj2 = { a: 1, b: 2, c: 3 };
    var obj3 = new baz();
    var buff = new ArrayBuffer(8);
    var i8 = new Int8Array(buff, 0, 0);
    var i8_custom = new Int8Array(buff, 0, 0);
    i8_custom.a = 1;
    var i16 = new Int16Array(buff, 0, 0);
    var proto = { protoProp: 1 };

    obj1.__proto__ = proto;
    print("obj1.protoProp = " + obj1.protoProp);
    
    obj3.__proto__ = proto;
    print("obj3.protoProp = " + obj3.protoProp);

    obj2.__proto__ = proto;
    print("obj2.protoProp = " + obj2.protoProp);
    
    date1.__proto__ = proto;
    print("date1.protoProp = " + date1.protoProp);
    
    date2.__proto__ = proto;
    print("date2.protoProp = " + date2.protoProp);

    re.__proto__ = proto;
    print("re.protoProp = " + re.protoProp);
    
    buff.__proto__ = proto;
    print("buff.protoProp = " + buff.protoProp);
    
    i8.__proto__ = proto;
    print("i8.protoProp = " + i8.protoProp);
    
    i16.__proto__ = proto;
    print("i16.protoProp = " + i16.protoProp);
    
    i8_custom.__proto__ = proto;
    print("i8_custom.protoProp = " + i8_custom.protoProp);
    

    print("done");
}

function test2() {
    function ctor() {
        this.a = 1;
        this.b = 2;
    }

    var obj = { _a: 1 };

    var x1 = new ctor();    
    print('Changing __proto__');
    x1.__proto__ = obj;     
    var x2 = new ctor();
    var x3 = new ctor();    

    var y = new ctor();
    print('Changing __proto__');
    y.__proto__ = obj;      
}

function test3() {
    
    var proto = {};

    function foo() {
    }

    var x = new foo();
    var y = new foo();
    y.__proto__ = proto; 
    y._a = 1; 
    y._b = 1;
    y._c = 1;
    y._d = 1;
    var z = new foo(); 

    
    
    z.__proto__ = proto;
}

test1();
test2();
test3();