














var i = 0;
for (; i < 100; i++) {
}
assert(i == 100);


for (var j = 0; j < 100; j++) {
}
assert(j == 100);


for (i = 0; ; ) {
  if (i == 100) {
    break;
    assert(false);
  }
  i++;
}
assert(i == 100);


for (i = 0; i < 10; i++) {
  for (j = 0; j < 10; j++) {
  }
}
assert(i != 100);
assert(j != 100);
assert(i == 10);
assert(j == 10);


s = '';
for (
var i = {x: 0};

 i.x < 2
;
 i.x++

)
 {
  s += i.x;
}

assert (s === '01');


s = '';
for (
var i = {x: 0};

 i.x < 2
;

 i.x++

)
 {
  s += i.x;
}

assert (s === '01');


a = [];
for (; a[0]; ) {
  assert (false);
}
