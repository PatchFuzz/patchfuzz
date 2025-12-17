gcparam('maxHelperThreads', 8);
gcparam('helperThreadRatio', 100);

check();

for (let i of [0, 1, 4, 8, 4, 0]) {
  gcparam('maxMarkingThreads', i);
  print(gcparam('maxMarkingThreads'), i);
  check();
}

function check() {
  print(gcparam('markingThreadCount') <= gcparam('maxMarkingThreads'), true);
  print(gcparam('markingThreadCount') < gcparam('helperThreadCount'), true);
}
