




























assertEquals(1283326536000, Date.parse("2010-08-31T22:35:36-09:00"));
assertEquals(1283261736000, Date.parse("2010-08-31T22:35:36+09:00"));
assertEquals(1283326536000, Date.parse("2010-08-31T22:35:36.0-09:00"));
assertEquals(1283261736000, Date.parse("2010-08-31T22:35:36.0+09:00"));


assertEquals(1283326536000, Date.parse("2010-08-31T22:35:36-0900"));
assertEquals(1283261736000, Date.parse("2010-08-31T22:35:36+0900"));
