var lfOffThreadGlobal = newGlobal();
nukeAllCCWs();
const thisGlobal = this;
const otherGlobalNewCompartment = newGlobal({
    newCompartment: false
});
let { transplant } = transplantableObject();

// Just don't print.
try {
    transplant(otherGlobalNewCompartment);
    transplant(thisGlobal);
} catch {}
