
var count = 0;

function Parent() {
    
    

    this.log('Parent ctor');
    this.meth1();
    this.log('data3 before : ' + this.data3);
    this.meth2();
    
    this.log('data3 after : ' + this.data3);
    this.log('');

    if (count++)
	assertEq(this.data3, 'z');
}
Parent.prototype.meth1 = function () {
    this.log('Parent.meth1()');
};
Parent.prototype.meth2 = function () {
    this.log('Parent.meth2()');
    
    this.data4 = 'x';
};
Parent.prototype.log = function (data) {
    print(data);
}


function ParentEmptyCtor() { }
ParentEmptyCtor.prototype = Parent.prototype;

function ChildA() {
    this.log('ChildA ctor');
    Parent.call(this);
}
ChildA.prototype = new ParentEmptyCtor();


ChildA.prototype.constructor = ChildA;
ChildA.prototype.meth1 = function () {
    this.log('ChildA.meth1()');
    this.data3 = 'z';
};
ChildA.prototype.meth2 = function () {
    this.log('ChildA.meth2()');
};

function ChildB() {
    this.log('ChildB ctor');
    Parent.call(this);
}
ChildB.prototype = new ParentEmptyCtor();

ChildB.prototype.constructor = ChildB;

function demo() {
    
    new ChildB();
    new ChildA();
}
demo();
