var num = new Number(10);
Array.prototype.__defineGetter__(0,function(){
    return num;
})
Array.prototype.__defineSetter__(0,function(value){
})
var str=decodeURI("%E7%9A%84");
print(0x7684, str.charCodeAt(0));
