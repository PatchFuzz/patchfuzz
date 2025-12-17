function push_a_lot(arr) {
  for (var i = 0; i < 2e4; i++) {
    arr.push(i);
  }
  return arr;
}

__v_13 = push_a_lot([]);
