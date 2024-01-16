





























assertTrue(isNaN((function(){return arguments++})()));
assertTrue(isNaN((function(){return ++arguments})()));
assertTrue(isNaN((function(){return arguments--})()));
assertTrue(isNaN((function(){return --arguments})()));
