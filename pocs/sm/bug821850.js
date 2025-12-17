;

m={}
Object.defineProperty(m, 'p', {value: 3});
print(function() {"use strict"; delete m.p;}, TypeError);

x = new Proxy(m, {})
print(x.p, 3);
print(function fun() {"use strict"; return delete x.p; }, TypeError);
