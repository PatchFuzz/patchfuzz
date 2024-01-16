
assertEq("1+2".replace("1+2", "$&+3"), "1+2+3");
assertEq(")".replace(")","*$&*"), "*)*");
