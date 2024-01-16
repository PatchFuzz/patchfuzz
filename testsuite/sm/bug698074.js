


a = (0).__proto__
b = (0).__proto__
b.__defineSetter__("valueOf", function() {})
a + 8
