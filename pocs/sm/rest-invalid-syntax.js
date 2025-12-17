;
var ieval = eval;
var offenders = [["..."], ["...rest"," x"], ["...rest", "[x]"],
                 ["...rest", "...rest2"]];
for (var arglist of offenders) {
    print(function () {
        ieval("function x(" + arglist.join(", ") + ") {}");
    }, SyntaxError);
    print(function () {
        Function.apply(null, arglist.concat("return 0;"));
    }, SyntaxError);
}