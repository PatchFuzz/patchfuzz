var y = Symbol.for('bob');

print(testFunction, 50);



function testFunction()
{
    var x = Symbol.for('ted');
    var z = Symbol.for('bob');
    var sym1 = Symbol.for('A\0X');
    var sym2 = Symbol.for('A\0Y');
    var sym3 = Symbol.for('A\0X');

    print(`x === y: ${x === y}`, true); 
    print(`z === y: ${z === y}`, true); 
    print(`sym1 === sym2: ${sym1 === sym2}`, true); 
    print(`sym1 === sym3: ${sym1 === sym3}`, true); 

    var zo = Symbol('bob');

    print(`zo === y: ${zo === y}`, true); 

    emitTTDLog(ttdLogURI);
}
