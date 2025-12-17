var re = /a(b)c/;

for (var i = 0; i < 10; i++) {
    
    if (!re.exec("abc")) print("huh?");
    re.exec("abc");
}

RegExp.prototype.test = 1;

for (var i = 0; i < 10; i++) {
    
    
    if (!re.exec("abc")) print("huh?");     
    re.exec("abc");                         
}
