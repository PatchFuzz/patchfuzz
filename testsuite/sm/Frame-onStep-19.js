







load(libdir + "stepping.js");

testStepping(
    `\
      (function() {              
        let x = 1;               
        funcb("funcb");          
        function funcb(msg) {    
          console.log(msg)
        }
      })                         
    `,
    [1, 2, 3, 7]);





testStepping(
    `\
      function f() {    
        var x = 0;      
        a();            

        function a() {  
          x += 1;       
        }               
        class Car {}    
        return x;       
      }                 
      f
    `,
    [1, 2, 3, 8, 9, 10]);
