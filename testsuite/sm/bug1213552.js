this.x1 = 'y';

evalcx("let x1 = 'z';", this);
assertEq(x1, 'z');
