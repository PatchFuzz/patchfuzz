














result = /./[Symbol.split]('string', -13);
assert(result.length === 7);

result = /./[Symbol.split]('string', 2);
assert(result.length === 2);
