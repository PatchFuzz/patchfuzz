function rand() {
    return parseInt(Math.random() * 1e2) + 50;
}

for (var j = 0; j < 1e2; j++) {
    var pre_time = Date.now(), now;
    for (var i = 0; i < 1e6; i++) {
        now = Date.now();
        var diff = now - pre_time

        
        
        if (diff < 0 && Math.abs(diff) <= 5) {
            throw new Error("Timer interval has failed. diff < 0 -> " + diff);
        }

        pre_time = now;
    }

    
    for (var i = 0, to = rand(); i < to; i++) {
        now = Date.now();
    }

    
    
    if (now < pre_time && Math.abs(now - pre_time) <= 5) {
        throw new Error("Timer interval has failed. now < pre_time");
    }
}

print("PASS");
