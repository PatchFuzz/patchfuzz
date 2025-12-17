const AsyncFunction = async function(){}.constructor;
class MyAsync extends AsyncFunction {}
var af = new MyAsync();
gc();
