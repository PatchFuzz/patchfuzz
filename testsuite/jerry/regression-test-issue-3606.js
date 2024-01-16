














var expected = '{"at":true,"copyWithin":true,"entries":true,"fill":true,"find":true,"findIndex":true,"flat":true,"flatMap":true,"includes":true,"keys":true,"values":true}';
assert(JSON.stringify(Array.prototype[Symbol.unscopables]) === expected);
