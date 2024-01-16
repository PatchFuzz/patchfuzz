function f1(a, aIs,        
            b=()=>62, bIs, 
            
            c=(assertEq(a(), aIs), assertEq(b(), bIs),
               ()=>63),
            cIs) {
  
  assertEq(a(), 52);
  assertEq(b(), 53);
  assertEq(c(), 55);

  function a() {
    return 52;
  }
  function c() {
    return 54;
  }
  function g() {
    
    assertEq(a(), 52); 
    assertEq(b(), 53); 
    assertEq(c(), 55); 
  }
  
  function b() {
    return 53;
  }

  assertEq(a(), 52); 
  assertEq(b(), 53); 
  assertEq(c(), 55); 

  g();
  c = ()=>72;
  assertEq(c(), 72); 
  h();
  assertEq(c(), 82); 

  function h() {
    assertEq(c(), 72); 
    c = ()=>82;
    assertEq(c(), 82); 
  }
  
  function c() {
    return 55;
  }
}
f1(()=>42, 42, undefined, 62, undefined, 63);
f1(()=>42, 42, undefined, 62, ()=>44, 44);
f1(()=>42, 42, ()=>43, 43, undefined, 63);
f1(()=>42, 42, ()=>43, 43, ()=>44, 44);

function f2(a, aIs,
            
            b=(function() { assertEq(a(), aIs); })(),
            
            c=function() { assertEq(a(), 42); }) {
  function a() {
    return 52;
  }
  function g() {
    
    assertEq(a(), 52);
  }

  assertEq(a(), 52);
  g();
  c();
}
f2(()=>42, 42);

function f3(a, aIs,
            
            
            b=(function() { assertEq(a(), aIs); })(),
            
            c=function() { assertEq(a(), 42); }) {
  function a() {
    return 52;
  }

  assertEq(a(), 52);
  c();
}
f3(()=>42, 42);

function f4(a,
            
            b=a=()=>62,
            c=(assertEq(a(), 62)),
            e=(assertEq(a(), 62))) {
  function a() {
    return 52;
  }
  function g() {
    
    assertEq(a(), 52);
  }

  assertEq(a(), 52);
  g();
}
f4(()=>42);

function f5(a, b, c, d) {
  
  assertEq(a(), 52);
  assertEq(b(), 53);
  assertEq(c(), 54);
  assertEq(d(), 55);

  function g() {
    
    
    assertEq(a(), 52);
    assertEq(b(), 63);
    assertEq(c(), 54);
    assertEq(d(), 65);
  }

  var a, b = ()=>63;
  var c, d = ()=>65;

  
  assertEq(a(), 52);
  assertEq(b(), 63);
  assertEq(c(), 54);
  assertEq(d(), 65);

  function h() {
    
    assertEq(a(), 52);
    assertEq(b(), 63);
    assertEq(c(), 54);
    assertEq(d(), 65);
  }
  function a() {
    return 52;
  }
  function b() {
    return 53;
  }
  function c() {
    return 54;
  }
  function d() {
    return 55;
  }
  function i() {
    
    assertEq(a(), 52);
    assertEq(b(), 63);
    assertEq(c(), 54);
    assertEq(d(), 65);
  }

  
  assertEq(a(), 52);
  assertEq(b(), 63);
  assertEq(c(), 54);
  assertEq(d(), 65);
  g();
  h();
  i();
}
f5(()=>42, ()=>43, ()=>44, ()=>45);
