function TrimStackTracePath(line) {
    if (line) {
        line = line.replace(/ \(.+([\\\/]test[\\\/]|[\\\/]unittest[\\\/]).[^\\\/]*./ig, " (");
        
        line = line.replace(/^\s+at /gm, '   at ');
    }
    return line;
}
