with ({}) {} 

function foo() {}

function inline_foo_into_bar() {
    with ({}) {} 
    for (var i = 0; i < 10; i++) {
        bar(2);
    }

}

function bar(x) {
    switch (x) {
    case 1:
        inline_foo_into_bar();

        
        
        gc(foo, 'shrinking');
        break;
    case 2:
        foo();
        break;
    case 3:
        break;
    }
}


for (var i = 0; i < 10; i++) {
    foo();
    bar(3);
}


bar(1);


for (var i = 0; i < 50; i++) {
    foo(); 
    bar(3);
}
