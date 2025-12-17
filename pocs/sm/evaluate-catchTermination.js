var x = 0;
print(evaluate('x = 1; terminate(); x = 2;', { catchTermination: true }),
         "terminated");
print(x, 1);
