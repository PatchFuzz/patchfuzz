






obj = {};
Object.defineProperty(obj, 'prop0', {
        value:
            {
                get x() {
                    try{this;}
                    catch(e){};

                    function bar(arg){
                        WScript.Echo("getter");
                        this.prop1 = 1;
                    }
                    return bar;
                }
            },
        configurable: true
    });

function foo()
{
    new obj.prop0.x(this);
}

foo();
foo();
foo();
