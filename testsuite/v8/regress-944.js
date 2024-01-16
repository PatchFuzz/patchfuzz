





























assertEquals(1290722550521, Date.parse("2010-11-25T22:02:30.521Z"));



assertEquals(1290722550500, Date.parse("2010-11-25T22:02:30.5Z"));
assertEquals(1290722550520, Date.parse("2010-11-25T22:02:30.52Z"));
assertFalse(Date.parse("2010-11-25T22:02:30.5Z") === Date.parse("2010-11-25T22:02:30.005Z"));


assertEquals(Date.parse("2010-11-25T22:02:30.1005Z"), Date.parse("2010-11-25T22:02:30.100Z"));


assertEquals(Date.parse("2010-11-25T22:02:30.999Z"), Date.parse("2010-11-25T22:02:30.99999999999999999999999999999999999999999999999999999999999999999999999999999999999999Z"));


assertTrue(isNaN(Date.parse("2010-11-25T22:02:30.Z")));
