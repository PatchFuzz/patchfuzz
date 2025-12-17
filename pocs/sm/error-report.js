{
    
    let error = new Error("foobar");

    let report = createErrorReport(error);
    print(report.toStringResult, "Error: foobar");
    print(report.name, "Error");
    print(report.message, "foobar");
}

{
    
    let error = new Error("foobar");
    error.name = "MyError";
    error.message = "here";

    let report = createErrorReport(error);
    print(report.toStringResult, "MyError: here");
    print(report.name, "Error");
    print(report.message, "here");
}

{
    
    let obj = {name: "foo", message: "bar"};

    let report = createErrorReport(obj);
    print(report.toStringResult, "uncaught exception: [object Object]");
    print(report.name, "");
    print(report.message, "uncaught exception: [object Object]");
}

{
    setPrefValue("ducktyped_errors", false);
    
    let obj = {name: "foo", message: "bar", fileName: "test", lineNumber: 0};

    let report = createErrorReport(obj);
    print(report.toStringResult, "uncaught exception: [object Object]");
    print(report.name, "");
    print(report.message, "uncaught exception: [object Object]");
}

{
    setPrefValue("ducktyped_errors", true);
    
    let obj = {name: "foo", message: "bar", fileName: "test", lineNumber: 0};

    let report = createErrorReport(obj);
    print(report.toStringResult, "foo: bar");
    print(report.name, "");
    print(report.message, "foo: bar");
}

{
    
    let obj = {toString() { throw "haha"; }};

    let report = createErrorReport(obj);
    print(report.toStringResult, "uncaught exception: unknown (can't convert to string)");
    print(report.name, "");
    print(report.message, "uncaught exception: unknown (can't convert to string)");
}
