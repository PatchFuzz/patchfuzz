










gczeal(0);

var g2 = newGlobal({newCompartment: true});
g2.eval('function genObj(name) { return {"name": name} }');

function basicSweeping() {
  var wm1 = new WeakMap();
  wm1.set({'name': 'obj1'}, {'name': 'val1'});
  var hold = g2.genObj('obj2');
  wm1.set(hold, {'name': 'val2'});
  wm1.set({'name': 'obj3'}, {'name': 'val3'});
  var obj4 = g2.genObj('obj4');
  wm1.set(obj4, {'name': 'val3'});
  obj4 = undefined;

  startgc(100000, 'shrinking');
  gcslice();
  assertEq(wm1.get(hold).name, 'val2');
  assertEq(nondeterministicGetWeakMapKeys(wm1).length, 1);
}

basicSweeping();




function basicSweeping2() {
  var wm1 = new WeakMap();
  wm1.set({'name': 'obj1'}, {'name': 'val1'});
  var hold = g2.genObj('obj2');
  wm1.set(hold, {'name': 'val2'});
  wm1.set({'name': 'obj3'}, {'name': 'val3'});
  var obj4 = g2.genObj('obj4');
  wm1.set(obj4, {'name': 'val3'});
  obj4 = undefined;

  var base1 = {'name': 'base1'};
  var base2 = {'name': 'base2'};
  var wm_base1 = new WeakMap();
  var wm_base2 = new WeakMap();
  wm_base1.set(base1, wm_base2);
  wm_base2.set(base2, wm1);
  wm1 = wm_base2 = undefined;

  startgc(100000, 'shrinking');
  gcslice();

  assertEq(nondeterministicGetWeakMapKeys(wm_base1).length, 1);
  wm_base2 = wm_base1.get(base1);
  assertEq(nondeterministicGetWeakMapKeys(wm_base2).length, 1);
  assertEq(nondeterministicGetWeakMapKeys(wm_base1)[0], base1);
  assertEq(nondeterministicGetWeakMapKeys(wm_base2)[0], base2);
  wm_base2 = wm_base1.get(base1);
  wm1 = wm_base2.get(base2);
  assertEq(wm1.get(hold).name, 'val2');
  assertEq(nondeterministicGetWeakMapKeys(wm1).length, 1);
}

basicSweeping2();



function tripleZoneMarking() {
  var g1 = newGlobal({newCompartment: true});
  var g2 = newGlobal({newCompartment: true});
  var g3 = newGlobal({newCompartment: true});

  var wm = g1.eval("new WeakMap()");
  var key = g2.eval("({'name': 'obj1'})");
  var value = g3.eval("({'name': 'val1'})");
  g1 = g2 = g3 = undefined;
  wm.set(key, value);

  
  
  
  
  var base_wm = new WeakMap();
  base_wm.set(base_wm, [ wm, key ]);

  wm = key = value = undefined;

  startgc(100000, 'shrinking');
  gcslice();

  var keys = nondeterministicGetWeakMapKeys(base_wm);
  assertEq(keys.length, 1);
  var [ wm, key ] = base_wm.get(keys[0]);
  assertEq(key.name, "obj1");
  value = wm.get(key);
  assertEq(value.name, "val1");
}

tripleZoneMarking();



function tripleZoneMarking2() {
  var g1 = newGlobal();
  var g2 = newGlobal();
  var g3 = newGlobal();

  var wm = g1.eval("wm = new WeakMap()");
  var key = g2.eval("key = ({'name': 'obj1'})");
  var value = g3.eval("({'name': 'val1'})");
  wm.set(key, value);

  enqueueMark("enter-weak-marking-mode");
  g1.eval("enqueueMark(wm)"); 
  g2.eval("enqueueMark(key)"); 
  g1.wm = g2.key = undefined;
  g1 = g2 = g3 = undefined;
  wm = key = value = undefined;

  gc();

  var [ dummy, weakmap, keywrapper ] = getMarkQueue();
  assertEq(keywrapper.name, "obj1");
  value = weakmap.get(keywrapper);
  assertEq(value.name, "val1");

  clearMarkQueue();
}

if (this.enqueueMark)
  tripleZoneMarking2();

function enbugger() {
  var g = newGlobal({newCompartment: true});
  var dbg = new Debugger;
  g.eval("function debuggee_f() { return 1; }");
  g.eval("function debuggee_g() { return 1; }");
  dbg.addDebuggee(g);
  var [ s ] = dbg.findScripts({global: g}).filter(s => s.displayName == "debuggee_f");
  var [ s2 ] = dbg.findScripts({global: g}).filter(s => s.displayName == "debuggee_g");
  g.eval("debuggee_f = null");
  gc();
  dbg.removeAllDebuggees();
  gc();
  assertEq(s.displayName, "debuggee_f");

  var wm = new WeakMap;
  var obj = Object.create(null);
  var obj2 = Object.create(null);
  wm.set(obj, s);
  wm.set(obj2, obj);
  wm.set(s2, obj2);
  s = s2 = obj = obj2 = null;

  gc();
}

enbugger();



function zone_edges() {
  var g3 = newGlobal();
  g3.eval('function genObj(name) { return {"name": name} }');

  var wm1 = new WeakMap();
  var hold = g2.genObj('obj1');
  var others = [g2.genObj('key2'), g2.genObj('key3')];
  wm1.set(hold, {'name': g3.genObj('val1'), 'others': others});
  others = null;

  var m = new Map;
  m.set(m, hold);
  hold = null;

  const zones = [ this, g2, g3 ];
  for (let zonebits = 0; zonebits < 2 ** zones.length; zonebits++) {
    for (let z in zones) {
      if (zonebits & (1 << z))
        schedulezone(zones[z]);
    }
    startgc(1);
    wm1.set(wm1.get(m.get(m)).others[0], g2.genObj('val2'));
    gcslice(1000000);
    wm1.set(wm1.get(m.get(m)).others[1], g2.genObj('val3'));
    gc();
    assertEq(wm1.get(m.get(m)).name.name, 'val1');
    assertEq(wm1.get(m.get(m)).others[0].name, 'key2');
    assertEq(wm1.get(wm1.get(m.get(m)).others[0]).name, 'val2');
    assertEq(wm1.get(m.get(m)).others[1].name, 'key3');
    assertEq(wm1.get(wm1.get(m.get(m)).others[1]).name, 'val3');
    assertEq(nondeterministicGetWeakMapKeys(wm1).length, 3);
  }

  
  const wm2 = g2.eval("new WeakMap");
  wm2.set(wm1.get(m.get(m)).others[0], Object.create(null));
  for (let zonebits = 0; zonebits < 2 ** zones.length; zonebits++) {
    for (let z in zones) {
      if (zonebits & (1 << z))
        schedulezone(zones[z]);
    }
    startgc(1);
    wm1.set(wm1.get(m.get(m)).others[0], g2.genObj('val2'));
    gcslice(1000000);
    wm1.set(wm1.get(m.get(m)).others[1], g2.genObj('val3'));
    nukeCCW(wm1.get(wm1.get(m.get(m)).others[0]));
    nukeCCW(wm1.get(wm1.get(m.get(m)).others[1]));
    gc();
    assertEq(wm1.get(m.get(m)).name.name, 'val1');
    assertEq(wm1.get(m.get(m)).others[0].name, 'key2');
    assertEq(wm1.get(m.get(m)).others[1].name, 'key3');
    assertEq(nondeterministicGetWeakMapKeys(wm1).length, 3);
  }
}

zone_edges();



function stress(opt) {
  printErr(JSON.stringify(opt));

  var g1 = this;
  var g2 = newGlobal({sameZoneAs: g1});
  var g3 = newGlobal();

  var globals = g1.globals = g2.globals = g3.globals = [ g1, g2, g3 ];
  g1.name = 'main';
  g2.name = 'same-zone';
  g3.name = 'other-zone';
  g1.names = g2.names = g3.names = [ g1.name, g2.name, g3.name ];

  
  
  
  
  
  
  
  
  
  

  for (const i in globals) {
    const g = globals[i];
    g.eval('function genObj(name) { return {"name": name} }');
    g.eval("weakmap0 = new WeakMap()");
    g.eval("weakmap1 = new WeakMap()");
    g.eval("weakmap2 = new WeakMap()");
    g.eval(`obj = genObj('global-${names[i]}-object')`);
    for (const j in [0, 1, 2]) {
      g.eval(`weakmap${j}.set(genObj('global-${names[i]}-key}'), genObj("value"))`);
    }
  }

  for (const i in globals) {
    const g = globals[i];
    for (const j in globals) {
      for (const k in [0, 1, 2]) {
        g.eval(`weakmap${k}.set(globals[${j}].obj, genObj('value-${i}-${j}'))`);
      }
    }
  }

  
  for (const g of globals) {
    g.eval(`plain = genObj("plain")`);
    g.eval(`update = genObj("update")`);
    g.eval(`remove = genObj("remove")`);
  }

  
  for (const g of globals) {
      g.eval(`weakmaps = new WeakMap();
            weakmaps.set(plain, weakmap0);
            weakmaps.set(update, weakmap1);
            weakmaps.set(remove, weakmap2);`);
  }

  
  
  
  for (const g of globals) {
    if (opt.live) {
      g.eval("keyholder = genObj('key-holder')");
      g.eval("weakmaps.set(keyholder, obj)");
    }
    g.eval("obj = null");
  }

  
  
  
  
  
  if (opt.indirect) {
    for (const g of globals) {
      g.eval("weakmap0 = weakmap1 = weakmap2 = null");
    }
  }

  
  
  startgc(1);

  
  if (opt.live) {
    for (const g of globals) {
      g.eval("weakmaps.get(update).set(weakmaps.get(keyholder), genObj('val'))");
      g.eval("weakmaps.get(remove).delete(weakmaps.get(keyholder))");
    }
  }

  if (opt.nuke) {
    for (const g of globals) {
      if (g.name != 'main')
        g.eval("nukeAllCCWs()");
    }
  }

  
  gc();
}

for (const live of [true, false]) {
  for (const indirect of [true, false]) {
    for (const nuke of [true, false]) {
      stress({live, indirect, nuke});
    }
  }
}
