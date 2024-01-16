




try {
  throw {toString: parseInt.call};
} catch(e) { e.toString(); }
