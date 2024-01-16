



var tests = [
  
  'var obj = {a : 10, ret : function(params) {delete a = 42;}}',
  
  'var a = null; delete a = 42',
  
  'var a = true; delete a = 42',
  'var a = false; delete a = 42',
  
  'var a = 5; delete a = 42',
  'var a = 1.23e4; delete a = 42',
  
  'var a = 0b11; delete a = 42',
  'var a = 0B11; delete a = 42',
  
  'var a = 0o66; delete a = 42',
  'var a = 0O66; delete a = 42',
  
  'var a = 0xFF; delete a = 42',
  'var a = 0xFF; delete a = 42',
  
  'var a = "foo"; delete a = 42',
  'var a = "\\n"; delete a = 42',
  'var a = "\\uFFFF"; delete a = 42',
  'var a ="\\u{F}"; delete a = 42',
  
  'var a = []; delete a = 42',
  'var a = [1,a=5]; delete a = 42',
  
  'var a = {}; delete a = 42',
  'var a = {"foo" : 5}; delete a = 42',
  'var a = {5 : 5}; delete a = 42',
  'var a = {a : 5}; delete a = 42',
  'var a = {[key] : 5}; delete a = 42',
  'var a = {func(){}}; delete a = 42',
  'var a = {get(){}}; delete a = 42',
  'var a = {set(prop){}}; delete a = 42',
  'var a = {*func(){}}; delete a = 42',
  
  'class a {}; delete a = 42',
  'class a {}; class b extends a {}; delete b = 42',
  'class a {function(){}}; delete a = 42',
  
  'function *a (){}; delete a = 42',
  
  'var a = /(?:)/; delete a = 42',
  'var a = /a/; delete a = 42',
  'var a = /[a]/; delete a = 42',
  'var a = /a/g; delete a = 42',
  
  'var a = ``; delete a = 42',
  'a = 5; var b = (`${a}`); delete b = 42',
  'var a = `foo`; delete a = 42',
  'var a = `\\uFFFF`; delete a = 42',
  
  'var a = [1,2,3]; delete a[0] = 42',
  'var a = {0:12}; delete a[0] = 42',
  'var a = {"foo":12}; delete a.foo = 42',
  'var a = {func: function(){}}; delete a.func = 42',
  
  'class a {constructor() {Object.defineProperty(this, \'foo\', {configurable:true, writable:true, value:1}); }} ' +
  'class b extends a {constructor() {super();} foo() {delete super.foo = 42;}}',
  
  'function a() {}; var b = new a(); delete b = 42',
  'class g {constructor() {Object.defineProperty(this, \'foo\', {configurable:true, writable:true, value:1}); }}; ' +
  'var a = new g(); delete a = 42',
  'class a {}; var n = new a(); delete a = 42',
  
  'function a(prop){return prop}; var b = a(12); delete b = 42',
];

for (var i = 0; i < tests.length; i++)
{
  try {
    eval(tests[i]);
    assert(false);
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
}
