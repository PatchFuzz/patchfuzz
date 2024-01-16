



var tests = [
  
  'var obj = {a : 10, ret : function(params) {void a = 42;}}',
  
  'var a = null; void a = 42',
  
  'var a = true; void a = 42',
  'var a = false; void a = 42',
  
  'var a = 5; void a = 42',
  'var a = 1.23e4; void a = 42',
  
  'var a = 0b11; void a = 42',
  'var a = 0B11; void a = 42',
  
  'var a = 0o66; void a = 42',
  'var a = 0O66; void a = 42',
  
  'var a = 0xFF; void a = 42',
  'var a = 0xFF; void a = 42',
  
  'var a = "foo"; void a = 42',
  'var a = "\\n"; void a = 42',
  'var a = "\\uFFFF"; void a = 42',
  'var a ="\\u{F}"; void a = 42',
  
  'var a = []; void a = 42',
  'var a = [1,a=5]; void a = 42',
  
  'var a = {}; void a = 42',
  'var a = {"foo" : 5}; void a = 42',
  'var a = {5 : 5}; void a = 42',
  'var a = {a : 5}; void a = 42',
  'var a = {[key] : 5}; void a = 42',
  'var a = {func(){}}; void a = 42',
  'var a = {get(){}}; void a = 42',
  'var a = {set(prop){}}; void a = 42',
  'var a = {*func(){}}; void a = 42',
  
  'class a {}; void a = 42',
  'class a {}; class b extends a {}; void b = 42',
  'class a {function(){}}; void a = 42',
  
  'function *a (){}; void a = 42',
  
  'var a = /(?:)/; void a = 42',
  'var a = /a/; void a = 42',
  'var a = /[a]/; void a = 42',
  'var a = /a/g; void a = 42',
  
  'var a = ``; void a = 42',
  'a = 5; var b = (`${a}`); void b = 42',
  'var a = `foo`; void a = 42',
  'var a = `\\uFFFF`; void a = 42',
  
  'var a = [1,2,3]; void a[0] = 42',
  'var a = {0:12}; void a[0] = 42',
  'var a = {"foo":12}; void a.foo = 42',
  'var a = {func: function(){}}; void a.func = 42',
  
  'class a {constructor() {Object.defineProperty(this, \'foo\', {configurable:true, writable:true, value:1}); }} ' +
  'class b extends a {constructor() {super();} foo() {void super.foo = 42;}}',
  
  'function a() {}; var b = new a(); void b = 42',
  'class g {constructor() {Object.defineProperty(this, \'foo\', {configurable:true, writable:true, value:1}); }}; ' +
  'var a = new g(); void a = 42',
  'class a {}; var n = new a(); void a = 42',
  
  'function a(prop){return prop}; var b = a(12); void b = 42',
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
    