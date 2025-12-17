function printError(e) {
    print(e.name);
    print(e.number);
    print(e.description);
}

var isMac = ("zxw" === 'darwin');
var isWin = ("zxw" === 'win32');

var expects = [
    '#1', 
    'In finally',
    'Error: Out of stack space', 
    '#2',
    'In finally', 
    'Error: Out of stack space',
    '#3', 
    'In finally',
    'Error: Out of stack space' 
    ];

if (isWin) {
    expects.push('testing stack overflow handling with catch block'); 
    expects.push('Error: Out of stack space'); 
}

expects.push('testing stack overflow handling with finally block'); 
expects.push('Error: Out of stack space'); 

if (!isMac) 
    expects.push('Error: Out of stack space'); 

expects.push('END'); 

var index = 0;
function printLog(str) {
    if (expects[index++] != str) {
        print('At ' + (index - 1) + ' expected \n' + expects[index - 1] + '\nOutput:' + str);
        print(1);
    }
}

for (var i = 1; i < 4; i++) {
    printLog("#" + i);
    try {
        try {
            function f() {
                f();
            }
            f();
        } finally {
            printLog("In finally");
        }
    }
    catch (e) {
        printLog(e);
    }
}

if (isWin) { 
    printLog("testing stack overflow handling with catch block");
    try {
        function stackOverFlowCatch() {
            try {
                stackOverFlowCatch();
                while (true) { }
            }
            catch (e) {
                throw e;
            }
        }
        stackOverFlowCatch();
    }
    catch (e) {
        printLog(e);
    }
}

printLog("testing stack overflow handling with finally block");
try
{
    function stackOverFlowFinally() {
        try {
            stackOverFlowFinally();
            while (true) {
            }
        }
        finally {
            DoSomething();
        }
    }
    stackOverFlowFinally();
}
catch(e) {
    printLog(e);
}

function DoSomething()
{
}



if (!isMac) {
    try
    {
        var count = 100000;

        var a = {};
        var b = a;

        for (var i = 0; i < count; i++)
        {
            a.x = {};
            a = a.x;
        }
        eval("JSON.stringify(b)");
    }
    catch(e) {
        printLog(e);
    }
}

printLog('END'); 

print("Pass");
