

function allocateSomeStuff() {
  return {a: "a fish", b: [1, 2, 3]};
}

oomTest(() => {
  
  gcparam('minNurseryBytes', 256 * 1024);
  gcparam('maxNurseryBytes', 256 * 1024);
  allocateSomeStuff();
  minorgc();

  
  
  gcparam('maxNurseryBytes', 1024 * 1024);
  gcparam('minNurseryBytes', 1024 * 1024);
  allocateSomeStuff();
  minorgc();
});

