




var test = 1; 
function fail(n, expected, result) { WScript.Echo("failure in test " + test + "; expected " + expected + ", got " + result); }
function test0() {
var x;
var y;
var result;
var check;

x = 0;
result = (-- x);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


x = 1;
result = (-- x);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


x = -1;
result = (-- x);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


x = 2;
result = (-- x);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


x = -2;
result = (-- x);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


x = 3;
result = (-- x);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


x = -3;
result = (-- x);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


x = 4;
result = (-- x);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


x = -4;
result = (-- x);
check = -5;
if(result != check) { fail(test, check, result); } ++test; 


x = 8;
result = (-- x);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


x = -8;
result = (-- x);
check = -9;
if(result != check) { fail(test, check, result); } ++test; 


x = 1073741822;
result = (-- x);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


x = 1073741823;
result = (-- x);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


x = 1073741824;
result = (-- x);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


x = 1073741825;
result = (-- x);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


x = -1073741823;
result = (-- x);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


x = (-0x3fffffff-1);
result = (-- x);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


x = -1073741825;
result = (-- x);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


x = -1073741826;
result = (-- x);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


x = 2147483646;
result = (-- x);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


x = 2147483647;
result = (-- x);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


x = 2147483648;
result = (-- x);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


x = 2147483649;
result = (-- x);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


x = -2147483647;
result = (-- x);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


x = -2147483648;
result = (-- x);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


x = -2147483649;
result = (-- x);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


x = -2147483650;
result = (-- x);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


x = 4294967295;
result = (-- x);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


x = 4294967296;
result = (-- x);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


x = -4294967295;
result = (-- x);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


x = -4294967296;
result = (-- x);
check = -4294967297;
if(result != check) { fail(test, check, result); } ++test; 

}
test0();

print("pass");
