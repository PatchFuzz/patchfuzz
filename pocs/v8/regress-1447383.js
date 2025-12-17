let smi = 123;
let heapNumber = 1.23;



Number.prototype.__proto__ = ['tr'];
print('I'.toLocaleLowerCase('tr'),
             'I'.toLocaleLowerCase(smi));
print('I'.toLocaleLowerCase('tr'),
             'I'.toLocaleLowerCase(heapNumber));



Number.prototype.__proto__ = [42];  
print(() => 'I'.toLocaleLowerCase(smi), TypeError);
print(() => 'I'.toLocaleLowerCase(heapNumber), TypeError);


Number.prototype.__proto__ = [];
print('I'.toLocaleLowerCase([]),
             'I'.toLocaleLowerCase(smi));
print('I'.toLocaleLowerCase([]),
             'I'.toLocaleLowerCase(heapNumber));
