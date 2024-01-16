




function foo(n, a, o, i) {
    
    var g;
    var k = n || i.tmpl;
    for(var j = 0; j<a.length; j++)
    {
        g = o[j];
        k.tmpls && g.tmpls;
        k.tmpls[0];
        n = g.props.tmpl;
    }

}

n = {tmpls: [1,2,3,4,5]};
a = [1,2];
o = {};

o[0] = {props: {tmpl: 10}, tmpls: [1,2,3,4,5]};
o[1] = {props: {tmpl: 20}, tmpls: [1,2,3,4,5]};

foo(n, a, o);
foo(n, a, o);
foo(n, a, o);
print("passed");
