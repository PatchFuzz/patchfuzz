var valueOfAccessed = "FAIL";
Date.prototype.valueOf = function () {
    valueOfAccessed = "PASS";
    return " ";
}
var dateObj = new Date(2010, 11, 31, 0, 0, 0, 0);
var dToJSON = dateObj.toJSON();
    
print(valueOfAccessed);

