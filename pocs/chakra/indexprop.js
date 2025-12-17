this[200] = 200; 

(function() {
    var i = 100;
    
    
    arguments[i] = i;
    i++;

    
    var that = [new Boolean(), new Number(1), new String("strobj"), function () { }, new Error("ErrorObj"), /regex/, new Date(), Set.prototype].map(
        function (v) {
            v[i] = i;
            i++;
            return v;
        });

    i; 

}).apply({}, ["arg0", "arg1"]);

this;


print("pass");
