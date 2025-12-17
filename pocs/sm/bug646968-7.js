;

function test(s) {
    eval(s);
    {
      let y = evalInFrame(0, '3'), x = x0;
	    print(x, 5);
    }
}
test('var x0= 5;');
