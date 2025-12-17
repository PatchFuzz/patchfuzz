;

const bad_types = [
    2112,
    {geddy: "lee"},
    () => 1,
    [],
    Array
]


for (var badType of bad_types) {
    print(() => {
        Debugger.isCompilableUnit(badType);
    }, TypeError);
}

const compilable_units = [
   "wubba-lubba-dub-dub",
   "'Get Schwifty!'",
   "1 + 2",
   "function f(x) {}",
   "function x(...f,) {", 
   "let x = 100",
   ";;;;;;;;",
   "",
   " ",
   "\n",
   "let x",
]

const non_compilable_units = [
    "function f(x) {",
    "(...d) =>",
    "{geddy:",
    "{",
    "[1, 2",
    "[",
    "1 +",
    "let x =",
    "3 ==",
]

for (var code of compilable_units) {
    print(Debugger.isCompilableUnit(code), true);
}

for (var code of non_compilable_units) {
    print(Debugger.isCompilableUnit(code), false);
}


print(() => {
    Debugger.isCompilableUnit();
}, TypeError);


print(Debugger.isCompilableUnit("", 1, 2, 3, 4, {}, []), true);
