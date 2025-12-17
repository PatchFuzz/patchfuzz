function print(thunk) {
  let threw = false;
  try {
    thunk();
  } catch (e) {
    threw = true;
  }
  print(threw, true);
}

let initialHelperThreads = helperThreadCount();


gcparam("helperThreadRatio", 100);
for (let i = 1; i <= initialHelperThreads; i++) {
  gcparam("maxHelperThreads", i);
  print(gcparam("helperThreadCount"), i);
}


gcparam("maxHelperThreads", 1000);
for (let i = 25; i <= 400; i *= 2) {
  gcparam("helperThreadRatio", i);
  let ratio = i / 100;
  let expected = Math.max(Math.floor(initialHelperThreads * ratio), 1);
  print(gcparam("helperThreadCount"), expected);
  print(helperThreadCount(), Math.max(initialHelperThreads, expected));
}


print(() => gcparam("helperThreadRatio", 0));
print(() => gcparam("maxHelperThreads", 0));
