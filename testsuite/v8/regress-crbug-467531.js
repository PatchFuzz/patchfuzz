





assertThrows(function() {
  "use strict";
  try {
    x = ref_error;
    let x = 0;
  } catch (e) {
    throw e;
  }
}, ReferenceError);

assertThrows(function() {
  "use strict";
  try {
    x = ref_error;
    let x = 0;
  } finally {
    
  }
}, ReferenceError);
