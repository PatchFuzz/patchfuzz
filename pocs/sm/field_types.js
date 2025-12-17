class C {
    [Math.sqrt(16)];
    [Math.sqrt(8)] = 5 + 2;
    "hi";
    "bye" = {};
    2 = 2;
    0x101 = 2;
    0o101 = 2;
    0b101 = 2;
    NaN = 0; 
    Infinity = 50; 
    
    with = 0;
    
    async = 0;
    get = 0;
    set = 0;
    export = 0;
    function = 0;
}

let obj = new C();
print(Math.sqrt(16) in obj, true);
print(obj[Math.sqrt(16)], undefined);
print(obj[Math.sqrt(8)], 7);
print("hi" in obj, true);
print(obj["hi"], undefined);
print(typeof obj["bye"], "object");
print(obj[2], 2);
print(obj[0x101], 2);
print(obj[0o101], 2);
print(obj[0b101], 2);
print(obj.NaN, 0);
print(obj.Infinity, 50);
print(obj.with, 0);
print(obj.async, 0);
print(obj.get, 0);
print(obj.set, 0);
print(obj.export, 0);
print(obj.function, 0);

if (typeof reportCompare === "function")
  reportCompare(true, true);
