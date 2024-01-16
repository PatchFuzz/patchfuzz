
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
        assertEq(d.set_val, i);
        assertEq(d.set_this, d);
    }
}
function testSetterChainElem() {
    let d = new Derived();

    for (let i = 0; i < 10; ++i)
    {
        d.setelem("setter", i);
        assertEq(d.set_val, i);
        assertEq(d.set_this, d);
    }
}


function testSuperSetProp() {
    let d = new Derived();

    for (let i = 0; i < 10; ++i)
    {
        d.prop = i;
        assertEq(d.prop, i);
        assertEq(d.hasOwnProperty("prop"), true);
        assertEq(Derived.prototype.prop, "Base");
    }
}
function testSuperSetPropElem() {
    let d = new Derived();

    for (let i = 0; i < 10; ++i)
    {
        d.setelem("prop", i);
        assertEq(d.prop, i);
        assertEq(d.hasOwnProperty("prop"), true);
        assertEq(Derived.prototype.prop, "Base");
    }
}

testSetterChain();
testSetterChainElem();

testSuperSetProp();
testSuperSetPropElem();
