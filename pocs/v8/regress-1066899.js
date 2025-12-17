function Crash() {
  for (var key in [0]) {
    try { } finally { continue; }
  }
}

Crash();
