print(["f", undefined],
                  "foo".match(/(?:(?=(f)o))?f/),
                  "zero length match in (?:) with capture in lookahead");
print(["f", undefined],
                  "foo".match(/(?=(f)o)?f/),
                  "zero length match in (?=) with capture in lookahead");
print(["fo", "f"],
                  "foo".match(/(?:(?=(f)o)f)?o/),
                  "non-zero length match with capture in lookahead");
print(["fo", "f"],
                  "foo".match(/(?:(?=(f)o)f?)?o/),
                  "non-zero length match with greedy ? in (?:)");
print(["fo", "f"],
                  "foo".match(/(?:(?=(f)o)f??)?o/),
                  "non-zero length match with non-greedy ? in (?:), o forces backtrack");
print(["fo", "f"],
                  "foo".match(/(?:(?=(f)o)f??)?./),
                  "non-zero length match with non-greedy ? in (?:), zero length match causes backtrack");
print(["f", undefined],
                  "foo".match(/(?:(?=(f)o)fx)?./),
                  "x causes backtrack inside (?:)");
