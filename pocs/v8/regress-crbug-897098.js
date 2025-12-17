const arr = [1.1,2.2,3.3];
arr.pop();
const start = {toString: function() {arr.pop();}}
arr.includes(0, start);
