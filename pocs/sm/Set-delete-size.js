var s = new Set();
for (var i = 0; i < 10; i++)
    s.add(i);

for (var i = 10; i > 0; i--) {
    print(s.size, i);
    print(s.delete(i), false);
    print(s.size, i);
    print(s.delete(i - 1), true);
    print(s.size, i - 1);
    print(s.delete(i - 1), false);
    print(s.size, i - 1);
}
