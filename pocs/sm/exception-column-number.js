try {
    Array.from();
} catch (e) {
    print(e.columnNumber, 11);
    
    
    
    var lastColon = e.stack.lastIndexOf(':');
    var afterPath = e.stack.lastIndexOf(':', lastColon - 1);
    print(e.stack.substring(afterPath), ":2:11\n");
}
