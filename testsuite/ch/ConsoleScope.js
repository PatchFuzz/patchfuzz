




var a = 1;


var propList = ["varProp", "letProp", "constProp", "func", "nonVarProp", "class1"];
for (var i = 0; i < propList.length; ++i) {
    var evalStr = "typeof " + propList[i] + " == 'undefined'";
    WScript.Echo(evalStr + " : " + eval(evalStr));
}


a = 2;
a = 2;
a = 2;


var a = 1;
a = 2;
a = 2;
a = 2;


var a = 1;

propList = ["letProp2", "constProp2"];
for (var i = 0; i < propList.length; ++i) {
    var evalStr = "typeof " + propList[i] + " == 'undefined'";
    WScript.Echo(evalStr + " : " + eval(evalStr));
}

a = 1;
a = 1;



a = 2; 
a = 2; 
a = 2; 

a = 2; 
a = 2; 
a = 2; 
a = 2; 


var a = 1;
a = 2;


let userLet = 1;
a = 2;
const userConst = 1;
a = 2;