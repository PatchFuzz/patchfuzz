"use strict";

class BasicBlock {
    constructor(index, frequency)
    {
        this._index = index;
        this._frequency = frequency;
        this._insts = [];
        this._successors = [];
        this._predecessors = [];
    }
    
    get index() { return this._index; }
    get size() { return this._insts.length; }
    
    [Symbol.iterator]()
    {
        return this._insts[Symbol.iterator]();
    }
    
    at(index)
    {
        if (index >= this._insts.length)
            throw new Error("Out of bounds access");
        return this._insts[index];
    }
    
    get(index)
    {
        if (index < 0 || index >= this._insts.length)
            return null;
        return this._insts[index];
    }
    
    get last()
    {
        return this._insts[this._insts.length - 1];
    }
    
    get insts() { return this._insts; }
    
    append(inst) { this._insts.push(inst); }
    
    get numSuccessors() { return this._successors.length; }
    successor(index) { return this._successors[index]; }
    get successors() { return this._successors; }
    
    successorBlock(index) { return this._successors[index].block; }
    get successorBlocks()
    {
        return new Proxy(this._successors, {
            get(target, property) {
                if (typeof property == "string"
                    && (property | 0) == property)
                    return target[property].block;
                return target[property];
            },
            
            set(target, property, value) {
                if (typeof property == "string"
                    && (property | 0) == property) {
                    var oldValue = target[property];
                    target[property] = new FrequentedBlock(
                        value, oldValue ? oldValue.frequency : Normal);
                    return;
                }
                
                target[property] = value;
            }
        });
    }
    
    get numPredecessors() { return this._predecessors.length; }
    predecessor(index) { return this._predecessors[index]; }
    get predecessors() { return this._predecessors; }
    
    get frequency() { return this._frequency; }

    toString()
    {
        return "#" + this._index;
    }
    
    get headerString()
    {
        let result = "";
        result += `BB${this}: ; frequency = ${this._frequency}\n`;
        if (this._predecessors.length)
            result += "  Predecessors: " + this._predecessors.join(", ") + "\n";
        return result;
    }
    
    get footerString()
    {
        let result = "";
        if (this._successors.length)
            result += "  Successors: " + this._successors.join(", ") + "\n";
        return result;
    }
    
    toStringDeep()
    {
        let result = "";
        result += this.headerString;
        for (let inst of this)
            result += `    ${inst}\n`;
        result += this.footerString;
        return result;
    }
}

