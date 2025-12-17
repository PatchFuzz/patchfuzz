var x = {};

 print("x.valueOf()");
 try {
    x.valueOf();  
 }
 catch (e)
 {
    print(e);
 }

print("x.valueOf.call(undefined)");
 try {
    x.valueOf.call(undefined);  
 }
 catch (e)
 {
    print(e);
 }

print("x.valueOf.call(null)");
 try {
    x.valueOf.call(null);  
 }
 catch (e)
 {
    print(e);
 }

print("x.valueOf.call()");
 try {
    x.valueOf.call();  
 }
 catch (e)
 {
    print(e);
 }

print("typeof x.valueOf.call(true)");
 print(typeof x.valueOf.call(true));  

print("typeof x.valueOf.call(42)");
 print(typeof x.valueOf.call(42));  

print("typeof x.valueOf.call('Hello')");
 print(typeof x.valueOf.call('Hello'));  
