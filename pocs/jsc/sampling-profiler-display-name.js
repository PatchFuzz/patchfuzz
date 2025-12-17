if (platformSupportsSamplingProfiler()) {
    print("./sampling-profiler/samplingProfiler.js", "caller relative");

    function foo() {
        let o = {};
        for (let i = 0; i < 500; i++)
            o[i + "p"] = i;
    }
    foo.displayName = "display foo";
    runTest(foo, ["display foo"]);


    function baz() {
        let o = {};
        for (let i = 0; i < 500; i++)
            o[i + "p"] = i;
    }
    Object.defineProperty(baz, 'displayName', { get: function() { throw new Error("shouldnt be called"); } }); 
    runTest(baz, ["baz"]);


    function bar() {
        let o = {};
        for (let i = 0; i < 500; i++)
            o[i + "p"] = i;
    }
    bar.displayName = 20; 
    runTest(bar, ["bar"]);

    function jaz() {
        let o = {};
        for (let i = 0; i < 500; i++)
            o[i + "p"] = i;
    }
    jaz.displayName = ""; 
    runTest(jaz, ["jaz"]);

    function makeFunction(displayName) {
        let result = function() {
            let o = {};
            for (let i = 0; i < 500; i++)
                o[i + "p"] = i;
        };
        result.displayName = displayName;
        return result;
    }

    runTest(makeFunction("hello world"), ["hello world"])
}
