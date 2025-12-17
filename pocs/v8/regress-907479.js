'use strict';

{
  const x = [42];
  x.splice(0, 0, 23);
  print([23, 42], x);
  x.length++;
  print([23, 42, ,], x);
  print(x.hasOwnProperty(2));
}

{
  const x = [4.2];
  x.splice(0, 0, 23);
  print([23, 4.2], x);
  x.length++;
  print([23, 4.2, ,], x);
  print(x.hasOwnProperty(2));
}
