let a = wrapWithProto(new Int8Array([1, 3, 5, 6, 9]), new Int8Array());

print([...a].toString(), "1,3,5,6,9");
print(a.every(e => e < 100), true);
print(a.filter(e => e % 2 == 1).toString(), "1,3,5,9");
print(a.find(e => e > 3), 5);
print(a.findIndex(e => e % 2 == 0), 3);
print(a.map(e => e * 10).toString(), "10,30,50,60,90");
print(a.reduce((a, b) => a + b, ""), "13569");
print(a.reduceRight((acc, e) => "(" + e + acc + ")", ""), "(1(3(5(6(9)))))");
print(a.some(e => e % 2 == 0), true);

let s = "";
print(a.forEach(e => s += e), undefined);
print(s, "13569");

a.sort((a, b) => b - a);
print(a.toString(), "9,6,5,3,1");

