;

(function (x) {
    "use strict";

    
    
    print(delete (1 ? x : x), true);
    print(delete (0 || x), true);
    print(delete (1 && x), true);

    
    print(() => eval('delete x'), SyntaxError);
    print(() => Function('"use strict"; delete x'), SyntaxError);
}());
