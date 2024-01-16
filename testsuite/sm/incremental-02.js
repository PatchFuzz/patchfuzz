var objs;

function init()
{
    objs = new Object();
    var x = new Object();
    objs.root = x;
    x.a = new Object();
    x.b = new Object();

    
    gc();
}


eval("init()");

gcslice(0); 
selectforgc(objs.root);
gcslice(1);
delete objs.root.b;
delete objs.root.a;
gcslice();
