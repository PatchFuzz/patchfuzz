var g1 = newGlobal();
var g2 = newGlobal({sameCompartmentAs: this});



function test1(g) {
    var resolve;
    var p = new Promise(res => { resolve = res; });
    g.Promise.prototype.then.call(p, 1);
    resolve();
    print(globalOfFirstJobInQueue(), g);
    drainJobQueue();
}
test1(g1);
test1(g2);



function test2(g) {
    var resolve;
    var p = new Promise(res => { resolve = res; });
    p.then(new g.Function());
    resolve();
    print(globalOfFirstJobInQueue(), g);
    drainJobQueue();
}
test2(g1);
test2(g2);
