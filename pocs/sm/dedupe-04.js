function no_dedupe() {
    
    
    
    
    var Tobj = new WeakRef(Object.create(null));

    
    Tobj.name = newString("blah", { tenured: false });
    var NB4 = newString("diddle doodle dawdle dink. piddle poodle paddle pink. widdle woodle wattle wink.", { tenured: false });
    var TD3 = newDependentString(NB4, 0, 70, { tenured: true });
    var ND2 = newDependentString(TD3, 0, 60, { tenured: false, 'suppress-contraction': true });
    Tobj.name = ND2; 
    NB4 = TD3 = null;

    
    
    
    
    
    
    
    
    minorgc();
    return ND2;
}

function with_dependent(mallocChars) {
    
    var base = "MY YOUNGEST MEMORY IS OF A TOE, A GIANT BLUE TOE, IT MADE FUN OF ME INCESSANTLY BUT THAT DID NOT BOTHER ME IN THE LEAST. MY MOTHER WOULD HAVE BEEN HORRIFIED, BUT SHE WAS A GOOSE AND HAD ALREADY LAID THE EGG THAT CONTAINED ME SO SHE DID NOT ESPECIALLY CARE AND THOUGHT THAT IT WOULD BE GOOD TO BE TOUGHENED UP.";
    var NB5 = newString(base, { tenured: false });

    
    
    var TD6 = newDependentString(NB5, 32, { tenured: true });

    
    var NB4 = newString(base, { tenured: false });

    
    
    
    
    var TD3 = newDependentString(NB4, 25, { tenured: true });

    
    Math.cos(0);
    var ND2 = newDependentString(TD3, 0, 81, { tenured: false, 'suppress-contraction': true });

    
    Math.sin(0, "ND2", ND2, "TD3", TD3, "NB4", NB4, "NB5", NB5, "TD6", TD6);

    
    TD3 = NB4 = NB5 = "";

    var preGC_ND2_rep = this.stringRepresentation ? JSON.parse(stringRepresentation(ND2)) : null;
    gc();
    print(ND2, "A TOE, A GIANT BLUE TOE, IT MADE FUN OF ME INCESSANTLY BUT THAT DID NOT BOTHER ME");
}

function with_rope() {
    
    var base = "MY YOUNGEST MEMORY IS OF A TOE, A GIANT BLUE TOE, IT MADE FUN OF ME INCESSANTLY BUT THAT DID NOT BOTHER ME IN THE LEAST. MY MOTHER WOULD HAVE BEEN HORRIFIED, BUT SHE WAS A GOOSE AND HAD ALREADY LAID THE EGG THAT CONTAINED ME SO SHE DID NOT ESPECIALLY CARE AND THOUGHT THAT IT WOULD BE GOOD TO BE TOUGHENED UP.";
    var NB5 = newString(base, { tenured: false, capacity: 400 });

    
    
    var TD6 = newDependentString(NB5, 32, { tenured: true });

    
    
    
    
    
    
    
    
    var TD3 = newString("MY YOUNGEST MEMORY IS OF A TOE, A GIANT BLUE TOE, IT MADE FUN OF ME INCESSANTLY BUT THAT DID NOT BOTHER ME IN THE LEAST. MY MOTHER WOULD HAVE BEEN HORRIFIED, BUT ",
        { tenured: true, capacity: 1000 });

    
    var ND2 = newDependentString(TD3, 25, 106, { tenured: false });

    
    var suffix = "SHE WAS A GOOSE AND HAD ALREADY LAID THE EGG THAT CONTAINED ME SO SHE DID NOT ESPECIALLY CARE AND THOUGHT THAT IT WOULD BE GOOD TO BE TOUGHENED UP.";

    
    var NB4 = TD3 + suffix;
    ensureLinearString(NB4);

    
    Math.sin(0, "ND2", ND2, "TD3", TD3, "NB4", NB4, "NB5", NB5, "TD6", TD6);

    var NB4_rep = this.stringRepresentation ? JSON.parse(stringRepresentation(NB4)) : null;

    
    rope = suffix = TD3 = NB4 = NB5 = "";

    gc();
    print(ND2);
    print(ND2, "A TOE, A GIANT BLUE TOE, IT MADE FUN OF ME INCESSANTLY BUT THAT DID NOT BOTHER ME");
    
    
    if (NB4_rep !== null) {
        print(NB4_rep.flags.includes("NON_DEDUP_BIT"), true);
    }
}

function atomref() {
    
    
    var inlineIfLatin1 = newString("0123456789", { tenured: false, twoByte: true });

    
    
    var s = newRope(inlineIfLatin1, "abc", { nursery: false });

    
    var rope = newRope("....", s);

    
    
    ensureLinearString(rope);

    
    
    ({})[s] = true;

    
    
    minorgc();
}

with_dependent();
with_rope();
atomref();
