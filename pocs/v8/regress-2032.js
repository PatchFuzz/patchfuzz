print(/[@-A]/i.test("a"));
print(/[@-A]/i.test("A"));
print(/[@-A]/i.test("@"));

print(/[@-A]/.test("a"));
print(/[@-A]/.test("A"));
print(/[@-A]/.test("@"));

print(/[¿-À]/i.test('¾'));
print(/[¿-À]/i.test('¿'));
print(/[¿-À]/i.test('À'));
print(/[¿-À]/i.test('à'));
print(/[¿-À]/i.test('á'));
print(/[¿-À]/i.test('Á'));

print(/[¿-À]/.test('¾'));
print(/[¿-À]/.test('¿'));
print(/[¿-À]/.test('À'));
print(/[¿-À]/.test('à'));
print(/[¿-À]/.test('á'));
print(/[¿-À]/.test('á'));
print(/[¿-À]/i.test('Á'));

print(/[Ö-×]/i.test('Õ'));
print(/[Ö-×]/i.test('Ö'));
print(/[Ö-×]/i.test('ö'));
print(/[Ö-×]/i.test('×'));
print(/[Ö-×]/i.test('Ø'));

print(/[Ö-×]/.test('Õ'));
print(/[Ö-×]/.test('Ö'));
print(/[Ö-×]/.test('ö'));
print(/[Ö-×]/.test('×'));
print(/[Ö-×]/.test('Ø'));
