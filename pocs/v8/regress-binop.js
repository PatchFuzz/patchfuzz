var e31 = Math.pow(2, 31);

print(-e31, -1*e31);
print(e31, -1*e31*(-1));
print(e31, -1*-e31);
print(e31, -e31*(-1));

var x = {toString : function() {return 1}}
function add(a,b){return a+b;}
%PrepareFunctionForOptimization(add);
add(1,x);
add(1,x);
%OptimizeFunctionOnNextCall(add);
add(1,x);
x.toString = function() {return "2"};

print(add(1,x), "12");


function Checker() {
  this.str = "1";
  var toStringCalled = 0;
  var toStringExpected = 0;
  this.toString = function() {
    toStringCalled++;
    return this.str;
  };
  this.check = function() {
    toStringExpected++;
    print(toStringExpected, toStringCalled);
  };
};
var left = new Checker();
var right = new Checker();

function test(fun,check_fun,a,b,does_throw) {
  left.str = a;
  right.str = b;
  try {
    print(check_fun(a,b), fun(left, right));
    print(!does_throw);
  } catch(e) {
    if (e instanceof TypeError) {
      print(!!does_throw);
    } else {
      throw e;
    }
  } finally {
    left.check();
    if (!does_throw || does_throw>1) {
      right.check();
    }
  }
}

function minus(a,b) { return a-b };
function check_minus(a,b) { return a-b };
function mod(a,b) { return a%b };
%PrepareFunctionForOptimization(mod);
function check_mod(a,b) { return a%b };

test(minus,check_minus,1,2);

test(minus,check_minus,1<<30,1);

test(minus,check_minus,1,1<<30);

test(minus,check_minus,1<<30,-(1<<30));


test(minus,check_minus,1,1.4);
test(minus,check_minus,1.3,4);
test(minus,check_minus,1.3,1.4);
test(minus,check_minus,1,2);
test(minus,check_minus,1,undefined);
test(minus,check_minus,1,2);
test(minus,check_minus,1,true);
test(minus,check_minus,1,2);
test(minus,check_minus,1,null);
test(minus,check_minus,1,2);
test(minus,check_minus,1,"");
test(minus,check_minus,1,2);


test(minus,check_minus,{},1,1);

test(minus,check_minus,1,{},2);

test(minus,check_minus,{},{},1);

test(minus,check_minus,1,2);


test(mod,check_mod,1,2);
%OptimizeFunctionOnNextCall(mod);
test(mod,check_mod,1,2);

test(mod,check_mod,1<<30,1);
%PrepareFunctionForOptimization(mod);
%OptimizeFunctionOnNextCall(mod);
test(mod,check_mod,1<<30,1);
test(mod,check_mod,1,1<<30);
%PrepareFunctionForOptimization(mod);
%OptimizeFunctionOnNextCall(mod);
test(mod,check_mod,1,1<<30);
test(mod,check_mod,1<<30,-(1<<30));
%PrepareFunctionForOptimization(mod);
%OptimizeFunctionOnNextCall(mod);
test(mod,check_mod,1<<30,-(1<<30));

test(mod,check_mod,1,{},2);
%PrepareFunctionForOptimization(mod);
%OptimizeFunctionOnNextCall(mod);
test(mod,check_mod,1,{},2);

test(mod,check_mod,1,2);



function t1(a, b) {return a-b}
print(t1(1,2), 1-2);
print(t1(2,true), 2-1);
print(t1(false,2), 0-2);
print(t1(1,2.4), 1-2.4);
print(t1(1.3,2.4), 1.3-2.4);
print(t1(true,2.4), 1-2.4);
print(t1(1,undefined), 1-NaN);
print(t1(1,1<<30), 1-(1<<30));
print(t1(1,2), 1-2);

function t2(a, b) {return a/b}
print(t2(1,2), 1/2);
print(t2(null,2), 0/2);
print(t2(null,-2), 0/-2);
print(t2(2,null), 2/0);
print(t2(-2,null), -2/0);
print(t2(1,2.4), 1/2.4);
print(t2(1.3,2.4), 1.3/2.4);
print(t2(null,2.4), 0/2.4);
print(t2(1.3,null), 1.3/0);
print(t2(undefined,2), NaN/2);
print(t2(1,1<<30), 1/(1<<30));
print(t2(1,2), 1/2);



function string_add(a,i) {
  var d = [0.1, ,0.3];
  return a + d[i];
}
%PrepareFunctionForOptimization(string_add);

string_add(1.1, 0);
string_add("", 0);
%OptimizeFunctionOnNextCall(string_add);
string_add(1.1, 0);

print("undefined", string_add("", 1));
