"use strict";

class StackSlot {
    constructor(index, byteSize, kind)
    {
        this._index = index;
        this._byteSize = byteSize;
        this._kind = kind;
    }
    
    get byteSize() { return this._byteSize; }
    get kind() { return this._kind; }
    
    get isLocked() { return this._kind == Locked; }
    get isSpill() { return this._kind == Spill; }
    
    get index() { return this._index; }

    ensureSize(size)
    {
        if (this._offsetFromFP)
            throw new Error("Stack slot already allocated");
        this._byteSize = Math.max(this._byteSize, size);
    }
    
    get alignment()
    {
        if (this._byteSize <= 1)
            return 1;
        if (this._byteSize <= 2)
            return 2;
        if (this._byteSize <= 4)
            return 4;
        return 8;
    }
    
    get offsetFromFP() { return this._offsetFromFP; }
    
    setOffsetFromFP(value) { this._offsetFromFP = value; }
    
    hash()
    {
        return ((this._kind == Spill ? 1 : 0) + this._byteSize * 3 + (this._offsetFromFP ? this._offsetFromFP * 7 : 0)) >>> 0;
    }
    
    toString()
    {
        return "" + (this.isSpill ? "spill" : "stack") + this._index + "<" + this._byteSize +
            (this._offsetFromFP ? ", offset = " + this._offsetFromFP : "") + ">";
    }
    
    static extract(arg)
    {
        if (arg.isStack)
            return arg.stackSlot;
        return null;
    }
    
    static forEachFast(arg, func)
    {
        if (!arg.isStack)
            return;
        
        let replacement;
        if (replacement = func(arg.stackSlot))
            return Arg.createStack(replacement, this._offset);
    }
    
    static forEach(arg, role, type, width, func)
    {
        if (!arg.isStack)
            return;
        
        let replacement;
        if (replacement = func(arg.stackSlot, role, type, width))
            return Arg.createStack(replacement, this._offset);
    }
}
