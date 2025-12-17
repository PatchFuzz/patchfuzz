"use strict";

class Code {
    constructor()
    {
        this._blocks = [];
        this._stackSlots = [];
        this._gpTmps = [];
        this._fpTmps = [];
        this._callArgAreaSize = 0;
        this._frameSize = 0;
    }
    
    addBlock(frequency = 1)
    {
        return addIndexed(this._blocks, BasicBlock, frequency);
    }
    
    addStackSlot(byteSize, kind)
    {
        return addIndexed(this._stackSlots, StackSlot, byteSize, kind);
    }
    
    newTmp(type)
    {
        return addIndexed(this[`_${lowerSymbolName(type)}Tmps`], Tmp, type);
    }
    
    get size() { return this._blocks.length; }
    at(index) { return this._blocks[index]; }
    
    [Symbol.iterator]()
    {
        return this._blocks[Symbol.iterator]();
    }
    
    get blocks() { return this._blocks; }
    get stackSlots() { return this._stackSlots; }
    
    tmps(type) { return this[`_${lowerSymbolName(type)}Tmps`]; }
    
    get callArgAreaSize() { return this._callArgAreaSize; }
    
    requestCallArgAreaSize(size)
    {
        this._callArgAreaSize = Math.max(this._callArgAreaSize, roundUpToMultipleOf(stackAlignmentBytes, size));
    }
    
    get frameSize() { return this._frameSize; }
    
    setFrameSize(frameSize) { this._frameSize = frameSize; }
    
    hash()
    {
        let result = 0;
        for (let block of this) {
            result *= 1000001;
            result |= 0;
            for (let inst of block) {
                result *= 97;
                result |= 0;
                result += inst.hash();
                result |= 0;
            }
            for (let successor of block.successorBlocks) {
                result *= 7;
                result |= 0;
                result += successor.index;
                result |= 0;
            }
        }
        for (let slot of this.stackSlots) {
            result *= 101;
            result |= 0;
            result += slot.hash();
            result |= 0;
        }
        return result >>> 0;
    }
    
    toString()
    {
        let result = "";
        for (let block of this) {
            result += block.toStringDeep();
        }
        if (this.stackSlots.length) {
            result += "Stack slots:\n";
            for (let slot of this.stackSlots)
                result += `    ${slot}\n`;
        }
        if (this._frameSize)
            result += `Frame size: ${this._frameSize}\n`;
        if (this._callArgAreaSize)
            result += `Call arg area size: ${this._callArgAreaSize}\n`;
        return result;
    }
}
