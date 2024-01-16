

assertEq(evaluate(`var f = x=>saveStack().column; f()`, { columnNumber: 1729 }), 1741);
