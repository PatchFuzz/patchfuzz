try {
    Array.from();
} catch (e) {
    assertEq(e.columnNumber, 11);
    
    
    
    var lastColon = e.stack.lastIndexOf(':');
    var afterPath = e.stack.lastIndexOf(':', lastColon - 1);
    assertEq(e.stack.substring(afterPath), ":2:11\n");
}
