


var tests = [
  
  'this < this = 42',
  'this < null = 42',
  'this < undefined = 42',
  'this < true = 42',
  'this < 12 = 42',
  'this < "foo" = 42',
  'this < [12] = 42',
  'this < class a {} = 42',
  'this < function a(){} = 42',
  'this < /[a]/ = 42',
  'this < `foo` = 42',
  'this <= this = 42',
  'this <= null = 42',
  'this <= undefined = 42',
  'this <= true = 42',
  'this <= 12 = 42',
  'this <= "foo" = 42',
  'this <= [12] = 42',
  'this <= class a {} = 42',
  'this <= function a(){} = 42',
  'this <= /[a]/ = 42',
  'this <= `foo` = 42',
  
  'undefined < null = 42',
  'undefined < undefined = 42',
  'undefined < true = 42',
  'undefined < 12 = 42',
  'undefined < "foo" = 42',
  'undefined < [12] = 42',
  'undefined < class a {} = 42',
  'undefined < function a(){} = 42',
  'undefined < /[a]/ = 42',
  'undefined < `foo` = 42',
  'undefined <= null = 42',
  'undefined <= undefined = 42',
  'undefined <= true = 42',
  'undefined <= 12 = 42',
  'undefined <= "foo" = 42',
  'undefined <= [12] = 42',
  'undefined <= class a {} = 42',
  'undefined <= function a(){} = 42',
  'undefined <= /[a]/ = 42',
  'undefined <= `foo` = 42',
  
  'null < null = 42',
  'null < true = 42',
  'null < 12 = 42',
  'null < "foo" = 42',
  'null < [12] = 42',
  'null < class a {} = 42',
  'null < function a(){} = 42',
  'null < /[a]/ = 42',
  'null < `foo` = 42',
  'null <= null = 42',
  'null <= true = 42',
  'null <= 12 = 42',
  'null <= "foo" = 42',
  'null <= [12] = 42',
  'null <= class a {} = 42',
  'null <= function a(){} = 42',
  'null <= /[a]/ = 42',
  'null <= `foo` = 42',
  
  'true < true = 42',
  'true < 12 = 42',
  'true < "foo" = 42',
  'true < [12] = 42',
  'true < class a {} = 42',
  'true < function a(){} = 42',
  'true < /[a]/ = 42',
  'true < `foo` = 42',
  'true <= true = 42',
  'true <= 12 = 42',
  'true <= "foo" = 42',
  'true <= [12] = 42',
  'true <= class a {} = 42',
  'true <= function a(){} = 42',
  'true <= /[a]/ = 42',
  'true <= `foo` = 42',
  
  '5 < 12 = 42',
  '5 < "foo" = 42',
  '5 < [12] = 42',
  '5 < class a {} = 42',
  '5 < function a(){} = 42',
  '5 < /[a]/ = 42',
  '5 < `foo` = 42',
  '5 <= 12 = 42',
  '5 <= "foo" = 42',
  '5 <= [12] = 42',
  '5 <= class a {} = 42',
  '5 <= function a(){} = 42',
  '5 <= /[a]/ = 42',
  '5 <= `foo` = 42',
  
  '"foo" < "foo" = 42',
  '"foo" < [12] = 42',
  '"foo" < class a {} = 42',
  '"foo" < function a(){} = 42',
  '"foo" < /[a]/ = 42',
  '"foo" < `foo` = 42',
  '"foo" <= "foo" = 42',
  '"foo" <= [12] = 42',
  '"foo" <= class a {} = 42',
  '"foo" <= function a(){} = 42',
  '"foo" <= /[a]/ = 42',
  '"foo" <= `foo` = 42',
  
  '[12] < [12] = 42',
  '[12] < class a {} = 42',
  '[12] < function a(){} = 42',
  '[12] < /[a]/ = 42',
  '[12] < `foo` = 42',
  '[12] <= [12] = 42',
  '[12] <= class a {} = 42',
  '[12] <= function a(){} = 42',
  '[12] <= /[a]/ = 42',
  '[12] <= `foo` = 42',
  
  'this < {} = 42',
  'this <= {} = 42',
  'undefined < {} = 42',
  'undefined <= {} = 42',
  'null < {} = 42',
  'null <= {} = 42',
  'true < {} = 42',
  'true <= {} = 42',
  '5 < {} = 42',
  '5 <= {} = 42',
  '"foo" < {} = 42',
  '"foo" <= {} = 42',
  '[12] < {} = 42',
  '[12] <= {} = 42',
  '/[a]/ < {}  = 42',
  '`foo` < {}  = 42',
  '/[a]/ <= {}  = 42',
  '`foo` <= {}  = 42',
  
  '/[a]/ < class a{} = 42',
  '/[a]/ < function a(){} = 42',
  '/[a]/ < /[a]/ = 42',
  '/[a]/ < `foo` = 42',
  '/[a]/ <= class a{} = 42',
  '/[a]/ <= function a(){} = 42',
  '/[a]/ <= /[a]/ = 42',
  '/[a]/ <= `foo` = 42',
  
  '`foo` < class a{} = 42',
  '`foo` < function a(){} = 42',
  '`foo` < `foo` = 42',
  '`foo` <= class a{} = 42',
  '`foo` <= function a(){} = 42',
  '`foo` <= `foo` = 42',
  
  '6 * !4 + void 4 <="foo" << 6 * 6 + !4 / 7 = 42',
  '+/[A]/ % !4 + typeof [] << 3 <= "foo" << 6 / 6 << !4 / 7 = 42',
  '~12 < !/[A-Z]/ * 12 - void [] >> 1 + class a {} = 42',
  'var a = [1,2,3]; +a[0] * !a[1] + "foo" >> a[2] <= typeof a[1] + /foo/ * 12 = 42',
  'var a = [1,2,3]; 0 / ++a[1] - a[2] << !12 < void a[1] % 12 = 42',
  'function a(){}; var b = new a(); b >> 12 <= [1,2] / !23 + !a = 42',
  'var a = {"foo": function(){}}; 12 * ~5 >> "foo" + [] < void "foo" % 12 <= ++a.foo = 42',
  'var a = {"foo": function(){}}; [] < "foo" % 12 << typeof a.foo() + 8 = 42',
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