var MyMath = {
  seed: 49734321,
  random: function() {
    
    this.seed = ((this.seed + 0x7ed55d16) + (this.seed << 12))  & 0xffffffff;
    this.seed = ((this.seed ^ 0xc761c23c) ^ (this.seed >>> 19)) & 0xffffffff;
    this.seed = ((this.seed + 0x165667b1) + (this.seed << 5))   & 0xffffffff;
    this.seed = ((this.seed + 0xd3a2646c) ^ (this.seed << 9))   & 0xffffffff;
    this.seed = ((this.seed + 0xfd7046c5) + (this.seed << 3))   & 0xffffffff;
    this.seed = ((this.seed ^ 0xb55a4f09) ^ (this.seed >>> 16)) & 0xffffffff;
    return (this.seed & 0xfffffff) / 0x10000000;
  },
};


var kSplayTreeSize = 8000;
var kSplayTreeModifications = 80;
var kSplayTreePayloadDepth = 5;

var splayTree = null;


function GeneratePayloadTree(depth, key) {
  if (depth == 0) {
    return {
      array  : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      string : 'String for key ' + key + ' in leaf node'
    };
  } else {
    return {
      left:  GeneratePayloadTree(depth - 1, key),
      right: GeneratePayloadTree(depth - 1, key)
    };
  }
}


function GenerateKey() {
  
  
  
  return MyMath.random();
}


function InsertNewNode() {
  
  var key;
  do {
    key = GenerateKey();
  } while (splayTree.find(key) != null);
  splayTree.insert(key, GeneratePayloadTree(kSplayTreePayloadDepth, key));
  return key;
}


function SplaySetup() {
  splayTree = new SplayTree();
  for (var i = 0; i < kSplayTreeSize; i++) InsertNewNode();
}


function SplayTearDown() {
  
  
  
  var keys = splayTree.exportKeys();
  splayTree = null;

  
  var length = keys.length;
  print(length, kSplayTreeSize);

  
  for (var i = 0; i < length - 1; i++) {
    print(keys[i] < keys[i + 1], true);
  }
}


function SplayRun() {
  
  for (var i = 0; i < kSplayTreeModifications; i++) {
    var key = InsertNewNode();
    var greatest = splayTree.findGreatestLessThan(key);
    if (greatest == null) splayTree.remove(key);
    else splayTree.remove(greatest.key);
  }
}



function SplayTree() {
};



SplayTree.prototype.root_ = null;



SplayTree.prototype.isEmpty = function() {
  return !this.root_;
};



SplayTree.prototype.insert = function(key, value) {
  if (this.isEmpty()) {
    this.root_ = new SplayTree.Node(key, value);
    return;
  }
  
  
  this.splay_(key);
  if (this.root_.key == key) {
    return;
  }
  var node = new SplayTree.Node(key, value);
  if (key > this.root_.key) {
    node.left = this.root_;
    node.right = this.root_.right;
    this.root_.right = null;
  } else {
    node.right = this.root_;
    node.left = this.root_.left;
    this.root_.left = null;
  }
  this.root_ = node;
};



SplayTree.prototype.remove = function(key) {
  if (this.isEmpty()) {
    throw Error('Key not found: ' + key);
  }
  this.splay_(key);
  if (this.root_.key != key) {
    throw Error('Key not found: ' + key);
  }
  var removed = this.root_;
  if (!this.root_.left) {
    this.root_ = this.root_.right;
  } else {
    var right = this.root_.right;
    this.root_ = this.root_.left;
    
    this.splay_(key);
    
    
    this.root_.right = right;
  }
  return removed;
};



SplayTree.prototype.find = function(key) {
  if (this.isEmpty()) {
    return null;
  }
  this.splay_(key);
  return this.root_.key == key ? this.root_ : null;
};



SplayTree.prototype.findGreatestLessThan = function(key) {
  if (this.isEmpty()) {
    return null;
  }
  
  
  this.splay_(key);
  
  
  if (this.root_.key <= key) {
    return this.root_;
  } else if (this.root_.left) {
    return this.findMax(this.root_.left);
  } else {
    return null;
  }
};



SplayTree.prototype.exportKeys = function() {
  var result = [];
  if (!this.isEmpty()) {
    this.root_.traverse_(function(node) { result.push(node.key); });
  }
  return result;
};



SplayTree.prototype.splay_ = function(key) {
  if (this.isEmpty()) {
    return;
  }
  
  
  
  
  
  var dummy, left, right;
  dummy = left = right = new SplayTree.Node(null, null);
  var current = this.root_;
  while (true) {
    if (key < current.key) {
      if (!current.left) {
        break;
      }
      if (key < current.left.key) {
        
        var tmp = current.left;
        current.left = tmp.right;
        tmp.right = current;
        current = tmp;
        if (!current.left) {
          break;
        }
      }
      
      right.left = current;
      right = current;
      current = current.left;
    } else if (key > current.key) {
      if (!current.right) {
        break;
      }
      if (key > current.right.key) {
        
        var tmp = current.right;
        current.right = tmp.left;
        tmp.left = current;
        current = tmp;
        if (!current.right) {
          break;
        }
      }
      
      left.right = current;
      left = current;
      current = current.right;
    } else {
      break;
    }
  }
  
  left.right = current.left;
  right.left = current.right;
  current.left = dummy.right;
  current.right = dummy.left;
  this.root_ = current;
};



SplayTree.Node = function(key, value) {
  this.key = key;
  this.value = value;
};



SplayTree.Node.prototype.left = null;



SplayTree.Node.prototype.right = null;



SplayTree.Node.prototype.traverse_ = function(f) {
  var current = this;
  while (current) {
    var left = current.left;
    if (left) left.traverse_(f);
    f(current);
    current = current.right;
  }
};


gc();
print(nurseryStringsEnabled(), true);
print(numAllocSitesPretenured(), 0);

SplaySetup();
SplayRun();
SplayTearDown();











function canCheckPretenuringState() {
  if (gczeal() !== 0) {
    return false;
  }

  let jitOptions = getJitCompilerOptions();
  if (!jitOptions['baseline.enable'] ||
      jitOptions['ion.warmup.trigger'] <= jitOptions['baseline.warmup.trigger']) {
    return false;
  }

  let buildConfig = getBuildConfiguration();
  return !buildConfig['fuzzing-defined'] &&
         !buildConfig['asan'] &&
         !buildConfig['tsan'] &&
         !buildConfig['ubsan'];
}

if (canCheckPretenuringState()) {
  print(nurseryStringsEnabled(), false);
  print(numAllocSitesPretenured() >= 3, true);
}
