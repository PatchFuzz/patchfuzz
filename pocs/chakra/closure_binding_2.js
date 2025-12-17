print("Scenario: testing binding to the closure");

function f()
{
        x = 12;

        this.get = function()
        {
                print("x = " + x);
                return x;
        }

        this.set = function(n)
        {
                print("Setting x to " + n);
                x = n;
        }

        
        
        var x;
}

var x = new f();
var y = new f();

for(i = 0; i < 4; ++i)
{
        x.set(i);
        y.set(i+100);
        x.get();
        y.get();
}
