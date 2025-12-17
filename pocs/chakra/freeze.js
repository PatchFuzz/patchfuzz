if (print && print) { 
  print("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
  {
      name: "Add, delete, modify properties after freezing",
      body: function () {
          let a = {x: 42};
          
          Object.freeze(a);
          print(Object.isExtensible(a));
          print(Object.isSealed(a));
          print(Object.isFrozen(a));

          
          a.y = 17;
          print(a.hasOwnProperty('y'));
          print(function () { 'use strict'; a.y = 17; }, TypeError, 
            "Should throw on creating a new property in frozen object in strict mode", 
            "Cannot create property for a non-extensible object");

          
          print(delete a.x);
          print(a.hasOwnProperty('x'));
          print(function () { 'use strict'; delete a.x; }, TypeError, 
            "Should throw on creating a new property in frozen object in strict mode", 
            "Calling delete on 'x' is not allowed in strict mode");

          
          let b = {};
          print(function () { 'use strict'; Object.setPrototypeOf(a, b); }, TypeError, 
            "Should throw on creating a new property in sealed object in strict mode", 
            "Cannot create property for a non-extensible object");

          
          let descr = Object.getOwnPropertyDescriptor(a, 'x');
          print(descr.configurable);
          print(descr.writable);
      }
  },
  {
    name: "Add, delete, modify indexed elements of an array after freezing",
    body: function () {
        let a = [42];
        a[2] = 43;
        
        Object.freeze(a);
        print(Object.isExtensible(a));
        print(Object.isSealed(a));
        print(Object.isFrozen(a));

        
        a[3] = 17;
        print(3, a.length);
        print(a.hasOwnProperty('3'))
        print(function () { 'use strict'; a[3] = 17; }, TypeError, 
          "Should throw on creating a new property in frozen object in strict mode", 
          "Cannot create property for a non-extensible object");

        
        a[1] = 17;
        print(3, a.length);
        print(a.hasOwnProperty('1'))
        print(function () { 'use strict'; a[1] = 17; }, TypeError, 
          "Should throw on creating a new property in frozen object in strict mode", 
          "Cannot create property for a non-extensible object");

        
        print(delete a[0]);
        print(a.hasOwnProperty('0'));
        print(function () { 'use strict'; delete a[0]; }, TypeError, 
          "Should throw on creating a new property in frozen object in strict mode", 
          "Calling delete on '0' is not allowed in strict mode");

        
        let descr = Object.getOwnPropertyDescriptor(a, '0');
        print(descr.configurable);
        print(descr.writable);
        a[0] = 17;
        print(42, a[0]);
        print(function () { 'use strict'; a[0] = 17; }, TypeError, 
          "Should throw on creating a new property in frozen object in strict mode", 
          "Assignment to read-only properties is not allowed in strict mode");

        
        let descr_len = Object.getOwnPropertyDescriptor(a, 'length');
        print(descr_len.configurable);
        print(descr_len.writable);
    }
  },
  {
    
    
    name: "Add, delete, modify indexed elements of a typed array after freezing",
    body: function () {
        let a = new Int8Array(1);
        a[0] = 42;

        Object.freeze(a); 

        print(Object.isExtensible(a));
        print(Object.isSealed(a));
        print(Object.isFrozen(a)); 

        
        
        a[0] = 17;
        print(17, a[0]);
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}