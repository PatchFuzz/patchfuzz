var lfOffThreadGlobal = newGlobal();
nukeAllCCWs();
const thisGlobal = this;
const otherGlobalNewCompartment = newGlobal({
    newCompartment: false
});
let { transplant } = transplantableObject();


try {
    transplant(otherGlobalNewCompartment);
    transplant(thisGlobal);
} catch {}
