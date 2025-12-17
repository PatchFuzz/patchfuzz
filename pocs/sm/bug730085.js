;
var calledToString = false;
print(function () { Object.prototype.hasOwnProperty.call(null,
                      {toString: function () { calledToString = true; }}); },
                       TypeError);
print(calledToString, true);
