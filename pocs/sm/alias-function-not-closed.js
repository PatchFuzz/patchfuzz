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
  function b() {
    return 53;
  }
  function c() {
    return 54;
  }

  print(a(), 52); 
  print(b(), 53); 
  print(c(), 55); 

  c = ()=>72;
  print(c(), 72); 

  
  function c() {
    return 55;
  }
}
f1(()=>42, 42, undefined, 62, undefined, 63);
f1(()=>42, 42, undefined, 62, ()=>44, 44);
f1(()=>42, 42, ()=>43, 43, undefined, 63);
f1(()=>42, 42, ()=>43, 43, ()=>44, 44);

function f2(a,
            
            b=a=()=>62,
            c=(print(a(), 62)),
            e=(print(a(), 62))) {
  function a() {
    return 52;
  }

  print(a(), 52);
}
f2(()=>42);

function f3(a, b, c, d) {
  
  print(a(), 52);
  print(b(), 53);
  print(c(), 54);
  print(d(), 55);

  var a, b = ()=>63;
  var c, d = ()=>65;

  
  print(a(), 52);
  print(b(), 63);
  print(c(), 54);
  print(d(), 65);

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

  
  print(a(), 52);
  print(b(), 63);
  print(c(), 54);
  print(d(), 65);
}
f3(()=>42, ()=>43, ()=>44, ()=>45);
