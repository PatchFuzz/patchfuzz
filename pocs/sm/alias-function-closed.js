function f1(a, aIs,        
            b=()=>62, bIs, 
            
            c=(print(a(), aIs), print(b(), bIs),
               ()=>63),
            cIs) {
  
  print(a(), 52);
  print(b(), 53);
  print(c(), 55);

  function a() {
    return 52;
  }
  function c() {
    return 54;
  }
  function g() {
    
    print(a(), 52); 
    print(b(), 53); 
    print(c(), 55); 
  }
  
  function b() {
    return 53;
  }

  print(a(), 52); 
  print(b(), 53); 
  print(c(), 55); 

  g();
  c = ()=>72;
  print(c(), 72); 
  h();
  print(c(), 82); 

  function h() {
    print(c(), 72); 
    c = ()=>82;
    print(c(), 82); 
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
            
            b=(function() { print(a(), aIs); })(),
            
            c=function() { print(a(), 42); }) {
  function a() {
    return 52;
  }
  function g() {
    
    print(a(), 52);
  }

  print(a(), 52);
  g();
  c();
}
f2(()=>42, 42);

function f3(a, aIs,
            
            
            b=(function() { print(a(), aIs); })(),
            
            c=function() { print(a(), 42); }) {
  function a() {
    return 52;
  }

  print(a(), 52);
  c();
}
f3(()=>42, 42);

function f4(a,
            
            b=a=()=>62,
            c=(print(a(), 62)),
            e=(print(a(), 62))) {
  function a() {
    return 52;
  }
  function g() {
    
    print(a(), 52);
  }

  print(a(), 52);
  g();
}
f4(()=>42);

function f5(a, b, c, d) {
  
  print(a(), 52);
  print(b(), 53);
  print(c(), 54);
  print(d(), 55);

  function g() {
    
    
    print(a(), 52);
    print(b(), 63);
    print(c(), 54);
    print(d(), 65);
  }

  var a, b = ()=>63;
  var c, d = ()=>65;

  
  print(a(), 52);
  print(b(), 63);
  print(c(), 54);
  print(d(), 65);

  function h() {
    
    print(a(), 52);
    print(b(), 63);
    print(c(), 54);
    print(d(), 65);
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
    
    print(a(), 52);
    print(b(), 63);
    print(c(), 54);
    print(d(), 65);
  }

  
  print(a(), 52);
  print(b(), 63);
  print(c(), 54);
  print(d(), 65);
  g();
  h();
  i();
}
f5(()=>42, ()=>43, ()=>44, ()=>45);
