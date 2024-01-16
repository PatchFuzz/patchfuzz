





!function() {
  const s0 = "external string turned into two byte";
  const s1 = s0.substring(1);
  externalizeString(s0, true);

  s1.toLowerCase();
}();
