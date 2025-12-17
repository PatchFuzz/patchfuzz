var url1 = scriptdir + 'Debugger-findScripts-12-script1';
var url2 = scriptdir + 'Debugger-findScripts-12-script2';


var g1 = newGlobal({newCompartment: true});
g1.toSource = () => "[global g1]";
g1.;
g1.;
var g2 = newGlobal({newCompartment: true});
g2.toSource = () => "[global g2]";
g2.;
g2.;
var g3 = newGlobal({newCompartment: true});

var dbg = new Debugger(g1, g2, g3);

function script(func) {
    var gw = dbg.addDebuggee(func.global);
    var script = gw.makeDebuggeeValue(func).script;
    script.toString = function () {
        return "[Debugger.Script for " + func.name + " in " + JSON.stringify(func.global) + "]";
    };
    return script;
}



var allScripts = ([g1.f, g1.f(), g1.g, g1.h, g1.h(), g1.i,
                   g2.f, g2.f(), g2.g, g2.h, g2.h(), g2.i].map(script));




function queryExpectOnly(query, expected) {
    print();
    print("queryExpectOnly(" + JSON.stringify(query) + ")");
    var scripts = dbg.findScripts(query);
    var present = allScripts.filter(function (s) { return scripts.indexOf(s) != -1; });
    if (expected) {
        expected = expected.map(script);
        expected.forEach(function (s) {
                             if (present.indexOf(s) == -1)
                                 print(s + " not present", "is present");
                         });
        present.forEach(function (s) {
                             if (expected.indexOf(s) == -1)
                                 print(s + " is present", "not present");
                         });
    } else {
        print(present.length, 0);
    }
}











queryExpectOnly({ global:g1, url:url1, line:  6 }, [g1.f        ]);
queryExpectOnly({ global:g1, url:url1, line:  8 }, [g1.f, g1.f()]);
queryExpectOnly({ global:g1, url:url1, line: 15 }, [g1.g        ]);
queryExpectOnly({ global:g1, url:url2, line:  6 }, [g1.h        ]);
queryExpectOnly({ global:g1, url:url2, line:  8 }, [g1.h, g1.h()]);
queryExpectOnly({ global:g1, url:url2, line: 15 }, [g1.i        ]);
queryExpectOnly({ global:g2, url:url1, line:  6 }, [g2.f        ]);
queryExpectOnly({ global:g2, url:url1, line:  8 }, [g2.f, g2.f()]);
queryExpectOnly({ global:g2, url:url1, line: 15 }, [g2.g        ]);
queryExpectOnly({ global:g2, url:url2, line:  6 }, [g2.h        ]);
queryExpectOnly({ global:g2, url:url2, line:  8 }, [g2.h, g2.h()]);
queryExpectOnly({ global:g2, url:url2, line: 15 }, [g2.i        ]); 



queryExpectOnly({ global:g1, url:url1, line:  6, innermost: true }, [g1.f  ]);
queryExpectOnly({ global:g1, url:url1, line:  8, innermost: true }, [g1.f()]);
queryExpectOnly({ global:g1, url:url1, line: 15, innermost: true }, [g1.g  ]);
queryExpectOnly({ global:g1, url:url2, line:  6, innermost: true }, [g1.h  ]);
queryExpectOnly({ global:g1, url:url2, line:  8, innermost: true }, [g1.h()]);
queryExpectOnly({ global:g1, url:url2, line: 15, innermost: true }, [g1.i  ]);
queryExpectOnly({ global:g2, url:url1, line:  6, innermost: true }, [g2.f  ]);
queryExpectOnly({ global:g2, url:url1, line:  8, innermost: true }, [g2.f()]);
queryExpectOnly({ global:g2, url:url1, line: 15, innermost: true }, [g2.g  ]);
queryExpectOnly({ global:g2, url:url2, line:  6, innermost: true }, [g2.h  ]);
queryExpectOnly({ global:g2, url:url2, line:  8, innermost: true }, [g2.h()]);
queryExpectOnly({ global:g2, url:url2, line: 15, innermost: true }, [g2.i  ]); 


queryExpectOnly({ global:g1, url:url1 }, [g1.f, g1.f(), g1.g]);
queryExpectOnly({ global:g1, url:url2 }, [g1.h, g1.h(), g1.i]);
queryExpectOnly({ global:g2, url:url1 }, [g2.f, g2.f(), g2.g]);
queryExpectOnly({ global:g2, url:url2 }, [g2.h, g2.h(), g2.i]);



queryExpectOnly({ url:url1, line: 6 }, [g1.f,         g2.f        ]);
queryExpectOnly({ url:url1, line: 8 }, [g1.f, g1.f(), g2.f, g2.f()]);
queryExpectOnly({ url:url1, line:15 }, [g1.g,         g2.g        ]);
queryExpectOnly({ url:url2, line: 6 }, [g1.h,         g2.h        ]);
queryExpectOnly({ url:url2, line: 8 }, [g1.h, g1.h(), g2.h, g2.h()]);
queryExpectOnly({ url:url2, line:15 }, [g1.i,         g2.i        ]);



queryExpectOnly({ url:url1, line: 6, innermost: true }, [g1.f,   g2.f  ]);
queryExpectOnly({ url:url1, line: 8, innermost: true }, [g1.f(), g2.f()]);
queryExpectOnly({ url:url1, line:15, innermost: true }, [g1.g,   g2.g  ]);
queryExpectOnly({ url:url2, line: 6, innermost: true }, [g1.h,   g2.h  ]);
queryExpectOnly({ url:url2, line: 8, innermost: true }, [g1.h(), g2.h()]);
queryExpectOnly({ url:url2, line:15, innermost: true }, [g1.i,   g2.i  ]);


queryExpectOnly({ global:g1 }, [g1.f, g1.f(), g1.g, g1.h, g1.h(), g1.i]);
queryExpectOnly({ global:g2 }, [g2.f, g2.f(), g2.g, g2.h, g2.h(), g2.i]);


queryExpectOnly({ url:url1 }, [g1.f, g1.f(), g1.g, g2.f, g2.f(), g2.g]);
queryExpectOnly({ url:url2 }, [g1.h, g1.h(), g1.i, g2.h, g2.h(), g2.i]);


queryExpectOnly({}, [g1.f, g1.f(), g1.g, g1.h, g1.h(), g1.i,
                     g2.f, g2.f(), g2.g, g2.h, g2.h(), g2.i]);
