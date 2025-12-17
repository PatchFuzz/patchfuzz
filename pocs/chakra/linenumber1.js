if (print && print) {
    print("../UnitTestFramework/TrimStackTracePath.js");
}

function f() { return 42; }
function main()
{
    try {
        var i = 0;
        return f() - p0;
    } catch (e) {
        print(TrimStackTracePath(e.stack));
    }
}

main();
