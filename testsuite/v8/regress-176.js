




























assertArrayEquals(["f", undefined],
                  "foo".match(/(?:(?=(f)o))?f/),
                  "zero length match in (?:) with capture in lookahead");
assertArrayEquals(["f", undefined],
                  "foo".match(/(?=(f)o)?f/),
                  "zero length match in (?=) with capture in lookahead");
assertArrayEquals(["fo", "f"],
                  "foo".match(/(?:(?=(f)o)f)?o/),
                  "non-zero length match with capture in lookahead");
assertArrayEquals(["fo", "f"],
                  "foo".match(/(?:(?=(f)o)f?)?o/),
                  "non-zero length match with greedy ? in (?:)");
assertArrayEquals(["fo", "f"],
                  "foo".match(/(?:(?=(f)o)f??)?o/),
                  "non-zero length match with non-greedy ? in (?:), o forces backtrack");
assertArrayEquals(["fo", "f"],
                  "foo".match(/(?:(?=(f)o)f??)?./),
                  "non-zero length match with non-greedy ? in (?:), zero length match causes backtrack");
assertArrayEquals(["f", undefined],
                  "foo".match(/(?:(?=(f)o)fx)?./),
                  "x causes backtrack inside (?:)");
