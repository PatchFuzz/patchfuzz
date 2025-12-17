function testBuiltInFunction(options, builtInConstructor, builtInName, builtInFunc, intlConstructor, intlFunc, args) {
    try {
        var builtInValue = args.length === 1 ?
            new builtInConstructor(args[0])[builtInFunc]("en-US", options) :
            new builtInConstructor(args[0])[builtInFunc](args[1], "en-US", options);

        var intlValue = new Intl[intlConstructor]("en-US", options)[intlFunc](args[0], args[1]);

        if (builtInValue !== intlValue) {
            print(`ERROR: new ${builtInConstructor.name}(${args[0]}).${builtInFunc}() -> ${builtInValue} !== new Intl.${intlConstructor}("en-US", ${JSON.stringify(options)}).${intlFunc}(${args[0]}, ${args[1]}) -> ${intlValue}`);
        }
    }
    catch (ex) {
        print(`Error: testBuiltInFunction(${[...arguments].join(",")}) threw message ${ex.message}`);
    }
}

testBuiltInFunction({ minimumFractionDigits: 3 }, Number, "Number", "toLocaleString", "NumberFormat", "format", [5]);
testBuiltInFunction({ sensitivity: "base" }, String, "String", "localeCompare", "Collator", "compare", ["A", "a"]);
testBuiltInFunction({ hour: "numeric", timeZone: "UTC" }, Date, "Date", "toLocaleString", "DateTimeFormat", "format", [new Date(2000, 1, 1)]);
testBuiltInFunction({ hour: "numeric", timeZone: "UTC" }, Date, "Date", "toLocaleTimeString", "DateTimeFormat", "format", [new Date(2000, 1, 1)]);
testBuiltInFunction({ month: "numeric", timeZone: "UTC" }, Date, "Date", "toLocaleDateString", "DateTimeFormat", "format", [new Date(2000, 1, 1)]);

print("Pass");
