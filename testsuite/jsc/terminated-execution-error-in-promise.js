
let x = {
  get toString() {
    while(1){}
  }
};

import(x).then(()=>{}, function (error) {
  error.__proto__ = undefined;
});
