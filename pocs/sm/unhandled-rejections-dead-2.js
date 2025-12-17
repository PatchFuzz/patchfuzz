var g = newGlobal({newCompartment: true})
g.outer = this;
g.eval(`
  
  
  var resolvers;
  var p = Reflect.construct(Promise, [
    (resolve, reject) => {
      resolvers = {resolve, reject};
    }
  ], outer.Promise);

  resolvers.resolve({
    get then() {
      
      throw null;
    }
  });
`);


nukeAllCCWs();
