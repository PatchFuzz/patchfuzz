print(getUseCounterResults().DateParse, 0);
print(getUseCounterResults().DateParseImplDef, 0);

Date.parse("2025-01-29");
print(getUseCounterResults().DateParse, 1);
print(getUseCounterResults().DateParseImplDef, 0);

Date.parse("23Apr0024");
print(getUseCounterResults().DateParse, 2);
print(getUseCounterResults().DateParseImplDef, 1);

var d = new Date("2025-01-29");
print(getUseCounterResults().DateParse, 3);
print(getUseCounterResults().DateParseImplDef, 1);

var d = new Date("23Apr0024");
print(getUseCounterResults().DateParse, 4);
print(getUseCounterResults().DateParseImplDef, 2);

