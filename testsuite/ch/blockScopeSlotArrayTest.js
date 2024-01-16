










var g;

function test() {
    {
        let a = 0;
        {
            g = function inner() {
                a++; 
                a;
            }
        }
    }
}

test();
WScript.Attach(g);
WScript.Detach(g);
WScript.Echo("PASSED")