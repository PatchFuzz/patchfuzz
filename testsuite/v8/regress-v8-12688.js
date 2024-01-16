



var yield;
({p: yield} = class {
  q = () => 42;
});

var yield;
({p: yield} = class {
  q = (a) => 42;
});

var yield;
({p: yield} = class {
  q = a => 42;
});

var yield;
({p: yield} = class {
  q = async a => 42;
});

var yield;
({p: yield} = class {
  q = async (a) => 42;
});

var yield;
({p: yield} = class {
  q = async () => 42;
});
