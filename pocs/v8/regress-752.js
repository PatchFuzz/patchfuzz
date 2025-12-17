function replacer(key, value) {
  return value === 42 ? new Boolean(false) : value;
}

print("[false]", JSON.stringify([42], replacer));
