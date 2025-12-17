s1 = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
s1 += s1;
s1 += s1;
s1 += s1;
s1 += s1;

s0 = 'a';

function g() {
  for (var j = 0; j < 1000000; j++) {
    s0 += s1;
  }
}

try {
  g();
} catch (e) {
}

print('x', s0[10]);
