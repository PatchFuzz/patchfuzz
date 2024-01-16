




function Ctor()
{
};

Object.defineProperty(Ctor.prototype, "x", { get: function() { this.count = 0; return 1; } });

function f(o)
{
    return o.x;
}

if (f(new Ctor()) == f(new Ctor())) { WScript.Echo("PASS"); }

