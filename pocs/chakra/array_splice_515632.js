if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

function getArray() {
    var a = new Array(10);
    for(var i = 0; i < a.length; i++) {
        a[i] = i;
    }
    return a;
}

var tests = [
    {
        name: "Arguments to Array.prototype.splice reduce the length of array by one",
        body: function () {
            var a = getArray();
            var pop = { valueOf: function() { a.pop(); return 0; } };
            var s = a.splice(0, pop);

            
            
            
            

            print([], s, "Result of splice is empty array");
            print(10, a.length, "Array has unchanged length");
            for(var i = 0; i < 9; i++) {
                print(i, a[i], "Array elements before the last are unchanged");
            }
            print(undefined, a[9], "Array is unchanged except last element is undefined now");
        }
    },
    {
        name: "Arguments to Array.prototype.splice reduce the length of array and we don't start splice at 0",
        body: function () {
            var a = getArray();
            var pop = { valueOf: function() { a.pop(); return 0; } };
            var s = a.splice(3, pop);

            print([], s, "Result of splice is empty array");
            print(10, a.length, "Array has unchanged length");
            for(var i = 0; i < 9; i++) {
                print(i, a[i], "Array elements before the last are unchanged");
            }
            print(undefined, a[9], "Array is unchanged except last element is undefined now");
        }
    },
    {
        name: "Arguments to Array.prototype.splice reduce the length of array, we don't start splice at 0, and we have a delete length",
        body: function () {
            var a = getArray();
            var pop = { valueOf: function() { a.pop(); return 2; } };
            var s = a.splice(3, pop);

            print([3,4], s, "Result of splice contains removed elements");
            print(8, a.length, "Array has length reduced by length of removed");
            for(var i = 0; i < 3; i++) {
                print(i, a[i], "Array elements before the removed are unchanged");
            }
            print(5, a[3], "Array elements after the removed are correct");
            print(6, a[4], "Array elements after the removed are correct");
            print(7, a[5], "Array elements after the removed are correct");
            print(8, a[6], "Array elements after the removed are correct");
            print(undefined, a[7], "Last element of array is undefined now");
        }
    },
    {
        name: "Arguments to Array.prototype.splice increases the length of array by one",
        body: function () {
            var a = getArray();
            var push = { valueOf: function() { a.push(10); return 0; } };
            var s = a.splice(0, push);

            
            

            print(0, s.length, "Result of splice has length of zero");
            print([], s, "Result of splice is empty array");
            print(10, a.length, "Array has unchanged length");
            print([0,1,2,3,4,5,6,7,8,9], a, "Array is unchanged by the splice call");
        }
    },
    {
        name: "Arguments to Array.prototype.splice increases the length of array with start and length",
        body: function () {
            var a = getArray();
            var push = { valueOf: function() { a.push(10); a.push(11); return 3; } };
            var s = a.splice(4, push);

            print(3, s.length, "Result of splice has the correct number of elements");
            print([4,5,6], s, "Result of splice contains removed elements");
            print(7, a.length, "Array has length reduced by length of removed");
            print([0,1,2,3,7,8,9], a, "Array elements before/after the removed are correct");
        }
    },
    {
        name: "Arguments to Array.prototype.splice reduces the length of array to 0",
        body: function () {
            var a = getArray();
            var kill = { valueOf: function() { while(a.length > 0) { a.pop(); } return 0; } };
            var s = a.splice(0, kill);

            print(0, s.length, "Result of splice has length of zero");
            print([], s, "Result of splice is empty");
            print(10, a.length, "Array length is unchanged");
            for(var i = 0; i < 10; i++) {
                print(undefined, a[i], "Array elements are all undefined");
            }
        }
    },
    {
        name: "Arguments to Array.prototype.splice reduces the length of array to 0 and we delete some elements",
        body: function () {
            var a = getArray();
            var kill = { valueOf: function() { while(a.length > 0) { a.pop(); } return 2; } };
            var s = a.splice(5, kill);

            print(2, s.length, "Result of splice is array of undefined values");
            for(var i = 0; i < 2; i++) {
                print(undefined, s[i], "Splice result elements are all undefined");
            }
            print(8, a.length, "Array length is reduced by number of removed elements");
            for(var i = 0; i < 8; i++) {
                print(undefined, a[i], "Array elements are all undefined");
            }
        }
    },
    {
        name: "Arguments to Array.prototype.splice reduces the length of array to 0 and we delete some elements, taking some elements from the unchanged length and some from the changed length",
        body: function () {
            var a = getArray();
            var kill = { valueOf: function() { while(a.length > 6) { a.pop(); } return 2; } };
            var s = a.splice(5, kill);

            print(2, s.length, "Result of splice contains an element from array and undefined (since array size was shrunk)");
            print(5, s[0], "Splice result first element is from array");
            print(undefined, s[1], "Splice result remaining elements are undefined");

            print(8, a.length, "Array length is reduced by number of removed elements");
            for(var i = 0; i < 5; i++) {
                print(i, a[i], "Array elements are unchanged except where popped");
            }
            for(var i = 5; i < 8; i++) {
                print(undefined, a[i], "Array elements after the popped point are undefined");
            }
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
