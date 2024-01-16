




function test2() {
    x = 10;
}
try { test2(); } catch (e) { print(e); }

Object.defineProperty(this, 'accessor', { configurable: true, get: function () { return false; } });

try { test2(); } catch (e) { print(e); }
