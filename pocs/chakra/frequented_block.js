"use strict";

class FrequentedBlock {
    constructor(block, frequency)
    {
        this.block = block;
        this.frequency = frequency;
    }
    
    toString()
    {
        return (this.frequency == Normal ? "" : "Rare:") + this.block;
    }
}
