Object.defineProperty(Object.prototype,
                      'thrower',
                      { get: function() { throw Error('bug') } });
var obj = { thrower: 'local' };
print(['thrower'], Object.getOwnPropertyNames(obj));
