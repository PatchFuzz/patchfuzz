



function f(a) {
  a[a.length] = 1;
}

function g(a, i, v) {
  a[i] = v;
}

f([]);    
o = {};
g(o);     

o = {};   
f(o);     
