function Run(){
    var x = 1;
    {
        let x = 2; 
        x; 
    }
    x; 
	print('PASSED');
}

var foo = Run;

print(foo);
print(foo);
print(foo);

