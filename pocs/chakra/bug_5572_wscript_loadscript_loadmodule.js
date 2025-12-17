print("..\\UnitTestFramework\\UnitTestFramework.js");
function func_0(){ return "" };

var tests = [
  {
    name: "Expect exception with invalid file name to WScript.LoadScript",
    body: function () {  
        print(function () { 
            print(``, ``, {
                toString: function () {
                    func_0();
                }}
            );        
        }, Error, 
        "Should throw for invalid input to WScript.LoadScript", 
        "Unsupported argument type inject type.");
    }
  },
  {
    name: "Expect exception with invalid type to WScript.LoadScript",
    body: function () {  
        print(function () { 
            print(``, {
                toString: function () {
                    func_0();
                }}, ``
            );        
        }, Error, 
        "Should throw for invalid input to WScript.LoadScript", 
        "Unsupported argument type inject type.");
    }
  },
  {
    name: "Expect exception with invalid content to WScript.LoadScript",
    body: function () {  
        print(function () { 
            print({
                toString: function () {
                    func_0();
                }}, ``, ``
            );        
        }, Error, 
        "Should throw for invalid input to WScript.LoadScript", 
        "Unsupported argument type inject type.");
    }
  },
  {
    name: "Expect exception with invalid file name to WScript.LoadModule",
    body: function () {  
        print(function () { 
            print(``, ``, {
                toString: function () {
                    func_1();
                }}
            );        
        }, ReferenceError, 
        "'func_1' is not defined");
    }
  },
  {
    name: "Expect exception with invalid type to WScript.LoadModule",
    body: function () {  
        print(function () { 
            print(``, {
                toString: function () {
                    func_1();
                }}, ``
            );        
        }, ReferenceError, 
        "Should throw for invalid input to WScript.LoadModule", 
        "'func_1' is not defined");
    }
  },
  {
    name: "Expect exception with invalid content to WScript.LoadModule",
    body: function () {  
        print(function () { 
            print({
                toString: function () {
                    func_1();
                }}, ``, ``
            );        
        }, ReferenceError, 
        "Should throw for invalid input to WScript.LoadModule", 
        "'func_1' is not defined");
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
