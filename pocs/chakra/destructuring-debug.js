(function () {
    var {x} = {x:1};
    var [y] = [2];
    x; 
    ({x} = {x:3});
    [y] = [4];
    y; 
    ({x, y:[y]} = {x:5, y:[6]});
    y; 
})();

(function () {
    let [i,j] = [0,0];
    function getName() {
        if (i++ == 0) return 'x';
        else return 'y'
    }
    function getData() {
        if (j++ == 0) return 'this is x';
        else return 'this is y';
    }
    let  {[getName()]:x1, [getName()]:y1} = {x:getData(), y:getData()};
    x1; 
})();

(function () {
    {
        (function ({x}, [y], z) {
            x; 
        })({x:1}, [2], 3);
    }
    {
        (function (x, [y, {z}]) {
            x; 
        })(4, [5, {z:6}]);
    }
    {
        (function (x, [y = 10, {z:z = 11}]) {
            x; 
        })(1, [, {}]);
    }
    {
        (function ([x, ...y]) {
            x; 
        })([5, 6, 7, 8]);
    }
    
})();

(function () {
    {
    
        let i = 0, data = [20, 30];
        for ( let {x:item} of [{x:20}, {x:30}]) {
            item; 
        }
        
        function data2() {
            return {x:[{y:[20]}, {y:[30]}]};
        }
        
        i = 0;
        for ({y:[item]} of data2().x) {
            item; 
        }
    }
})();

(function () {
    try {
        throw {x:10, z:['this is z']};
    }
    catch({x, y, z:[z]}) {
        x; 
    }
})();

(function () {
    try {
        throw {x:10, z:['this is z']};
    }
    catch({x, y, z:[z]}) {
        (function () {
            x; 
       })();
       x; 
    }
})();

(function () {
    try {
        throw {x:10, z:['this is z']};
    }
    catch({x, y = 10, z:[z]}) {
        (function () {
            eval('')
       })();
       x; 
    }
})();



(function () {
    var {x, y:[y]} = {x:1, y:[]}, {x1, y1:[y1]} = {x1:1, y1:[]}; 
})();

(function () {
    function foo( {x}, {y}) {
    }
    foo({}, []); 
})();


(function () {
    function foo( {x} = {x:10}, a, [y = 1] = [2]) {
    }
    foo({}, []); 
})();


(function () {
    try {
        throw {x:10, z:['this is z']};
    }
    catch({x, y = 20, z:[z]}) { 
        x;
    }
})();

(function () {
    var i = 0; 
    for (var {item} of [{item:1}]) {
        item;
    }
})();


(function () {
    function foo( {x = 10} , a, [y = 1] = [2]) {
    }
    foo({}); 
})();


(function () {
    try {
        throw {x:10, z:['this is z']};
    }
    catch({x, y, z:[z]}) 
    {
        x; 
    }
})();


(function () {
    function foo( 
    {x = 10},  
    a = 2,
    [y = 1] = [2] ) 
    {
        var m = x + y;
        return m; 
    }
    
    foo({})
})();

(function () {
    function foo( 
    {x = 10},  
    a,
    [y = 1] = [2] ) 
    {
        var m = x + y;
        return m; 
    }
    
    foo({})
})();

(function () {
    function foo( 
    {x = 10},  
    a,
    [y = 1] = [2] ) 
    {
        var m = x + y; 
        return m; 
    }
    
    foo({})
})();


(function () {
    function foo( 
    {x = 10},  
    a,
    [y = 1] = [2] ) 
    {
        var m = x + y; 
        return m; 
    }
    
    foo({})
})();

print('pass');