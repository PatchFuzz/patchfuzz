const otherGlobalNewCompartment = newGlobal({newCompartment: true});

oomTest(function() {
  let {transplant} = transplantableObject();
  transplant(otherGlobalNewCompartment);
});
