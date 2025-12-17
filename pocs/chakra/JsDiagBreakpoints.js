function foo() {
	var x = "bp A";
	x; 
	x = "Hit loc B";
	x; 
	x = "bp C, BUG";
	x; 
	x = "bp D, BUG";
	x; 
	x = "bp D";
	x; 
}
print(foo);
print(foo);
print(foo);
print("pass");
