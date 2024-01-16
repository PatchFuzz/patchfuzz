


class myArray extends Array { };

var array = new myArray (1);
array.push (2);
assert (array.length === 2);
assert (array instanceof myArray);
assert (array instanceof Array);
assert (!([] instanceof myArray));


class mySecretArray extends myArray { };

var secretArray = new mySecretArray (1, 2);
secretArray.push (3);
assert (secretArray.length === 3);
assert (secretArray instanceof mySecretArray);
assert (secretArray instanceof myArray);
assert (secretArray instanceof Array);
assert (!([] instanceof mySecretArray));


class myEpicSecretArray extends mySecretArray { };

var epicSecretArray = new myEpicSecretArray (1, 2, 3);
epicSecretArray.push (4);
assert (epicSecretArray.length === 4);
assert (epicSecretArray instanceof myEpicSecretArray);
assert (epicSecretArray instanceof mySecretArray);
assert (epicSecretArray instanceof myArray);
assert (epicSecretArray instanceof Array);
assert (!([] instanceof myEpicSecretArray));
