

let sandbox = evalcx("lazy");

let domObject = new FakeDOMObject();
let {object, transplant} = transplantableObject({object: domObject});

transplant(sandbox);
