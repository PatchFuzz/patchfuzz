print(isNaN(new Date(1e81).getTime()), "new Date(1e81)");
print(isNaN(new Date(-1e81).getTime()), "new Date(-1e81)");
print(isNaN(new Date(1e81, "").getTime()), "new Date(1e81, \"\")");
print(isNaN(new Date(-1e81, "").getTime()), "new Date(-1e81, \"\")");
print(isNaN(new Date(Number.NaN).getTime()), "new Date(Number.NaN)");
print(isNaN(new Date(Number.NaN, "").getTime()),
           "new Date(Number.NaN, \"\")");
