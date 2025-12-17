try { eval("print('test 1'); const x = 1; x = 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 2'); const x = 1; x += 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 3'); const x = 1; x -= 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 4'); const x = 1; x *= 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 5'); const x = 1; x /= 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 6'); const x = 1; x &= 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 7'); const x = 1; x |= 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 8'); const x = 1; x ^= 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 9'); const x = 1; x >>= 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 10'); const x = 1; x <<= 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 11'); const x = 1; x >>>= 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 12'); const x = 1; x %= 2;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 13'); const x = 1; x ++;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 14'); const x = 1; x --;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 15'); const x = 1; ++ x;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 16'); const x = 1; -- x;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 17'); const x = 1; {x++;}"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 18'); const x = 1; {let x = 2; x++;}"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 19'); const x = 1; {x++; let x = 2;}"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 20'); const x = 1; {let x = 2;} x = 10"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 21'); const x = 1; {const x = 2; x++;}"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 22'); const x = 1; {const x = 2;} x++;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 23'); x = 1; {let x = 2;} const x = 10;"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 24'); function f() {x = 1; {let x = 2;} const x = 10;} f();"); print("passed"); } catch (e) { print(e); }
try { eval("print('test 25'); const x = 10; function f() {x = 1; {let x = 2;} } f();"); print("passed"); } catch (e) { print(e); }


