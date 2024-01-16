


























function store_generator(compare) {
  return function(a,i,v) {
    a[i] = v;
    assertEquals(compare, a[i]);
    assertEquals(compare, a[i]);
  }
}

f = store_generator(5);
a = [0,0,0];
f(a,0,5);
a = [0,0,0];
f(a,1,5);
a = [0,0,0];
f(a,2,5);

f = store_generator(5.5);
a = new Float32Array(5);
f(a,0,5.5);
f(a,1,5.5);
f(a,2,5.5);
