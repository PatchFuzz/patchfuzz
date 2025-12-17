function create() {
  const obj = {};
  for(var i = 0; i < 700000; ++i) {
    obj['prop' + i] = 0;
  }
  obj['ref'] = 3;
  print(3, obj['ref']);
  return obj;
}

const obj = create();
print(3, obj['ref']);
