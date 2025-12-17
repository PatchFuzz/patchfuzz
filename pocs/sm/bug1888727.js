function test() {
    
    const n = 0xfeeddeadbeef2dadfeeddeadbeef2dadfeeddeadbeef2dadfeeddeadbeef2dadn;
    const s = serialize(n, [], {scope: 'DifferentProcess'});
    print(deserialize(s), n);

    
    s.clonebuffer = s.arraybuffer.slice(0, -8);

    
    try {
        deserialize(s);
        
        
        print(true, false, "should have thrown truncation error");
    } catch (e) {
        print(e.message.includes("truncated"), true);
    }
}

test();
