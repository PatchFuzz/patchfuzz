if (print && print) { 
  print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
  {
      name: "Add, delete, modify properties after sealing",
      body: function () {
          let a = {x: 42};
          
          Object.seal(a);
          print(Object.isExtensible(a));
          print(Object.isSealed(a));

          
          a.y = 17;
          print(a.hasOwnProperty('y'));
          print(function () { 'use strict'; a.y = 17; }, TypeError, 
            "Should throw on creating a new property in sealed object in strict mode", 
            "Cannot create property for a non-extensible object");

          
          print(delete a.x);
          print(a.hasOwnProperty('x'));
          print(function () { 'use strict'; delete a.x; }, TypeError, 
            "Should throw on creating a new property in sealed object in strict mode", 
            "Calling delete on 'x' is not allowed in strict mode");

          
          let b = {};
          print(function () { 'use strict'; Object.setPrototypeOf(a, b); }, TypeError, 
            "Should throw on creating a new property in sealed object in strict mode", 
            "Cannot create property for a non-extensible object");

          
          a.x = 17;
          print(17, a.x);
      }
  },
  {
    name: "Add, delete, modify indexed elements of an array after sealing",
    body: function () {
        let a = [42];
        a[2] = 43;
        
        Object.seal(a);
        print(Object.isExtensible(a));
        print(Object.isSealed(a));

        
        a[3] = 17;
        print(3, a.length);
        print(a.hasOwnProperty('3'))
        print(function () { 'use strict'; a[3] = 17; }, TypeError, 
          "Should throw on creating a new property in sealed object in strict mode", 
          "Cannot create property for a non-extensible object");

        
        a[1] = 17;
        print(3, a.length);
        print(a.hasOwnProperty('1'))
        print(function () { 'use strict'; a[1] = 17; }, TypeError, 
          "Should throw on creating a new property in sealed object in strict mode", 
          "Cannot create property for a non-extensible object");

        
        print(delete a[0]);
        print(a.hasOwnProperty('0'));
        print(function () { 'use strict'; delete a[0]; }, TypeError, 
          "Should throw on creating a new property in sealed object in strict mode", 
          "Calling delete on '0' is not allowed in strict mode");

        
        a[0] = 17;
        print(17, a[0]);
    }
  },
  {
    name: "Add, delete, modify indexed elements of a typed array after sealing",
    body: function () {
        let a = new Int8Array(1);
        a[0] = 42;

        Object.seal(a);
        print(Object.isExtensible(a));
        print(Object.isSealed(a));

        

        
        a[0] = 17;
        print(17, a[0]);
    }
  },
  {
    name: "Modify length of an array after sealing",
    body: function () {
        let a = [42, 17, 33];
        a.length = 4;
        Object.seal(a);

        let descr_len = Object.getOwnPropertyDescriptor(a, 'length');
        print(descr_len.configurable);
        print(descr_len.writable);

        
        a.length = 5;
        a[4] = "new!";
        print(5, a.length);
        print(a.hasOwnProperty('4'));

        
        a.length = 1;
        print(3, a.length);
    }
  },
  {
    name: "Sealed versus frozen",
    body: function () {
        let a = {x: 42};
        Object.seal(a);
        print(Object.isSealed(a));
        print(Object.isFrozen(a));

        
        
        let empty_obj = {};
        Object.seal(empty_obj);
        print(Object.isSealed(empty_obj));
        print(Object.isFrozen(empty_obj));

        
        
        let b = {};
        Object.defineProperty(b, 'x', { value: 42, writable: false });
        Object.seal(b);
        print(Object.isSealed(b));
        print(Object.isFrozen(b));

        
        let arr = [42];
        Object.seal(arr);
        print(Object.isSealed(arr));
        print(Object.isFrozen(arr));

        
        let ta = new Int8Array(4);
        Object.seal(ta);
        print(Object.isSealed(ta));
        print(Object.isFrozen(ta));

        
        let ta_empty = new Int8Array(0);
        Object.seal(ta_empty);
        print(Object.isSealed(ta_empty));
        print(Object.isFrozen(ta_empty));

        
        let c = {x: 42};
        Object.freeze(c);
        print(Object.isFrozen(c));
        print(Object.isSealed(c));
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}