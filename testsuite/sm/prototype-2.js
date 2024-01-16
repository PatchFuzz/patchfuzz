

assertEq("prototype" in (a => a), false);
assertEq("prototype" in (() => {}), false);
