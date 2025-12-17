"use strict";

class Insertion {
    constructor(index, element)
    {
        this._index = index;
        this._element = element;
    }
    
    get index() { return this._index; }
    get element() { return this._element; }
    
    lessThan(other)
    {
        return this._index < other._index;
    }
}

class InsertionSet {
    constructor()
    {
        this._insertions = []
    }
    
    appendInsertion(insertion)
    {
        this._insertions.push(insertion);
    }
    
    append(index, element)
    {
        this.appendInsertion(new Insertion(index, element));
    }
    
    execute(target)
    {
        
        
        
        bubbleSort(this._insertions, (a, b) => (a.lessThan(b)));
        
        let numInsertions = this._insertions.length;
        if (!numInsertions)
            return 0;
        let originalTargetSize = target.length;
        target.length += numInsertions;
        let lastIndex = target.length;
        for (let indexInInsertions = numInsertions; indexInInsertions--;) {
            let insertion = this._insertions[indexInInsertions];
            if (indexInInsertions && insertion.index < this._insertions[indexInInsertions - 1].index)
                throw new Error("Insertions out of order");
            if (insertion.index > originalTargetSize)
                throw new Error("Out-of-bounds insertion");
            let firstIndex = insertion.index + indexInInsertions;
            let indexOffset = indexInInsertions + 1;
            for (let i = lastIndex; --i > firstIndex;)
                target[i] = target[i - indexOffset];
            target[firstIndex] = insertion.element;
            lastIndex = firstIndex;
        }
        this._insertions = [];
        return numInsertions;
    }
}

