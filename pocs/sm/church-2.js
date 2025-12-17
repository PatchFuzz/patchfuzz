var Zero = f => x => x;
var Succ = n => f => x => n(f)(f(x));
var Add = a => b => f => x => a(f)(b(f)(x));
var Mul = a => b => f => x => a(b(f))(x);
var Exp = a => b => b(a);

var n = f => f(k => k + 1)(0);

print(n(Zero), 0);
print(n(Succ(Zero)), 1);
print(n(Succ(Succ(Zero))), 2);

var Three = Succ(Succ(Succ(Zero)));
var Five = Succ(Succ(Three));
print(n(Add(Three)(Five)), 8);
print(n(Mul(Three)(Five)), 15);
print(n(Exp(Three)(Five)), 243);
