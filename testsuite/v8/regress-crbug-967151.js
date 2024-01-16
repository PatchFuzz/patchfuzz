





__v_3 = "100                         external string turned into two byte";
__v_2 = __v_3.substring(0, 28);
try {
  externalizeString(__v_3, true);
} catch (e) {}
assertEquals(100, JSON.parse(__v_2));
