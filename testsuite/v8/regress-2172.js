


























for (var i = 0; i < 10000; i++){
  (i + "\0").split(/(.)\1/i);
}

for (var i = 0; i < 10000; i++){
  (i + "\u1234\0").split(/(.)\1/i);
}
