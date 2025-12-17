gcparam('generateMissingAllocSites', 1);
gcparam('minNurseryBytes', 1024 * 1024);
gcparam('maxNurseryBytes', 1024 * 1024);
gc();

let a = [];

for (let i = 0; i < 10000; i++) {
  let n = new Number(i);
  let s = n.toString();
  let r = s + s;
  a.push([n, s, r]);
}

gcparam('generateMissingAllocSites', 0);
