class B { }
class C extends B {
  #field = 'test';
}
for (let i = 0; i < 10000; i++) {
  new C();
}
try { } catch(e) { }
