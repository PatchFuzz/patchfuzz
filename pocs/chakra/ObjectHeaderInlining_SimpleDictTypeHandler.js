function test(arg0, arg1) {
    this.prop0 = arg0;
}

var obj = new test(1,2);
Object.defineProperty(obj, "a", {value : 37,
                               writable : true});
obj[0] = 10; 

print(obj.prop0);
print(obj[0]);