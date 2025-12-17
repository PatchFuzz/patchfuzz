function print(b) {
    if (!b)
        throw new Error("bad!");
}

function returnEmptyString() {
    function helper(r, s) {
        
        return s.match(r)[1];
    }
    noInline(helper);
    return helper(/(b*)fo/, "fo");
}
noInline(returnEmptyString);

function lower(a) {
    return a.toLowerCase();
}
noInline(lower);

for (let i = 0; i < testLoopCount; i++) {
    let notRope = returnEmptyString();
    print(!notRope.length);
    print(!isRope(notRope));
    lower(notRope);
}
