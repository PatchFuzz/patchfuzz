
























var referenceScore = 20;





if (typeof (WScript) === "undefined") {
    var WScript = {
        Echo: print
    }
}

var print = function () {};

var performance = performance || {};
performance.now = (function() {
  return performance.now       ||
         performance.mozNow    ||
         performance.msNow     ||
         performance.oNow      ||
         performance.webkitNow ||
         Date.now;
})();

function reportResult(score) {
    WScript.Echo("### SCORE: " + (100 * referenceScore / score));
}

var top = {};
top.JetStream = {
    reportResult: reportResult
};





function compareNumbers(a, b) {
    if (a == b)
        return 0;
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    
    
    if (a == a)
        return 1;
    return -1;
}

function averageAbovePercentile(numbers, percentile) {
    
    numbers = numbers.slice();
    
    
    numbers.sort(function(a, b) { return a - b; });
    
    
    
    
    
    
    
    
    
    
    var numbersWeWant = [];
    var originalLength = numbers.length;
    while (numbers.length / originalLength > percentile / 100)
        numbersWeWant.push(numbers.pop());
    
    var sum = 0;
    for (var i = 0; i < numbersWeWant.length; ++i)
        sum += numbersWeWant[i];
    
    var result = sum / numbersWeWant.length;
    
    
    if (numbers.length && result < numbers[numbers.length - 1]) {
        throw "Sanity check fail: the worst case result is " + result +
            " but we didn't take into account " + numbers;
    }
    
    return result;
}

var currentTime;
if (this.performance && performance.now)
    currentTime = function() { return performance.now() };
else if (preciseTime)
    currentTime = function() { return preciseTime() * 1000; };
else
    currentTime = function() { return 0 + new Date(); };



function benchmark() {
    var verbosity = 0;
    var numAircraft = 1000;
    var numFrames = 200;
    var expectedCollisions = 14484;
    var percentile = 95;

    var simulator = new Simulator(numAircraft);
    var detector = new CollisionDetector();
    var lastTime = currentTime();
    var results = [];
    for (var i = 0; i < numFrames; ++i) {
        var time = i / 10;
        
        var collisions = detector.handleNewFrame(simulator.simulate(time));
        
        var before = lastTime;
        var after = currentTime();
        lastTime = after;
        var result = {
            time: after - before,
            numCollisions: collisions.length
        };
        if (verbosity >= 2)
            result.collisions = collisions;
        results.push(result);
    }

    if (verbosity >= 1) {
        for (var i = 0; i < results.length; ++i) {
            var string = "Frame " + i + ": " + results[i].time + " ms.";
            if (results[i].numCollisions)
                string += " (" + results[i].numCollisions + " collisions.)";
            print(string);
            if (verbosity >= 2 && results[i].collisions.length)
                print("    Collisions: " + results[i].collisions);
        }
    }

    
    var actualCollisions = 0;
    for (var i = 0; i < results.length; ++i)
        actualCollisions += results[i].numCollisions;
    if (actualCollisions != expectedCollisions) {
        throw new Error("Bad number of collisions: " + actualCollisions + " (expected " +
                        expectedCollisions + ")");
    }

    
    var times = [];
    for (var i = 0; i < results.length; ++i)
        times.push(results[i].time);
    
    return averageAbovePercentile(times, percentile);
}



function CallSign(value) {
    this._value = value;
}

CallSign.prototype.compareTo = function(other) {
    return this._value.localeCompare(other._value);
}

CallSign.prototype.toString = function() {
    return this._value;
}



function Collision(aircraft, position) {
    this.aircraft = aircraft;
    this.position = position;
}

Collision.prototype.toString = function() {
    return "Collision(" + this.aircraft + " at " + this.position + ")";
};



function CollisionDetector() {
    this._state = new RedBlackTree();
}

CollisionDetector.prototype.handleNewFrame = function(frame) {
    var motions = [];
    var seen = new RedBlackTree();
    
    for (var i = 0; i < frame.length; ++i) {
        var aircraft = frame[i];
        
        var oldPosition = this._state.put(aircraft.callsign, aircraft.position);
        var newPosition = aircraft.position;
        seen.put(aircraft.callsign, true);
        
        if (!oldPosition) {
            
            oldPosition = newPosition;
        }
        
        motions.push(new Motion(aircraft.callsign, oldPosition, newPosition));
    }
    
    
    var toRemove = [];
    this._state.forEach(function(callsign, position) {
        if (!seen.get(callsign))
            toRemove.push(callsign);
    });
    for (var i = 0; i < toRemove.length; ++i)
        this._state.remove(toRemove[i]);
    
    var allReduced = reduceCollisionSet(motions);
    var collisions = [];
    for (var reductionIndex = 0; reductionIndex < allReduced.length; ++reductionIndex) {
        var reduced = allReduced[reductionIndex];
        for (var i = 0; i < reduced.length; ++i) {
            var motion1 = reduced[i];
            for (var j = i + 1; j < reduced.length; ++j) {
                var motion2 = reduced[j];
                var collision = motion1.findIntersection(motion2);
                if (collision)
                    collisions.push(new Collision([motion1.callsign, motion2.callsign], collision));
            }
        }
    }
    
    return collisions;
};



var Constants = {};
Constants.MIN_X = 0;
Constants.MIN_Y = 0;
Constants.MAX_X = 1000;
Constants.MAX_Y = 1000;
Constants.MIN_Z = 0;
Constants.MAX_Z = 10;
Constants.PROXIMITY_RADIUS = 1;
Constants.GOOD_VOXEL_SIZE = Constants.PROXIMITY_RADIUS * 2;



function Motion(callsign, posOne, posTwo) {
    this.callsign = callsign;
    this.posOne = posOne;
    this.posTwo = posTwo;
}

Motion.prototype.toString = function() {
    return "Motion(" + this.callsign + " from " + this.posOne + " to " + this.posTwo + ")";
};

Motion.prototype.delta = function() {
    return this.posTwo.minus(this.posOne);
};

Motion.prototype.findIntersection = function(other) {
    var init1 = this.posOne;
    var init2 = other.posOne;
    var vec1 = this.delta();
    var vec2 = other.delta();
    var radius = Constants.PROXIMITY_RADIUS;
    
    
    
    
    
    
    
    
    
    
    
    
    var a = vec2.minus(vec1).squaredMagnitude();
    
    if (a != 0) {
        
        

        
        
        

        


        
        
        

        
        
        
        
        
        

        

        var b = 2 * init1.minus(init2).dot(vec1.minus(vec2));

        
        var c = -radius * radius + init2.minus(init1).squaredMagnitude();

        var discr = b * b - 4 * a * c;
        if (discr < 0)
            return null;

        var v1 = (-b - Math.sqrt(discr)) / (2 * a);
        var v2 = (-b + Math.sqrt(discr)) / (2 * a);

        if (v1 <= v2 && ((v1 <= 1 && 1 <= v2) ||
                         (v1 <= 0 && 0 <= v2) ||
                         (0 <= v1 && v2 <= 1))) {
            
            var v;
            if (v1 <= 0) {
                
                v = 0;
            } else {
                
                v = v1;
            }
            
            var result1 = init1.plus(vec1.times(v));
            var result2 = init2.plus(vec2.times(v));
            
            var result = result1.plus(result2).times(0.5);
            if (result.x >= Constants.MIN_X &&
                result.x <= Constants.MAX_X &&
                result.y >= Constants.MIN_Y &&
                result.y <= Constants.MAX_Y &&
                result.z >= Constants.MIN_Z &&
                result.z <= Constants.MAX_Z)
                return result;
        }

        return null;
    }
    
    
    
    
    
    
    var dist = init2.minus(init1).magnitude();
    if (dist <= radius)
        return init1.plus(init2).times(0.5);
    
    return null;
};



var RedBlackTree = (function(){
    function compare(a, b) {
        return a.compareTo(b);
    }
    
    function treeMinimum(x) {
        while (x.left)
            x = x.left;
        return x;
    }
    
    function treeMaximum(x) {
        while (x.right)
            x = x.right;
        return x;
    }
    
    function Node(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = "red";
    }
    
    Node.prototype.successor = function() {
        var x = this;
        if (x.right)
            return treeMinimum(x.right);
        var y = x.parent;
        while (y && x == y.right) {
            x = y;
            y = y.parent;
        }
        return y;
    };
    
    Node.prototype.predecessor = function() {
        var x = this;
        if (x.left)
            return treeMaximum(x.left);
        var y = x.parent;
        while (y && x == y.left) {
            x = y;
            y = y.parent;
        }
        return y;
    };
    
    Node.prototype.toString = function() {
        return this.key + "=>" + this.value + " (" + this.color + ")";
    };
    
    function RedBlackTree() {
        this._root = null;
    }
    
    RedBlackTree.prototype.put = function(key, value) {
        var insertionResult = this._treeInsert(key, value);
        if (!insertionResult.isNewEntry)
            return insertionResult.oldValue;
        var x = insertionResult.newNode;
        
        while (x != this._root && x.parent.color == "red") {
            if (x.parent == x.parent.parent.left) {
                var y = x.parent.parent.right;
                if (y && y.color == "red") {
                    
                    x.parent.color = "black";
                    y.color = "black";
                    x.parent.parent.color = "red";
                    x = x.parent.parent;
                } else {
                    if (x == x.parent.right) {
                        
                        x = x.parent;
                        this._leftRotate(x);
                    }
                    
                    x.parent.color = "black";
                    x.parent.parent.color = "red";
                    this._rightRotate(x.parent.parent);
                }
            } else {
                
                var y = x.parent.parent.left;
                if (y && y.color == "red") {
                    
                    x.parent.color = "black";
                    y.color = "black";
                    x.parent.parent.color = "red";
                    x = x.parent.parent;
                } else {
                    if (x == x.parent.left) {
                        
                        x = x.parent;
                        this._rightRotate(x);
                    }
                    
                    x.parent.color = "black";
                    x.parent.parent.color = "red";
                    this._leftRotate(x.parent.parent);
                }
            }
        }
        
        this._root.color = "black";
        return null;
    };
    
    RedBlackTree.prototype.remove = function(key) {
        var z = this._findNode(key);
        if (!z)
            return null;
        
        
        var y;
        if (!z.left || !z.right)
            y = z;
        else
            y = z.successor();

        
        var x;
        if (y.left)
            x = y.left;
        else
            x = y.right;
        
        
        
        var xParent;
        if (x) {
            x.parent = y.parent;
            xParent = x.parent;
        } else
            xParent = y.parent;
        if (!y.parent)
            this._root = x;
        else {
            if (y == y.parent.left)
                y.parent.left = x;
            else
                y.parent.right = x;
        }
        
        if (y != z) {
            if (y.color == "black")
                this._removeFixup(x, xParent);
            
            y.parent = z.parent;
            y.color = z.color;
            y.left = z.left;
            y.right = z.right;
            
            if (z.left)
                z.left.parent = y;
            if (z.right)
                z.right.parent = y;
            if (z.parent) {
                if (z.parent.left == z)
                    z.parent.left = y;
                else
                    z.parent.right = y;
            } else
                this._root = y;
        } else if (y.color == "black")
            this._removeFixup(x, xParent);
        
        return z.value;
    };
    
    RedBlackTree.prototype.get = function(key) {
        var node = this._findNode(key);
        if (!node)
            return null;
        return node.value;
    };
    
    RedBlackTree.prototype.forEach = function(callback) {
        if (!this._root)
            return;
        for (var current = treeMinimum(this._root); current; current = current.successor())
            callback(current.key, current.value);
    };
    
    RedBlackTree.prototype.asArray = function() {
        var result = [];
        this.forEach(function(key, value) {
            result.push({key: key, value: value});
        });
        return result;
    };
    
    RedBlackTree.prototype.toString = function() {
        var result = "[";
        var first = true;
        this.forEach(function(key, value) {
            if (first)
                first = false;
            else
                result += ", ";
            result += key + "=>" + value;
        });
        return result + "]";
    };
    
    RedBlackTree.prototype._findNode = function(key) {
        for (var current = this._root; current;) {
            var comparisonResult = compare(key, current.key);
            if (!comparisonResult)
                return current;
            if (comparisonResult < 0)
                current = current.left;
            else
                current = current.right;
        }
        return null;
    };
    
    RedBlackTree.prototype._treeInsert = function(key, value) {
        var y = null;
        var x = this._root;
        while (x) {
            y = x;
            var comparisonResult = key.compareTo(x.key);
            if (comparisonResult < 0)
                x = x.left;
            else if (comparisonResult > 0)
                x = x.right;
            else {
                var oldValue = x.value;
                x.value = value;
                return {isNewEntry:false, oldValue:oldValue};
            }
        }
        var z = new Node(key, value);
        z.parent = y;
        if (!y)
            this._root = z;
        else {
            if (key.compareTo(y.key) < 0)
                y.left = z;
            else
                y.right = z;
        }
        return {isNewEntry:true, newNode:z};
    };
    
    RedBlackTree.prototype._leftRotate = function(x) {
        var y = x.right;
        
        
        x.right = y.left;
        if (y.left)
            y.left.parent = x;
        
        
        y.parent = x.parent;
        if (!x.parent)
            this._root = y;
        else {
            if (x == x.parent.left)
                x.parent.left = y;
            else
                x.parent.right = y;
        }
        
        
        y.left = x;
        x.parent = y;
        
        return y;
    };
    
    RedBlackTree.prototype._rightRotate = function(y) {
        var x = y.left;
        
        
        y.left = x.right;
        if (x.right)
            x.right.parent = y;
        
        
        x.parent = y.parent;
        if (!y.parent)
            this._root = x;
        else {
            if (y == y.parent.left)
                y.parent.left = x;
            else
                y.parent.right = x;
        }
        
        x.right = y;
        y.parent = x;
        
        return x;
    };
    
    RedBlackTree.prototype._removeFixup = function(x, xParent) {
        while (x != this._root && (!x || x.color == "black")) {
            if (x == xParent.left) {
                
                
                
                var w = xParent.right;
                if (w.color == "red") {
                    
                    w.color = "black";
                    xParent.color = "red";
                    this._leftRotate(xParent);
                    w = xParent.right;
                }
                if ((!w.left || w.left.color == "black")
                    && (!w.right || w.right.color == "black")) {
                    
                    w.color = "red";
                    x = xParent;
                    xParent = x.parent;
                } else {
                    if (!w.right || w.right.color == "black") {
                        
                        w.left.color = "black";
                        w.color = "red";
                        this._rightRotate(w);
                        w = xParent.right;
                    }
                    
                    w.color = xParent.color;
                    xParent.color = "black";
                    if (w.right)
                        w.right.color = "black";
                    this._leftRotate(xParent);
                    x = this._root;
                    xParent = x.parent;
                }
            } else {
                
                
                var w = xParent.left;
                if (w.color == "red") {
                    
                    w.color = "black";
                    xParent.color = "red";
                    this._rightRotate(xParent);
                    w = xParent.left;
                }
                if ((!w.right || w.right.color == "black")
                    && (!w.left || w.left.color == "black")) {
                    
                    w.color = "red";
                    x = xParent;
                    xParent = x.parent;
                } else {
                    if (!w.left || w.left.color == "black") {
                        
                        w.right.color = "black";
                        w.color = "red";
                        this._leftRotate(w);
                        w = xParent.left;
                    }
                    
                    w.color = xParent.color;
                    xParent.color = "black";
                    if (w.left)
                        w.left.color = "black";
                    this._rightRotate(xParent);
                    x = this._root;
                    xParent = x.parent;
                }
            }
        }
        if (x)
            x.color = "black";
    };
    
    return RedBlackTree;
})();



var drawMotionOnVoxelMap = (function() {
    var voxelSize = Constants.GOOD_VOXEL_SIZE;
    var horizontal = new Vector2D(voxelSize, 0);
    var vertical = new Vector2D(0, voxelSize);
    
    function voxelHash(position) {
        var xDiv = (position.x / voxelSize) | 0;
        var yDiv = (position.y / voxelSize) | 0;
        
        var result = new Vector2D();
        result.x = voxelSize * xDiv;
        result.y = voxelSize * yDiv;
        
        if (position.x < 0)
            result.x -= voxelSize;
        if (position.y < 0)
            result.y -= voxelSize;
        
        return result;
    }
    
    return function(voxelMap, motion) {
        var seen = new RedBlackTree();
        
        function putIntoMap(voxel) {
            var array = voxelMap.get(voxel);
            if (!array)
                voxelMap.put(voxel, array = []);
            array.push(motion);
        }
        
        function isInVoxel(voxel) {
            if (voxel.x > Constants.MAX_X ||
                voxel.x < Constants.MIN_X ||
                voxel.y > Constants.MAX_Y ||
                voxel.y < Constants.MIN_Y)
                return false;
            
            var init = motion.posOne;
            var fin = motion.posTwo;
            
            var v_s = voxelSize;
            var r = Constants.PROXIMITY_RADIUS / 2;
            
            var v_x = voxel.x;
            var x0 = init.x;
            var xv = fin.x - init.x;
            
            var v_y = voxel.y;
            var y0 = init.y;
            var yv = fin.y - init.y;
            
            var low_x, high_x;
            low_x = (v_x - r - x0) / xv;
            high_x = (v_x + v_s + r - x0) / xv;
            
            if (xv < 0) {
                var tmp = low_x;
                low_x = high_x;
                high_x = tmp;
            }
            
            var low_y, high_y;
            low_y = (v_y - r - y0) / yv;
            high_y = (v_y + v_s + r - y0) / yv;
            
            if (yv < 0) {
                var tmp = low_y;
                low_y = high_y;
                high_y = tmp;
            }
            
            if (false) {
                print("v_x = " + v_x + ", x0 = " + x0 + ", xv = " + xv + ", v_y = " + v_y + ", y0 = " + y0 + ", yv = " + yv + ", low_x = " + low_x + ", low_y = " + low_y + ", high_x = " + high_x + ", high_y = " + high_y);
            }
            
            return (((xv == 0 && v_x <= x0 + r && x0 - r <= v_x + v_s)  || 
                     ((low_x <= 1 && 1 <= high_x) || (low_x <= 0 && 0 <= high_x) ||
                      (0 <= low_x && high_x <= 1))) && 
                    ((yv == 0 && v_y <= y0 + r && y0 - r <= v_y + v_s)  || 
                     ((low_y <= 1 && 1 <= high_y) || (low_y <= 0 && 0 <= high_y) ||
                      (0 <= low_y && high_y <= 1))) && 
                    (xv == 0 || yv == 0 || 
                     (low_y <= high_x && high_x <= high_y) ||
                     (low_y <= low_x && low_x <= high_y) ||
                     (low_x <= low_y && high_y <= high_x)));
        }
        
        function recurse(nextVoxel) {
            if (!isInVoxel(nextVoxel, motion))
                return;
            if (seen.put(nextVoxel, true))
                return;
            
            putIntoMap(nextVoxel);
            
            recurse(nextVoxel.minus(horizontal));
            recurse(nextVoxel.plus(horizontal));
            recurse(nextVoxel.minus(vertical));
            recurse(nextVoxel.plus(vertical));
            recurse(nextVoxel.minus(horizontal).minus(vertical));
            recurse(nextVoxel.minus(horizontal).plus(vertical));
            recurse(nextVoxel.plus(horizontal).minus(vertical));
            recurse(nextVoxel.plus(horizontal).plus(vertical));
        }
        
        recurse(voxelHash(motion.posOne));
    };
})();

function reduceCollisionSet(motions) {
    var voxelMap = new RedBlackTree();
    for (var i = 0; i < motions.length; ++i)
        drawMotionOnVoxelMap(voxelMap, motions[i]);
        
    var result = [];
    voxelMap.forEach(function(key, value) {
        if (value.length > 1)
            result.push(value);
    });
    return result;
}




function Simulator(numAircraft) {
    this._aircraft = [];
    for (var i = 0; i < numAircraft; ++i)
        this._aircraft.push(new CallSign("foo" + i));
}

Simulator.prototype.simulate = function(time) {
    var frame = [];
    for (var i = 0; i < this._aircraft.length; i += 2) {
        frame.push({
            callsign: this._aircraft[i],
            position: new Vector3D(time, Math.cos(time) * 2 + i * 3, 10)
        });
        frame.push({
            callsign: this._aircraft[i + 1],
            position: new Vector3D(time, Math.sin(time) * 2 + i * 3, 10)
        });
    }
    return frame;
};



function Vector2D(x, y) {
    this.x = x;
    this.y = y;
}

Vector2D.prototype.plus = function(other) {
    return new Vector2D(this.x + other.x,
                        this.y + other.y);
};

Vector2D.prototype.minus = function(other) {
    return new Vector2D(this.x - other.x,
                        this.y - other.y);
};

Vector2D.prototype.toString = function() {
    return "[" + this.x + ", " + this.y + "]";
};

Vector2D.prototype.compareTo = function(other) {
    var result = compareNumbers(this.x, other.x);
    if (result)
        return result;
    return compareNumbers(this.y, other.y);
};



function Vector3D(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector3D.prototype.plus = function(other) {
    return new Vector3D(this.x + other.x,
                        this.y + other.y,
                        this.z + other.z);
};

Vector3D.prototype.minus = function(other) {
    return new Vector3D(this.x - other.x,
                        this.y - other.y,
                        this.z - other.z);
};

Vector3D.prototype.dot = function(other) {
    return this.x * other.x + this.y * other.y + this.z * other.z;
};

Vector3D.prototype.squaredMagnitude = function() {
    return this.dot(this);
};

Vector3D.prototype.magnitude = function() {
    return Math.sqrt(this.squaredMagnitude());
};

Vector3D.prototype.times = function(amount) {
    return new Vector3D(this.x * amount,
                        this.y * amount,
                        this.z * amount);
};

Vector3D.prototype.as2D = function() {
    return new Vector2D(this.x, this.y);
};

Vector3D.prototype.toString = function() {
    return "[" + this.x + ", " + this.y + ", " + this.z + "]";
};


var result = benchmark();




top.JetStream.reportResult(result);