print(() => {
  new class extends Object {
    constructor() { (() => delete super[super()])(); }
  }
}, ReferenceError);
