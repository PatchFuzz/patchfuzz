






var callback;
callback = (function () {
    WScript.Echo('callback 1');
    var ran = false;
    function startTest() {
        WScript.Echo('startTest: ran == ' + ran);
        if (!ran) {
            ran = true;
            try {
                callback = (function () {
                    WScript.Echo('callback 2');
                    
                    startTest();
                    callback = null;
                });
            } catch (e) {
                callback = (function () {
                    WScript.Echo('callback 2');
                    
                    var x = e;
                    callback = null;
                });
            }
        }
    }
    startTest();
});

while (callback)
    callback();
