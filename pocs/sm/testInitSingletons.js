var x = [1,2.5,"three",true,false,null,[1,2,3],{a:0,b:1}];
print(String(x), "1,2.5,three,true,false,,1,2,3,[object Object]");
print(x.length, 8);
print(x[7].a, 0);
print(x[7].b, 1);

var y = {a:0,a:1,a:2};
print(y.a,2);

var z = {a:0,b:1,__proto__:{c:2,d:3}};
print(z.a,0);
print(z.b,1);
print(z.c,2);
print(z.d,3);

function foo() {
  var q = eval("[1,2,3]");
  var r = eval("[1,2,3]");
  print(q === r, false);
}
foo();

var q = {0x4fffffff: 0, 0x7fffffff: 1, 0xffffffff: 2};
print(q[1342177279], 0);
print(q[2147483647], 1);
print(q[4294967295], 2);

try {
  [1,2,3,{a:0,b:1}].foo.bar;
} catch (e) {
  print(/(.foo is|"bar" of) undefined/.test(e.message), true);
}

var a = [1 + 1, 3 * 2, 6 - 5, 14 % 6, 15 / 5, 1 << 3, 
         8 >> 2, 5 | 2, 5 ^ 3, ~3, -3,"a" + "b",  !true, !false];
print(String(a), "2,6,1,2,3,8,2,7,6,-4,-3,ab,false,true");
print(a.length, 14);

var b = {
    a: 1 + 1,
    b: 3 * 2,
    c: 6 - 5,
    d: 14 % 6,
    e: 15 / 5,
    f: 1 << 3,
    g: 8 >> 2,
    h: 5 | 2,
    i: 5 ^ 3,
    j: ~3,
    k: -3,
    l: "a" + "b",
    m: !true,
    n: !false,
}

var char = "a".charCodeAt(0);
for (var i = 0; i < a.length; i++) {
    print(b[String.fromCharCode(char)], a[i]);
    char++;
}
