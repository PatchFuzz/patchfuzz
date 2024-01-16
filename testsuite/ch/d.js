




function testcase() {

  function foo() {
    
    const x = {a: 1, b: 2, c: 3, };  
    return ( x.a === 1 && x.b === 2 && x.c === 3 );
  }
  try {
    return foo(); 
  }
  catch (e) {
    return false;
  }
}


WScript.Echo(testcase());
