




function AsmModuleSwitch() {
  "use asm";

  function fib(x) {
    
    
    x = x|0;
    switch(x|0) {
      case 000:  return 1;
      case 100:  return 1;
      case 200:  return 2;
      case 300:  return 3;
      case 400:  return 5;
      case 500:  return 8;
      case 600:  return 13;
      case 700:  return 21;
      case 800:  return 34;
      case 900:  return 55;
    }
    return -1;
  }
    
  return { 
    fib: fib
  };
}

var asmModuleSwitch = AsmModuleSwitch();
WScript.Echo(asmModuleSwitch.fib(000));
WScript.Echo(asmModuleSwitch.fib(100));
WScript.Echo(asmModuleSwitch.fib(200));
WScript.Echo(asmModuleSwitch.fib(300));
WScript.Echo(asmModuleSwitch.fib(400));
WScript.Echo(asmModuleSwitch.fib(500));
WScript.Echo(asmModuleSwitch.fib(600));