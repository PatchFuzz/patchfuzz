Object.prototype.prop0 = 100;
Object.prototype.method0 = function () { return 100; }

function test1a() {
    var obj0 = Math.max(0x5a827999, -262144);
    return obj0.prop0;
}
print(test1a());
print(test1a());
print(test1a());

function test1b() {
    var obj0 = Math.max(0x5a827999, -262144);
    return obj0.method0();
}
print(test1b());
print(test1b());
print(test1b());

function test1c() {
    return Math.max(0x5a827999, -262144).method0();
}
print(test1c());
print(test1c());
print(test1c());

function test2a() {
    var obj0 = Math.max(0.5, -262144);
    return obj0.method0();
}
print(test2a());
print(test2a());
print(test2a());

function test2b() {
    var obj0 = Math.max(0.5, -262144);
    return obj0.method0();
}
print(test2b());
print(test2b());
print(test2b());

function test2c() {
    return Math.max(0.5, -262144).method0();
}
print(test2c());
print(test2c());
print(test2c());

function test3a() {
    var obj0 = { prop0: 1 };
    var t = obj0.prop0;

    var obj0 = 1;

    
    
    return obj0.prop0;
}
print(test3a());
print(test3a());
print(test3a());

function test3b() {
    var obj0 = { method0: 1 };
    var t = obj0.method0;

    var obj0 = 1;

    
    
    return obj0.method0();
}
print(test3b());
print(test3b());
print(test3b());
