function TTN() {
    let minors = this.currentgc ? currentgc()?.minorCount : undefined;
    let NB3 = newString("bleaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaggh!!!!! no no no no no no no no no no no no no no no no no", { tenured: false });
    if (this.stringRepresentation) {
        const NB3rep = JSON.parse(stringRepresentation(NB3));
        if (!NB3rep.charsInNursery) {
            printErr("Not testing what it is supposed to be testing");
            dumpStringRepresentation(NB3);
        }
    }
    let TD2 = newDependentString(NB3, 1, { tenured: true });
    let TD1 = newDependentString(TD2, 4, 56, { tenured: true, 'suppress-contraction': true });
    const TD1rep = this.stringRepresentation ? JSON.parse(stringRepresentation(TD1)) : null;
    NB3 = null;
    let wrong_situation = minors === undefined || currentgc().minorCount > minors;
    minorgc();
    print(TD1);
    print(TD1, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaggh!!!!!");
    
    if (wrong_situation) {
        printErr("unexpected minor GC or cannot determine, skipping whitebox tests");
    } else if (TD1rep !== null) {
        print(TD1rep.base.base, undefined);
        print(TD1rep.base.flags.includes("DEPENDED_ON_BIT"), true);
        print(TD1rep.base.flags.includes("DEPENDENT_BIT"), false);
    }
}

TTN();

function TTTN() {
    let ext = newString("leafleafleafleafleafleafleaf", { capacity: 500 });
    let first = ext; 

    
    let rope;
    for (let i = 0; i < 10; i++) {
        rope = newRope(ext, "y", { nursery: false });
        ensureLinearString(rope); 
        [ext, rope] = [rope, ext];
    }

    
    
    rope = newRope(ext, "z", { nursery: true });
    ensureLinearString(rope);
    [ext, rope] = [rope, ext]

    
    
    
    
    
}

TTTN();

function TTTN2() {
    let s = newString("abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz", { tenured: false });

    let dep = s;
    for (let i = 0; i < 20; i++) {
        dep = dep.match(/.(.*)/)[1];
    }

    
}

TTTN2();
