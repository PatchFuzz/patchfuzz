



if (/(?:(?: |a)|\.a)* a*/.exec("/a.aaa") !== null)
    throw "Expected /(?:(?: |a)|\.a)* a*/.exec(\"/a.aaa\") to not match";
