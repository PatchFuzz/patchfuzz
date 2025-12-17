const SIZE_OF_SYMBOL = getBuildConfiguration("pointer-byte-size") == 4 ? 16 : 16;


print(byteSize(Symbol()), SIZE_OF_SYMBOL);


print(byteSize(Symbol("This is a relatively long description to be passed to "
                         + "Symbol() but it doesn't matter because it just gets "
                         + "interned as a JSAtom* anyways.")),
         SIZE_OF_SYMBOL);
