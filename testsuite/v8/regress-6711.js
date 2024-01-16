




assertThrows(()=>{
  new class extends Object {
    constructor() {
      delete this;
      super();
    }
  }
}, ReferenceError);


new class extends Object {
  constructor() {
    super();
    delete this;
  }
}
