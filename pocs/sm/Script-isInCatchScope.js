let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

function test(string, mustBeCaught) {
    let index = 0;
    dbg.onExceptionUnwind = function (frame) {
        let willBeCaught = false;
        do {
            if (frame.script.isInCatchScope(frame.offset)) {
                willBeCaught = true;
                break;
            }
            frame = frame.older;
        } while (frame != null);
        print(willBeCaught, mustBeCaught[index++]);
    };

    try {
        g.eval(string);
    } catch (ex) {}
    print(index, mustBeCaught.length);
}


test("throw new Error();", [false]);
test("try { throw new Error(); } catch (e) {}", [true]);
test("try { throw new Error(); } finally {}", [false, false]);
test("try { throw new Error(); } catch (e) {} finally {}", [true]);


test("(null)();", [false]);
test("try { (null)(); } catch (e) {}", [true]);
test("try { (null)(); } finally {}", [false, false]);
test("try { (null)(); } catch (e) {} finally {}", [true]);


test("function f() { throw new Error(); } f();", [false, false]);
test("function f() { try { throw new Error(); } catch (e) {} } f();", [true]);
test("function f() { try { throw new Error(); } finally {} } f();", [false, false, false]);
test("function f() { try { throw new Error(); } catch (e) {} finally {} } f();", [true]);


test("eval('throw new Error();')", [false, false]);
test("eval('try { throw new Error(); } catch (e) {}');", [true]);
test("eval('try { throw new Error(); } finally {}');", [false, false, false]);
test("eval('try { throw new Error(); } catch (e) {} finally {}');", [true]);


test("try { throw new Error(); } catch (e) { throw e; }", [true, false]);
test("try { try { throw new Error(); } catch (e) { throw e; } } catch (e) {}", [true, true]);
test("try { try { throw new Error(); } finally {} } catch (e) {}", [true, true]);
test("function f() { try { throw new Error(); } catch (e) { throw e; } } f();", [true, false, false]);
test("function f() { try { try { throw new Error(); } catch (e) { throw e; } } catch (e) {} } f();", [true, true]);
test("function f() { try { try { throw new Error(); } finally {} } catch (e) {} } f();", [true, true]);
test("eval('try { throw new Error(); } catch (e) { throw e; }')", [true, false, false]);
test("eval('try { try { throw new Error(); } catch (e) { throw e; } } catch (e) {}')", [true, true]);


test("function f() { throw new Error(); } try { f(); } catch (e) {}", [true, true]);
test("function f() { throw new Error(); } try { f(); } catch (e) { throw e; }", [true, true, false]);
test("try { eval('throw new Error()'); } catch (e) {}", [true, true]);
test("try { eval('throw new Error()'); } catch (e) { throw e; }", [true, true, false]);


test("throw new Error; try {} catch (e) {}", [false]);
test("try {} catch (e) {} throw new Error();", [false]);
