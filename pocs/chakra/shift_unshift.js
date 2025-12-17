var x = [0, 1, 2, 3];
print(x);

x.shift();       
print(x);

x.unshift();     
print(x);

print(x.unshift(0));    
print(x);

x.unshift("a", "b", "c"); 
print(x);


var SubArray = function()
{
};
SubArray.prototype = new Array;
var newlist = new SubArray;


newlist.push(1);
newlist.push(2);
newlist.push(3); 
print(newlist[0]);   
print(newlist.shift());  
print(newlist.length);   
print(newlist.shift());  
print(newlist.length);   
print(newlist.shift());  
print(newlist[0]);   
print(newlist.length);   

print(newlist.unshift(2,3,4)); 
print(newlist[0]);         
print(newlist.pop());          
print(newlist.unshift(5,6,7)); 
print(newlist.length);         

for(i=0;i<7;i++)
    print(newlist.shift());

print(newlist.length);       
print(newlist.unshift(5,6,7));   
print(newlist.length);       
print(newlist.unshift());    




function echo(v) {
    print(v);
}

function guarded_call(func) {
    try {
        func();
    } catch (e) {
        echo(e.name + " : " + e.message);
    }
}

function dump_array(arr) {
    echo("length: " + arr.length);
    for (var p in arr) {
        if (+p == p) {
            echo("  " + p + ": " + arr[p]);
        }
    }
}

echo("--- unshift 0");
var a = [100, 101, 102];
guarded_call(function () {
    echo(a.unshift());
});
echo(a);

echo("--- unshift 1");
var a = [];
guarded_call(function () {
    var base = 4294967290;
    for (var i = 0; i < 10; i++) {
        a[base + i] = 100 + i;
    }
    delete a[base + 3];
    echo(a.unshift(200, 201, 202, 203));
});
dump_array(a);

echo("Test: unshift should throw when length is not writable."); 
var a = {};
var origLength = 1;
Object.defineProperty(a, "length", { value: origLength, writable: false });
a[0] = 0;
try {
  Array.prototype.unshift.apply(a, ["x"]);
} catch (ex) {
  echo("e instanceOf TypeError = " + (ex instanceof TypeError));
}
echo("a.length = " + a.length); 




function test0(){
  var obj1 = {};
  var func0 = function(argObj0,argMath1){
    var __loopvar4 = 0;
    do {
      if (__loopvar4 > 3) break;
      __loopvar4++;
    } while(((argObj0.length-- ) - (ary.unshift(argObj0.prop0, d, argObj0.prop2))))
  }
  Object.prototype.method0 = func0;
  var ary = new Array(10);
  var d = 1;
  obj1.method0(ary);
  print("ary.length = " + (ary.length|0));
};
test0();

function test1(arr)
{
    for(var __loopvar4 = 0; __loopvar4 < 2; __loopvar4++)
    {
      arr.length --;
      arr.shift();
    }
    return arr.length;
}

print("arr.length = " + test1(new Array(10)));


function crossSiteUnshift() {
    var sc0 = print('', 'samethread');
    sc0.ary = [1];
    return sc0.eval('Array.prototype.unshift.call(ary, null)');
}
print("Crosssite new length: " + crossSiteUnshift()); 





var a = ['1','d','e'];
var x;
var n=1; var m = 2;
var d;
function foo()
{
    var x=2;
    var b = ['c','f'];
    a.unshift(b,x,x=1);
    a.unshift(b,x,x=2, a.unshift());
    a.unshift(b,x,x=3, a);
    a.unshift(b,x,x=4, n++, d = m+n); 
    print(n); 
    print(d); 
    a.unshift(b,x,x=5, d=Math.sin(n) + 1);
    print(x); 
}
Array.prototype.unshift = function(){print("Overridden unshift")};
foo();
print(a);
