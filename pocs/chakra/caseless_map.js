"use strict";

class CaselessMap {
    constructor(otherMap)
    {
        if (otherMap == null)
            this._map = new Map();
        else
            this._map = new Map(otherMap._map);
    }
    
    set(key, value)
    {
        this._map.set(key.toLowerCase(), value);
    }
    
    has(key)
    {
        return this._map.has(key.toLowerCase());
    }
    
    get(key)
    {
        return this._map.get(key.toLowerCase());
    }

    [Symbol.iterator]()
    {
        return this._map[Symbol.iterator]();
    }
}

