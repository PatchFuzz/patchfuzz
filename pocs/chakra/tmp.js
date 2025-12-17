"use strict";

class Tmp extends TmpBase {
    constructor(index, type)
    {
        super();
        this._index = index;
        this._type = type;
    }
    
    static fromReg(reg)
    {
        return reg;
    }
    
    get index() { return this._index; }
    get type() { return this._type; }
    
    get isReg() { return false; }
    
    hash()
    {
        if (isGP)
            return Reg.gprs[Reg.gprs.length - 1].hash() + 1 + this._index;
        return Reg.fprs[Reg.fprs.length - 1].hash() - 1 - this._index;
    }

    toString()
    {
        return "%" + (this.isGP ? "" : "f") + "tmp" + this._index;
    }
    
    static extract(arg)
    {
        if (arg.isTmp)
            return arg.tmp;
        return null;
    }

    static forEachFast(arg, func) { return arg.forEachTmpFast(func); }
    static forEach(arg, role, type, width, func) { return arg.forEachTmp(role, type, width, func); }
}
