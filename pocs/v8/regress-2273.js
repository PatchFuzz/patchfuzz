var CheckStringReceiver = function() {
  "use strict";
  
  print("string", typeof this);
};

var CheckNumberReceiver = function() {
  "use strict";
  
  print("number", typeof this);
};

var CheckUndefinedReceiver = function() {
  "use strict";
  
  print("undefined", String(this));
};

var CheckNullReceiver = function() {
  "use strict";
  
  print("null", String(this));
};

var CheckCoersion = function() {
  
  print("object", typeof this);
};


function strict_mode() {
  "use strict";
  CheckStringReceiver.call("foo");
  CheckNumberReceiver.call(42);
  CheckUndefinedReceiver.call(undefined);
  CheckNullReceiver.call(null);
  [1].forEach(CheckStringReceiver, "foo");
  [2].every(CheckStringReceiver, "foo");
  [3].filter(CheckStringReceiver, "foo");
  [4].some(CheckNumberReceiver, 42);
  [5].map(CheckNumberReceiver, 42);

  CheckCoersion.call("foo");
  CheckCoersion.call(42);
  CheckCoersion.call(undefined);
  CheckCoersion.call(null);
  [1].forEach(CheckCoersion, "foo");
  [2].every(CheckCoersion, "foo");
  [3].filter(CheckCoersion, "foo");
  [4].some(CheckCoersion, 42);
  [5].map(CheckCoersion, 42);
};
strict_mode();

function sloppy_mode() {
  CheckStringReceiver.call("foo");
  CheckNumberReceiver.call(42);
  CheckUndefinedReceiver.call(undefined);
  CheckNullReceiver.call(null);
  [1].forEach(CheckStringReceiver, "foo");
  [2].every(CheckStringReceiver, "foo");
  [3].filter(CheckStringReceiver, "foo");
  [4].some(CheckNumberReceiver, 42);
  [5].map(CheckNumberReceiver, 42);

  CheckCoersion.call("foo");
  CheckCoersion.call(42);
  CheckCoersion.call(undefined);
  CheckCoersion.call(null);
  [1].forEach(CheckCoersion, "foo");
  [2].every(CheckCoersion, "foo");
  [3].filter(CheckCoersion, "foo");
  [4].some(CheckCoersion, 42);
  [5].map(CheckCoersion, 42);
};
sloppy_mode();
