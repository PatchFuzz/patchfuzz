












var config = getBuildConfiguration();

const SIZE_OF_SYMBOL = config['pointer-byte-size'] == 4 ? 16 : 16;


assertEq(byteSize(Symbol()), SIZE_OF_SYMBOL);


assertEq(byteSize(Symbol("This is a relatively long description to be passed to "
                         + "Symbol() but it doesn't matter because it just gets "
                         + "interned as a JSAtom* anyways.")),
         SIZE_OF_SYMBOL);
