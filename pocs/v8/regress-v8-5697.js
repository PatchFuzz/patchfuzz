function load(o) {
  return o.x;
};
for (var x = 0; x < 1000; ++x) {
  %PrepareFunctionForOptimization(load);
  load({x});
  load({x});
  %OptimizeFunctionOnNextCall(load);
  try {
    load();
  } catch (e) {
  }
}

print(load);

function store(o) {
  o.x = -1;
};
for (var x = 0; x < 1000; ++x) {
  %PrepareFunctionForOptimization(store);
  store({x});
  store({x});
  %OptimizeFunctionOnNextCall(store);
  try {
    store();
  } catch (e) {
  }
}

print(store);
