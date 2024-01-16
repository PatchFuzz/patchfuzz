




var passed = 1;
passed &= typeof Reflect.enumerate === 'undefined';

var proxy = new Proxy({}, {
  enumerate: function() {
    passed = 0;
  }
});
for(var key in proxy);

var keys=""
var proxy = new Proxy({x:1,y:2}, {});
for(var key in proxy){ keys += key;}
passed &= keys==="xy";


var keys=""
var proxy = new Proxy({"5":1}, {
  ownKeys: function() {
    return ['a', {y:2}, 5, 'b', Symbol.iterator];
  }
});
try{
  for(var key in proxy);
  passed = false;
}
catch(e){}


var keys=""
var proxy = new Proxy({b:1,a:2}, {
  ownKeys: function() {
    return ['a', {y:2}, 5, 'b', Symbol.iterator];
  }
});
try{
  for(var key in proxy);
  passed = false;
}
catch(e){}

var keys=""
var proxy = new Proxy({b:1,a:2}, {
  ownKeys: function() {
    return new Proxy(['a', 'b'],{});
  }
});
for(var key in proxy){ keys += key;}
passed &= keys==="ab";

var keys=""
var proxy = new Proxy({c:1,d:2}, {
  ownKeys: function() {
    return new Proxy(['a', 'b'],{
      get(target, propKey, receiver){
        return Reflect.get(['c', 'd'], propKey, receiver);
      }
    });
  }
});
for(var key in proxy){ keys += key;}
passed &= keys==="cd";

var keys=""
var proxy = new Proxy({b:1,a:2}, {
  ownKeys: function() {
    return {x:1,y:2, '0':'a'};
  }
});
for(var key in proxy){ keys += key;}
passed &= keys==="";

var keys=""
var proxy = new Proxy({b:1,a:2}, {
  ownKeys: function() {
    return {x:1,y:2, '0':'a', length:1};
  }
});
for(var key in proxy){ keys += key;}
passed &= keys==="a";


var keys=""
var getPrototypeOfCalled = 0;
var proxy = new Proxy({}, {
  ownKeys: function() {
    return ['a','b']; 
  },
  getOwnPropertyDescriptor: function(target, key){
    var enumerable = true;
    if(key === "a")
    {
      enumerable=false;
    }
    return {
      configurable: true,
      enumerable: enumerable,
      value: 42,
      writable: true
    };
  },
  getPrototypeOf: function(){
    getPrototypeOfCalled++;
    return null;
  }
});
for(var key in proxy){ keys += key;}
passed &= keys==="b";
passed &= getPrototypeOfCalled===1;

if (passed) {
  WScript.Echo("PASS");
}
