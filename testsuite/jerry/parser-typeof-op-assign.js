



var tests = [
  
  'var obj = {a : 10, ret : function(params) {typeof a = 42;}}',
  
  'var a = null; typeof a = 42',
  
  'var a = true; typeof a = 42',
  'var a = false; typeof a = 42',
  
  'var a = 5; typeof a = 42',
  'var a = 1.23e4; typeof a = 42',
  
  'var a = 0b11; typeof a = 42',
  'var a = 0B11; typeof a = 42',
  
  'var a = 0o66; typeof a = 42',
  'var a = 0O66; typeof a = 42',
  
  'var a = 0xFF; typeof a = 42',
  'var a = 0xFF; typeof a = 42',
  
  'var a = "foo"; typeof a = 42',
  'var a = "\\n"; typeof a = 42',
  'var a = "\\uFFFF"; typeof a = 42',
  'var a ="\\u{F}"; typeof a = 42',
  
  'var a = []; typeof a = 42',
  'var a = [1,a=5]; typeof a = 42',
  
  'var a = {}; typeof a = 42',
  'var a = {"foo" : 5}; typeof a = 42',
  'var a = {5 : 5}; typeof a = 42',
  'var a = {a : 5}; typeof a = 42',
  'var a = {[key] : 5}; typeof a = 42',
  'var a = {func(){}}; typeof a = 42',
  'var a = {get(){}}; typeof a = 42',
  'var a = {set(prop){}}; typeof a = 42',
  'var a = {*func(){}}; typeof a = 42',
  
  'class a {}; typeof a = 42',
  'class a {}; class b extends a {}; typeof b = 42',
  'class a {function(){}}; typeof a = 42',
  
  'function *a (){}; typeof a = 42',
  
  'var a = /(?:)/; typeof a = 42',
  'var a = /a/; typeof a = 42',
  'var a = /[a]/; typeof a = 42',
  'var a = /a/g; typeof a = 42',
  
  'var a = ``; typeof a = 42',
  'a = 5; var b = (`${a}`); typeof b = 42',
  'var a = `foo`; typeof a = 42',
  'var a = `\\uFFFF`; typeof a = 42',
  
  'var a = [1,2,3]; typeof a[0] = 42',
  'var a = {0:12}; typeof a[0] = 42',
  'var a = {"foo":12}; typeof a.foo = 42',
  'var a = {func: function(){}}; typeof a.func = 42',
  
  'class a {constructor() {Object.defineProperty(this, \'foo\', {configurable:true, writable:true, value:1}); }} ' +
  'class b extends a {constructor() {super();} foo() {typeof super.foo = 42;}}',
  
  'function a() {}; var b = new a(); typeof b = 42',
  'class a {}; var n = new a(); typeof a = 42',
  'class g {constructor() {Object.defineProperty(this, \'foo\', {configurable:true, writable:true, value:1}); }}; ' +
  'var a = new g(); typeof a = 42',
  
  'function a(prop){return prop}; var b = a(12); typeof b = 42',
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
   