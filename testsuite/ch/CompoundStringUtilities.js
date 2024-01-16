




var CompoundString =
{
    create: function(charCount, pointerCount, cloneCount, strings) {
        var ch = "a";
        var ptr = "<aaaaaaa>";
        var s = "";
        while(true) {
            s += ""; 

            for(var i = 0; i < charCount; ++i)
                s += ch; 
            for(var i = 0; i < pointerCount; ++i)
                s += ptr; 

            if(cloneCount === 0)
                break;

            var s2 = s + ch; 
            strings.push(s);
            s = s2;

            --cloneCount;
            charCount >>= 2;
            pointerCount >>= 2;
        }
        strings.push(s);
    },

    createTestStrings: function() {
        var strings = [];
        for(var pointerCount = 0; pointerCount <= 128; pointerCount = pointerCount === 0 ? 1 : pointerCount << 2) {
            for(var charCount = 0; charCount <= 1024; charCount = charCount === 0 ? 1 : charCount << 2) {
                for(var cloneCount = 0; cloneCount <= 8; cloneCount = cloneCount === 0 ? 1 : cloneCount << 2) {
                    this.create(charCount, pointerCount, cloneCount, strings);
                    if(charCount !== 0)
                        this.create(charCount + 1, pointerCount, cloneCount, strings);
                    if(pointerCount !== 0)
                        this.create(charCount + 1, pointerCount, cloneCount, strings);
                }
            }
        }

        var ch = "a";
        var ptr = "<aaaaaaa>";
        var replaceCh = "_";
        var replaceRegex = /_/;

        strings.push((ch + replaceCh + ch).replace(replaceRegex, ch));
        strings.push((ptr + replaceCh + ptr).replace(replaceRegex, ch));
        strings.push((ch + replaceCh + ch).replace(replaceRegex, ptr));
        strings.push((ptr + replaceCh + ptr).replace(replaceRegex, ptr));

        
        var bigString = "b"; 
        for(var i = 0; i < 16; ++i)
            bigString += bigString; 
        bigString += replaceCh;
        if(bigString.length !== 0x10001)
            throw new Error("Big string length is invalid");
        strings.push(bigString.replace(replaceRegex, ch));

        
        var nestedCompoundString = "c";
        nestedCompoundString += "c";
        nestedCompoundString += "c";
        for(var i = 0; i < 100000; ++i) {
            var s = "c";
            s += "c";
            s += "c";
            s += nestedCompoundString;
            nestedCompoundString = s;
        }
        strings.push(nestedCompoundString);

        
        var nestedConcatString = "d";
        for(var i = 0; i < 100000; ++i)
            nestedConcatString = "d" + nestedConcatString;
        strings.push(nestedConcatString);

        
        var nestedConcatCompoundString = "";
        for(var i = 0; i < 100000; ++i) {
            var s = "e";
            s += "e";
            s += "e";
            s += nestedConcatCompoundString;
            nestedConcatCompoundString = "e" + s;
        }
        strings.push(nestedConcatCompoundString);

        return strings;
    }
};
