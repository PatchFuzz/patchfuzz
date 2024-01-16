













var a = 0;
var count = 0;
while ( function() { while (++a < 0) ; } (), a < 4) {
  while (++count < 0) ;
}
assert(count == 3);

for (a = 0, count = 0; function() { while (++a < 0) ; } (), a < 4 ; ) {
  while (++count < 0) ;
}
assert(count == 3);

a = 0;
count = 0;
switch (100) {
  default:
    while (++a < 2) ;
    break;

  case (function () { for (var a = 0; a <= 1; a++) count ++; return a; })():
    while (++a < 100) ;
    break;

  case (function () { for (var a = 0; a <= 2; a++) count ++; return a; })():
    while (++a < 100) ;
    break;

  case (function () { for (var a = 0; a <= 3; a++) count ++; return a; })():
    while (++a < 100) ;
    break;

  case (function () { for (var a = 0; a <= 4; a++) count ++; return a; })():
    while (++a < 100) ;
    break;
}

assert (count == 14);
assert (a == 2);
