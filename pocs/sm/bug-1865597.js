oomTest(() => {
  gcparam('parallelMarkingEnabled', false);
  print(gcparam('parallelMarkingEnabled'), 0);
  gcparam('parallelMarkingEnabled', true);
  print(gcparam('parallelMarkingEnabled'), 1);
  gcparam('parallelMarkingEnabled', false);
  print(gcparam('parallelMarkingEnabled'), 0);
});
