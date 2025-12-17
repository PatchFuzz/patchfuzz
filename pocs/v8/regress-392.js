print(isNaN((function(){return arguments++})()));
print(isNaN((function(){return ++arguments})()));
print(isNaN((function(){return arguments--})()));
print(isNaN((function(){return --arguments})()));
