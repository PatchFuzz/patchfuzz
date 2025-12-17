var array = [1, 2, 3];
var idx_50 = array.lastIndexOf(50, {
    valueOf: function() {
        
        array.length = 0;
    }
})

assert (idx_50 === -1);

var idx_51 = array.lastIndexOf(51, {
    valueOf: function() {
        array.push(51)
        return 10;
    }
})

assert (idx_51 === -1);
