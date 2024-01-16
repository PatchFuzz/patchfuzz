


























try {
  try {
    var N = 100*1000;
    var array = Array(N);
    for (var i = 0; i != N; ++i)
      array[i] = i;
  } catch(ex) {}
  array.unshift('Kibo');
} catch(ex) {}
