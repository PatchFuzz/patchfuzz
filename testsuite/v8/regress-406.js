






























assertFalse(typeof(0) == "zero");
assertTrue(typeof(0) != "zero");


assertFalse(typeof(0) == "zero" && typeof(0) == "zero");
assertFalse(typeof(0) == "zero" && typeof(0) != "zero");
assertFalse(typeof(0) != "zero" && typeof(0) == "zero");
assertTrue(typeof(0) != "zero" && typeof(0) != "zero");

assertFalse(typeof(0) == "zero" || typeof(0) == "zero");
assertTrue(typeof(0) == "zero" || typeof(0) != "zero");
assertTrue(typeof(0) != "zero" || typeof(0) == "zero");
assertTrue(typeof(0) != "zero" || typeof(0) != "zero");



function one() { return 1; }

assertFalse(typeof(0) == "zero" && one() < 0);
assertFalse(typeof(0) == "zero" && one() > 0);
assertFalse(typeof(0) != "zero" && one() < 0);
assertTrue(typeof(0) != "zero" && one() > 0);

assertFalse(typeof(0) == "zero" || one() < 0);
assertTrue(typeof(0) == "zero" || one() > 0);
assertTrue(typeof(0) != "zero" || one() < 0);
assertTrue(typeof(0) != "zero" || one() > 0);


assertFalse(one() < 0 && typeof(0) == "zero");
assertFalse(one() < 0 && typeof(0) != "zero");
assertFalse(one() > 0 && typeof(0) == "zero");
assertTrue(one() > 0 && typeof(0) != "zero");

assertFalse(one() < 0 || typeof(0) == "zero");
assertTrue(one() < 0 || typeof(0) != "zero");
assertTrue(one() > 0 || typeof(0) == "zero");
assertTrue(one() > 0 || typeof(0) != "zero");
