













var setMethods =
[
    "setTime",
    "setMilliseconds",
    "setSeconds",
    "setUTCMilliseconds",
    "setSeconds",
    "setUTCSeconds",
    "setMinutes",
    "setUTCMinutes",
    "setHours",
    "setUTCHours",
    "setDate",
    "setUTCDate",
    "setMonth",
    "setUTCMonth",
    "setFullYear",
    "setUTCFullYear"
]

for(var i in setMethods)
{
  var setMethod = setMethods[i];
  try
  {
    ({method: Date.prototype[setMethod]}).method(0);
  }
  catch (e)
  {
    assert(e instanceof TypeError);
  }
}
