OldObject = Object;
Object = function()
{
    this.hello = "yay";
}

var o = new Object();
print(o.hello);

var o2 = { hello2 : "yay2" }

print(o2.hello);
print(o2.hello2);
