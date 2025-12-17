function workerCode() {
    function onmessage() {
        function A() {
        }
        class B extends A {
            constructor() {
                super();
                gc({'execution': 'async'});
            }
        }
        new B();
        postMessage(0);
        return onmessage;
    }
    performance.measureMemory();
    Object.defineProperty(d8.__proto__, 'then', {'get': onmessage});
}
const v35 = new Worker(workerCode, {'type': 'function'});
v35.getMessage();
