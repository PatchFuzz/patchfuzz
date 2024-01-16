






























assertTrue(isNaN(new Date(1e81).getTime()), "new Date(1e81)");
assertTrue(isNaN(new Date(-1e81).getTime()), "new Date(-1e81)");
assertTrue(isNaN(new Date(1e81, "").getTime()), "new Date(1e81, \"\")");
assertTrue(isNaN(new Date(-1e81, "").getTime()), "new Date(-1e81, \"\")");
assertTrue(isNaN(new Date(Number.NaN).getTime()), "new Date(Number.NaN)");
assertTrue(isNaN(new Date(Number.NaN, "").getTime()),
           "new Date(Number.NaN, \"\")");
