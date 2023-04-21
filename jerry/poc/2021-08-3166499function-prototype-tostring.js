













print(Math.cos.toString() === "function () { [native code] }");

var has_toString = none.toString() != "function () {  }"

function check(f, expected)
{
  print(f.toString() === (has_toString ? expected : "function () {  }"))
}

function none() { return 1; }
check (none, "function none() { return 1; }")
print(none.bind({}).toString() === "function () { [native code] }")

function single(b) { return 1; }
check (single, "function single(b) { return 1; }")
print(single.bind({}).toString() === "function () { [native code] }")

function multiple(a,b) { return 1; }
check (multiple, "function multiple(a,b) { return 1; }")
print(multiple.bind({}).toString() === "function () { [native code] }")

function lots(a,b,c,d,e,f,g,h,i,j,k) { return 1; }
check (lots, "function lots(a,b,c,d,e,f,g,h,i,j,k) { return 1; }")
print(lots.bind({}).toString() === "function () { [native code] }")
function check() {}

if (check.toString() !== "function () {  }")
{
  var a, b, o, c, f;

  

  a = 6; function f1(a,b=1,c) { return a  + b + c } b = 7
  print(f1.toString() === "function f1(a,b=1,c) { return a  + b + c }")

  a = 6; function * f2(a,b,c=1) {
    function x() {}
  } b = 7
  print(f2.toString() === "function * f2(a,b,c=1) {\n    function x() {}\n  }")

  a = 6;async  function   f3 ( a , b , c ) { } b = 7
  print(f3.toString() === "async  function   f3 ( a , b , c ) { }")

  a = 6;asyncfunction*f4(a,b,c){} b = 7
  print(f4.toString() === "asyncfunction*f4(a,b,c){}")

  

  o = {f(a) { return a }}
  print(o.f.toString() === "f(a) { return a }")

  o = {f:function(a){}}
  print(o.f.toString() === "function(a){}")

  o = { [function(){ return 'f' }()] (a = function() {}) {} }
  print(o.f.toString() === "[function(){ return 'f' }()] (a = function() {}) {}")

  o = {*  f(a) {}}
  print(o.f.toString() === "*  f(a) {}")

  o = {*[function(){ return 'f' }()](a) {}}
  print(o.f.toString() === "*[function(){ return 'f' }()](a) {}")

  o = {asyncf(a) {}}
  print(o.f.toString() === "asyncf(a) {}")

  o = {async   [function(){ return 'f' }()](a) {}}
  print(o.f.toString() === "async   [function(){ return 'f' }()](a) {}")

  o = {a:1,async*f(a) {},b:1}
  print(o.f.toString() === "async*f(a) {}")

  o = {async *
       [function(){ return 'f' }()](a) {}}
  print(o.f.toString() === "async *

  o = { get a() {return6} }
  print(Object.getOwnPropertyDescriptor(o, "a").get.toString() === "get a() {return6}")

  o = { get[function(){ return 'a' }()](){} }
  print(Object.getOwnPropertyDescriptor(o, "a").get.toString() === "get[function(){ return 'a' }()](){}")

  o = { set a(v) {} }
  print(Object.getOwnPropertyDescriptor(o, "a").set.toString() === "set a(v) {}")

  o = {set[function(){ return 'a' }()](v) {}}
  print(Object.getOwnPropertyDescriptor(o, "a").set.toString() === "set[function(){ return 'a' }()](v) {}")

  

  c = class { staticf() {} }
  print(c.f.toString() === "f() {}")

  c = class { static[function(){ return 'f' }()]() {} }
  print(c.f.toString() === "[function(){ return 'f' }()]() {}")

  c = class { static    *f() {} }
  print(c.f.toString() === "*f() {}")

  c = class {static *  [function(){ return 'f' }()](a=6){}}
  print(c.f.toString() === "*  [function(){ return 'f' }()](a=6){}")

  c = class { staticasync f() {} }
  print(c.f.toString() === "async f() {}")

  c = class {static   async[function(){ return 'f' }()]() {}}
  print(c.f.toString() === "async[function(){ return 'f' }()]() {}")

  c = class { static async*f() {}}
  print(c.f.toString() === "async*f() {}")

  c = class { static async*[function(){ return 'f' }()](){} }
  print(c.f.toString() === "async*[function(){ return 'f' }()](){}")

  c = class { staticgeta() {}}
  print(Object.getOwnPropertyDescriptor(c, "a").get.toString() === "geta() {}")

  c = class {static  set  a(v){}}
  print(Object.getOwnPropertyDescriptor(c, "a").set.toString() === "set  a(v){}")

  c = class { static   get[function(){ return 'a' }()](){} }
  print(Object.getOwnPropertyDescriptor(c, "a").get.toString() === "get[function(){ return 'a' }()](){}")

  c = class { static   set[function(){ return 'a' }()](v){}
            }
  print(Object.getOwnPropertyDescriptor(c, "a").set.toString() === "set[function(){ return 'a' }()](v){}")

  

  o = Object.getPrototypeOf(new class {f() {}})
  print(o.f.toString() === "f() {}")

  o = Object.getPrototypeOf(new class {[function(){ return 'f' }()](){}})
  print(o.f.toString() === "[function(){ return 'f' }()](){}")

  o = Object.getPrototypeOf(new class {  *   f() {}  })
  print(o.f.toString() === "*   f() {}")

  o = Object.getPrototypeOf(new class {  *  [function(){ return 'f' }()](){}  })
  print(o.f.toString() === "*  [function(){ return 'f' }()](){}")

  o = Object.getPrototypeOf(new class {async f() {}})
  print(o.f.toString() === "async f() {}")

  o = Object.getPrototypeOf(new class {async[function(){ return 'f' }()](){}})
  print(o.f.toString() === "async[function(){ return 'f' }()](){}")

  o = Object.getPrototypeOf(new class {geta() {}})
  print(Object.getOwnPropertyDescriptor(o, "a").get.toString() === "geta() {}")

  o = Object.getPrototypeOf(new class { set  a(v){} })
  print(Object.getOwnPropertyDescriptor(o, "a").set.toString() === "set  a(v){}")

  o = Object.getPrototypeOf(new class {get[function(){ return 'a' }()]() {}})
  print(Object.getOwnPropertyDescriptor(o, "a").get.toString() === "get[function(){ return 'a' }()]() {}")

  o = Object.getPrototypeOf(new class {  set[function(){ return 'a' }()]( v ){}  })
  print(Object.getOwnPropertyDescriptor(o, "a").set.toString() === "set[function(){ return 'a' }()]( v ){}")

  
  f = Function("a,b", "return a + b")
  print(f.toString() === "function anonymous(a,b\n) {\nreturn a + b\n}")

  f = Function("", "")
  print(f.toString() === "function anonymous(\n) {\n\n}")

  f = function*(){}.constructor("a,b", "c", "yield a; return b + c")
  print(f.toString() === "function* anonymous(a,b,c\n) {\nyield a; return b + c\n}")

  f = async function(){}.constructor("a", "return a + 'x'")
  print(f.toString() === "async function anonymous(a\n) {\nreturn a + 'x'\n}")

  f = async function*(){}.constructor("a=3", "return a")
  print(f.toString() === "async function* anonymous(a=3\n) {\nreturn a\n}")

  f = Function("a = function(x) { return x + 3 }", "return a")
  print(f().toString() === "function(x) { return x + 3 }")

  f = Function("return function(x) { return x + 3 }")
  print(f().toString() === "function(x) { return x + 3 }")

  
  f = x => x + 1
  print(f.toString() === "x => x + 1")

  f =x => { return x + 1 }
  print(f.toString() === "x => { return x + 1 }")

  f = () => 'x' 
    + y
  print(f.toString() === "() => 'x' 

  f =  async  x  =>  x + 1
  print(f.toString() === "async  x  =>  x + 1")

  f =async (x,y)=>null
  print(f.toString() === "async (x,y)=>null")
}
