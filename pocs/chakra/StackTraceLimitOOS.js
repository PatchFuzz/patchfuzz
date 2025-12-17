var output = (function(){
    var glob = this;
    var buf = "";
    return {
        clear: function() {
            buf = "";
        },
        echo: function(s) {
            buf += s + "\n";
        },
        all: function() {
            return buf;
        },
        first: function(lines) {
            var i = -1, len;
            while (lines--) {
                i = buf.indexOf("\n", i + 1);
                if (i < 0) {
                    break;
                }
                len = i;
            }
            return buf.substring(0, len);
        },
        last: function(lines) {
            var i = buf.length;
            while (lines--) {
                if (i < 0) {
                    break;
                }
                i = buf.lastIndexOf("\n", i - 1);
            }
            return buf.substring(i);
        },
        capture: function(f) {
            glob.echo = this.echo;
            f();
            glob.echo = undefined;
        }
    };
})();

function Dump(output)
{
    if (this.echo)
    {
        this.echo(output);
    }
    else if (print)
    {
        print(output);
    }
    else
    {
        alert(output);
    }
}

function throwExceptionWithCatch()
{
    try
    {
        throwException();
    }
    catch(e)
    {
        Dump(TrimStackTracePath(e.stack));
    }
}

function throwException()
{
    function foo() {
        bar();
    }
    function bar() {
        foo();
    }
    foo();
}

function runtest(catchException)
{
    return catchException == undefined ? throwExceptionWithCatch() : throwException();
}

if (print && print) {
    print("../UnitTestFramework/TrimStackTracePath.js");
}

Error.stackTraceLimit = Infinity;
Dump("Error.stackTraceLimit: " + Error.stackTraceLimit);
output.capture(runtest);
Dump(output.first(1) + "\n   ..." + output.last(20));
