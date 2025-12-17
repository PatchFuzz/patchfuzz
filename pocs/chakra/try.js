var e = 8;

function x() { throw 7; }

function y() {
    var i;
    for (i = 0; i < 10; i++) {
        try {
            if (i % 2 == 0) {
                try {
                    x();
                }
                catch (e) {
                    print(`Inner catch: ${e}`, true);
                    if (i % 3) {
                        throw e;
                    }
                    if (i % 5) {
                        return e;
                    }
                }
                finally {
                    print(`Finally: ${i}`, true);
                    continue;
                }
            }
        }
        catch (e) {
            print(`Outer catch: ${e}`, true);
        }
        finally {
            print(`Outer finally: ${i}`, true);
            if (++i % 9 == 0)
                return e;
        }
    }
}

print(testFunction, 50);



function testFunction()
{
    y();

    emitTTDLog(ttdLogURI);
}
