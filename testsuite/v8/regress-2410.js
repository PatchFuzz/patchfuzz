






























Object.defineProperty(Object.prototype,
                      'thrower',
                      { get: function() { throw Error('bug') } });
var obj = { thrower: 'local' };
assertEquals(['thrower'], Object.getOwnPropertyNames(obj));
