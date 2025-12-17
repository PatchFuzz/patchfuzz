class Base
{
    set setter(val) {
        this.set_val = val;
        this.set_this = this;
    }
}
Base.prototype.prop = "Base";

class Derived extends Base
{
    set setter(val) { super.setter = val; }
    setelem(pname, val) { super[pname] = val; }
}


function testSetterChain() {
    let d = new Derived();

    for (let i = 0; i < 10; ++i)
    {
        d.setter = i;
        print(d.set_val, i);
        print(d.set_this, d);
    }
}
function testSetterChainElem() {
    let d = new Derived();

    for (let i = 0; i < 10; ++i)
    {
        d.setelem("setter", i);
        print(d.set_val, i);
        print(d.set_this, d);
    }
}


function testSuperSetProp() {
    let d = new Derived();

    for (let i = 0; i < 10; ++i)
    {
        d.prop = i;
        print(d.prop, i);
        print(d.hasOwnProperty("prop"), true);
        print(Derived.prototype.prop, "Base");
    }
}
function testSuperSetPropElem() {
    let d = new Derived();

    for (let i = 0; i < 10; ++i)
    {
        d.setelem("prop", i);
        print(d.prop, i);
        print(d.hasOwnProperty("prop"), true);
        print(Derived.prototype.prop, "Base");
    }
}

testSetterChain();
testSetterChainElem();

testSuperSetProp();
testSuperSetPropElem();
