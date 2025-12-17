var True = t => f => t;
var False = t => f => f;
var bool_to_str = b => b("True")("False");
var And = a => b => a(b)(a);
var Or = a => b => a(a)(b);

print(And(True)(True), True);
print(And(True)(False), False);
print(And(False)(True), False);
print(And(False)(False), False);

print(Or(True)(True), True);
print(Or(True)(False), True);
print(Or(False)(True), True);
print(Or(False)(False), False);
