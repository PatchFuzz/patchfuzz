var a = 10;
var f2 = function () {}
 
f2.prototype = { 
        subF1 : function () { 
            a;
            a++;
        },
        subInt : 10,
        subF2 : function () { 
            a;
            a++;
        }
        
 }

var obj1 = new f2();
obj1.subF1();
obj1.subF2();


f2.prototype = { subF3 : { subSubF3 : function () { 
        a;
        a++;
 } } }
 
obj1 = new f2();
obj1.subF3.subSubF3();

var Foo = function () {
    this.subF1 = function () {         
        a;
        a++;
    }
    this.val = "value"
    this.subF2 = function () {         
        a;
        a++;
    }
}

obj1 = new Foo();
obj1.subF1();
obj1.subF2();

class OneClass {

    constructor(a) { 
        a;
        a++; 
    }
    static method1() {     
        a;
        a++; 
    }
    
    method() { 
        a;
        a++; 
    }
    
    get method2() {
        var str = "getter";
        a++; 
        return a;
    }
    
    set method2(abc) { 
        var str = "setter";
        a++; 
    }
}

var obj = new OneClass();
obj.method();
OneClass.method1();
var k = obj.method2;
obj.method2 = 31;
 
print("Pass");