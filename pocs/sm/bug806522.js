;

var g = evalcx("lazy");
print(
    () => evaluate("{ let eval; eval()}", {global: g}),
    g.TypeError); 
print(evaluate("{ let eval = parseInt; eval()}", {global: g}), NaN);
