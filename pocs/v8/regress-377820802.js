print(/(?-i:a)|b/i.test("B"));
print(/(?-i:a)|b/i.test("B"));

let r1 = /(?i:a)|b/;
print(r1.test('B'));

let r2 = /(?i:c)|d/;
for (var i = 0; i < 100; i++) { r2.test('C') }
print(r2.test('D'));
