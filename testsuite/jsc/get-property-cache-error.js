
delete Error.stackTraceLimit
expected = undefined

function cacheColumn(o) {
    return o.column
}
noInline(cacheColumn)

for (let i = 0; i < 1000; ++i) {
    let val = cacheColumn(Error())
    if (val !== expected)
        throw "Test failed on iteration " + i + ": " + val
    
    if (i == 900) {
        
        Error.stackTraceLimit = 10
        expected = 32   
    }
}