function crossContextObject()
{
   this.prop = "property";
}
function createObject()
{
    var o = new crossContextObject();
    return o;
}
