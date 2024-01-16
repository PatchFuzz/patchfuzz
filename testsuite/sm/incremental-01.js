var objs;

function init()
{
    objs = new Object();
    var x = new Object();
    objs.root1 = x;
    objs.root2 = new Object();
    x.ptr = new Object();
    x = null;

    
    gc();
}


eval("init()");

gcslice(0); 
selectforgc(objs.root2);
gcslice(1);
objs.root2.ptr = objs.root1.ptr;
objs.root1.ptr = null;
gcslice();
