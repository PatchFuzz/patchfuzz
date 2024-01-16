






























function replacer(key, value) {
  return value === 42 ? new Boolean(false) : value;
}

assertEquals("[false]", JSON.stringify([42], replacer));
