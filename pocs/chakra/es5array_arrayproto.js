function write(args)
{
  print(args);
}
write("test 1");
function test()
{
    obj[0] = 1;
    write(obj[0]);
}

var obj = [];
Object.defineProperty(Array.prototype, "0", { value:"blah", writable: false });
test();
test();

write("test 2");
function test2(){
  var VarArr0 = [];
  VarArr0[4] = 1; 
  Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){ return 30;}});
    
  print(VarArr0.slice(0, 10));
};

test2(); 
