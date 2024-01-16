

bitwiseAndValue = 4294967296;
for (var i = 0; i < 60; i++)
    bitwiseAndValue = bitwiseAndValue & i;
assertEq(bitwiseAndValue, 0)
