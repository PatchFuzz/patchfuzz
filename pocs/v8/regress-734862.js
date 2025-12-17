function catcher(o, p) {
  try { o[p]; } catch (e) { return e; }
  throw p;
}

print(catcher(null, 'foo') instanceof TypeError);
print(catcher(void 0, 'foo') instanceof TypeError);
print(catcher(null, 123) instanceof TypeError);
print(catcher(void 0, 123) instanceof TypeError);
