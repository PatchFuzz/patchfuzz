





























assertTrue(/[@-A]/i.test("a"));
assertTrue(/[@-A]/i.test("A"));
assertTrue(/[@-A]/i.test("@"));

assertFalse(/[@-A]/.test("a"));
assertTrue(/[@-A]/.test("A"));
assertTrue(/[@-A]/.test("@"));

assertFalse(/[¿-À]/i.test('¾'));
assertTrue(/[¿-À]/i.test('¿'));
assertTrue(/[¿-À]/i.test('À'));
assertTrue(/[¿-À]/i.test('à'));
assertFalse(/[¿-À]/i.test('á'));
assertFalse(/[¿-À]/i.test('Á'));

assertFalse(/[¿-À]/.test('¾'));
assertTrue(/[¿-À]/.test('¿'));
assertTrue(/[¿-À]/.test('À'));
assertFalse(/[¿-À]/.test('à'));
assertFalse(/[¿-À]/.test('á'));
assertFalse(/[¿-À]/.test('á'));
assertFalse(/[¿-À]/i.test('Á'));

assertFalse(/[Ö-×]/i.test('Õ'));
assertTrue(/[Ö-×]/i.test('Ö'));
assertTrue(/[Ö-×]/i.test('ö'));
assertTrue(/[Ö-×]/i.test('×'));
assertFalse(/[Ö-×]/i.test('Ø'));

assertFalse(/[Ö-×]/.test('Õ'));
assertTrue(/[Ö-×]/.test('Ö'));
assertFalse(/[Ö-×]/.test('ö'));
assertTrue(/[Ö-×]/.test('×'));
assertFalse(/[Ö-×]/.test('Ø'));
