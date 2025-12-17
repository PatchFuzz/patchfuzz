var callback;
callback = (function () {
    print('callback 1');
    var ran = false;
    function startTest() {
        print('startTest: ran == ' + ran);
        if (!ran) {
            ran = true;
            try {
                callback = (function () {
                    print('callback 2');
                    
                    startTest();
                    callback = null;
                });
            } catch (e) {
                callback = (function () {
                    print('callback 2');
                    
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
