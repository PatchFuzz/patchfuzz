



assertThrows(function() {
  const p = new Proxy({}, {});
  (new Set).add(p);  
  null[p] = 0;
});
