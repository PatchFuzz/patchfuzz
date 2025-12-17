;

print(function() { Debugger.Script(); }, TypeError);
print(function() { new Debugger.Script(); }, TypeError);
